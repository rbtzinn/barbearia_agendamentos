import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { toDateInputValue } from '@/utils/dates';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { useParams, Link } from 'react-router-dom';
import { bookSlot, listClientBookings } from '@/services/firestore';
import { useAuthStore } from '@/stores/auth';
import InputMask from 'react-input-mask';
import ConfirmDialog from '@/components/ConfirmDialog';
import * as S from './styles';
import { NameAnonimousInput } from './styles';

export default function ClientBook() {
  const { shopId } = useParams();
  const { user } = useAuthStore();

  const [date, setDate] = useState(toDateInputValue());
  const [times, setTimes] = useState<string[]>([]);
  const [shop, setShop] = useState<any>(null);
  const [booked, setBooked] = useState<string[]>([]);
  const [phone, setPhone] = useState('');
  const [anonName, setAnonName] = useState('');
  const [alreadyBookedHere, setAlreadyBookedHere] = useState(false);
  const [alreadyBookedOther, setAlreadyBookedOther] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);
  const [anonBooked, setAnonBooked] = useState(false);

  // Carrega barbearia e horários semanais
  useEffect(() => {
    async function loadShopAndSchedule() {
      if (!shopId) return;

      const shopSnap = await getDoc(doc(db, 'shops', shopId));
      setShop(shopSnap.data());

      const schedSnap = await getDoc(doc(db, 'schedules', shopId));
      const weekly = (schedSnap.data() as any)?.weekly || {};
      const weekday = new Date(date + 'T00:00:00').getDay();
      const map = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;
      setTimes(weekly[map[weekday]] || []);
    }
    loadShopAndSchedule();
  }, [shopId, date]);

  // Carrega agendamentos já feitos (restrições só se logado)
  useEffect(() => {
    async function loadBookings() {
      if (!shopId) return;

      const bookingsSnap = await getDocs(collection(db, 'shops', shopId, 'bookings'));
      const allBookings = bookingsSnap.docs.map((d) => d.data() as any);

      const bookedToday = allBookings
        .filter((b) => b.date === date && b.status !== 'cancelled')
        .map((b) => b.time);
      setBooked(bookedToday);

      if (user) {
        const hasBookingHere = allBookings.some(
          (b) =>
            b.clientEmail === user.email &&
            b.status !== 'cancelled' &&
            b.status !== 'done',
        );
        setAlreadyBookedHere(hasBookingHere);

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
    const today = toDateInputValue();

    if (date < today) {
      setDialogMessage('Não é possível agendar em uma data que já passou.');
      return;
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 11) {
      setDialogMessage('Telefone inválido. Use o formato (99) 99999-9999.');
      return;
    }

    const clientName = user ? (user.displayName || user.email || 'Cliente') : anonName;
    if (!clientName.trim()) {
      setDialogMessage('Informe seu nome.');
      return;
    }

    try {
      await bookSlot(shopId!, date, t, clientName, phone);
      setBooked((prev) => [...prev, t]);

      if (user) {
        // fluxo logado: mantém mensagem padrão e bloqueia novos nessa barbearia
        setAlreadyBookedHere(true);
        setDialogMessage('Agendamento realizado com sucesso!');
      } else {
        // fluxo anônimo: mostra CTA para criar conta e ver seus agendamentos
        setAnonBooked(true);
        setDialogMessage(null);
      }
    } catch (e: any) {
      setDialogMessage(e.message);
    }
  }

  return (
    <Container>
      <Card>
        <h2>Agendar: {shop?.name}</h2>

        {/* Mensagem de sucesso para anônimo com CTA */}
        {!user && anonBooked ? (
          <p style={{ marginTop: 8 }}>
            Agendamento concluído! 🎉 Se quiser ver, gerenciar ou cancelar seus agendamentos,
            <br />
            <Link to="/auth"><strong>crie uma conta</strong></Link> e acesse <strong>Meus Agendamentos</strong>.
          </p>
        ) : alreadyBookedOther ? (
          <p>
            Você já possui um agendamento ativo em outra barbearia. Para agendar aqui,
            é necessário cancelar primeiro em <strong>Meus Agendamentos</strong>.
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

            {!user && (
              <NameAnonimousInput
                type="text"
                placeholder="Seu nome"
                value={anonName}
                onChange={(e) => setAnonName(e.target.value)}
                style={{ marginBottom: 8, padding: 8 }}
              />
            )}

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
