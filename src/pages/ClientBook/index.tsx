import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { toDateInputValue } from '@/utils/dates';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { useParams } from 'react-router-dom';
import { bookSlot, listClientBookings } from '@/services/firestore';
import { useAuthStore } from '@/stores/auth';
import InputMask from 'react-input-mask';
import ConfirmDialog from '@/components/ConfirmDialog';
import * as S from './styles';

export default function ClientBook() {
  const { shopId } = useParams();
  const { user } = useAuthStore();
  const [date, setDate] = useState(toDateInputValue());
  const [times, setTimes] = useState<string[]>([]);
  const [shop, setShop] = useState<any>(null);
  const [booked, setBooked] = useState<string[]>([]);
  const [phone, setPhone] = useState('');
  const [alreadyBookedHere, setAlreadyBookedHere] = useState(false);
  const [alreadyBookedOther, setAlreadyBookedOther] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadShopAndSchedule() {
      if (!shopId) return;

      // carrega dados da barbearia
      const shopSnap = await getDoc(doc(db, 'shops', shopId));
      setShop(shopSnap.data());

      // carrega horários semanais
      const schedSnap = await getDoc(doc(db, 'schedules', shopId));
      const weekly = (schedSnap.data() as any)?.weekly || {};
      const weekday = new Date(date + 'T00:00:00').getDay();
      const map = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;
      setTimes(weekly[map[weekday]] || []);
    }

    loadShopAndSchedule();
  }, [shopId, date]);
  
  useEffect(() => {
    async function loadBookings() {
      if (!shopId) return;

      // carrega agendamentos da barbearia
      const bookingsSnap = await getDocs(
        collection(db, 'shops', shopId, 'bookings'),
      );
      const allBookings = bookingsSnap.docs.map((d) => d.data() as any);

      // horários ocupados do dia selecionado
      const bookedToday = allBookings
        .filter((b) => b.date === date && b.status !== 'cancelled')
        .map((b) => b.time);
      setBooked(bookedToday);

      // checa agendamentos do usuário
      if (user) {
        // nesta barbearia
        const hasBookingHere = allBookings.some(
          (b) =>
            b.clientEmail === user.email &&
            b.status !== 'cancelled' &&
            b.status !== 'done',
        );
        setAlreadyBookedHere(hasBookingHere);

        // em outras barbearias
        const allClientBookings = await listClientBookings(user.email || '');
        const hasOther = allClientBookings.some(
          (b) =>
            b.shopId !== shopId &&
            b.status !== 'cancelled' &&
            b.status !== 'done',
        );
        setAlreadyBookedOther(hasOther);
      }
    }

    loadBookings();
  }, [shopId, date, user]);

  function horaJaPassou(date: string, time: string) {
    const agora = new Date();
    const agendamento = new Date(`${date}T${time}:00`);
    return agendamento < agora;
  }

  async function confirm(t: string) {
    if (!user) {
      setDialogMessage('Você precisa estar logado para agendar.');
      return;
    }
    if (!phone.trim()) {
      setDialogMessage('Informe seu telefone de contato.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 11) {
      setDialogMessage('Telefone inválido. Use o formato (99) 99999-9999.');
      return;
    }
    const today = toDateInputValue();
    if (date < today) {
      setDialogMessage('Não é possível agendar em uma data que já passou.');
      return;
    }

    try {
      await bookSlot(
        shopId!,
        date,
        t,
        user.displayName || user.email || 'Cliente',
        phone,
      );
      setBooked((prev) => [...prev, t]);
      setAlreadyBookedHere(true);
      setDialogMessage('Agendamento realizado com sucesso!');
    } catch (e: any) {
      setDialogMessage(e.message);
    }
  }

  return (
    <Container>
      <Card>
        <h2>Agendar: {shop?.name}</h2>

        {alreadyBookedOther ? (
          <p>
            Você já possui um agendamento ativo em outra barbearia. Para agendar
            aqui, é necessário cancelar primeiro em{' '}
            <strong>Meus Agendamentos</strong>.
          </p>
        ) : alreadyBookedHere ? (
          <p>
            Você já agendou nesta barbearia. Para trocar de horário ou cancelar,
            vá para <strong>Meus Agendamentos</strong>.
          </p>
        ) : (
          <>
            <S.DateSelector>
              <input
                type="date"
                value={date}
                min={toDateInputValue()}
                onChange={(e) => setDate(e.target.value)}
              />
            </S.DateSelector>

            <S.PhoneInput
              as={InputMask}
              mask="(99) 99999-9999"
              type="text"
              placeholder="Telefone (99) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <S.TimeGrid>
              {times.length === 0 && <p>Nenhum horário disponível neste dia.</p>}
              {times.map((t) => {
                const isBooked = booked.includes(t);
                const isPast = horaJaPassou(date, t);
                const disabled = isBooked || isPast;

                return (
                  <Button
                    key={t}
                    onClick={() => confirm(t)}
                    disabled={disabled}
                    variant={disabled ? 'ghost' : 'default'}
                  >
                    {t} {isBooked && '(ocupado)'} {isPast && !isBooked && '(já passou)'}
                  </Button>
                );
              })}
            </S.TimeGrid>
          </>
        )}
      </Card>

      {dialogMessage && (
        <ConfirmDialog
          title="Aviso"
          message={dialogMessage}
          onCancel={() => setDialogMessage(null)}
          onConfirm={() => setDialogMessage(null)}
          confirmLabel="OK"
          simple
        />
      )}
    </Container>
  );
}
