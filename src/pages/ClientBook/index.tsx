import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { toDateInputValue } from '@/utils/dates';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { useParams } from 'react-router-dom';
import { bookSlot } from '@/services/firestore';
import { useAuthStore } from '@/stores/auth';
import * as S from './styles';

export default function ClientBook() {
  const { shopId } = useParams();
  const { user } = useAuthStore();
  const [date, setDate] = useState(toDateInputValue());
  const [times, setTimes] = useState<string[]>([]);
  const [shop, setShop] = useState<any>(null);
  const [booked, setBooked] = useState<string[]>([]);
  const [phone, setPhone] = useState('');
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  useEffect(() => {
    async function load() {
      if (!shopId) return;

      const shopSnap = await getDoc(doc(db, 'shops', shopId));
      setShop(shopSnap.data());

      const schedSnap = await getDoc(doc(db, 'schedules', shopId));
      const weekly = (schedSnap.data() as any)?.weekly || {};
      const weekday = new Date(date + 'T00:00:00').getDay();
      const map = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;
      setTimes(weekly[map[weekday]] || []);

      // pegar agendamentos existentes
      const bookingsSnap = await getDocs(
        collection(db, 'shops', shopId, 'bookings'),
      );
      const allBookings = bookingsSnap.docs.map((d) => d.data() as any);

      // horários ocupados do dia
      const bookedToday = allBookings
        .filter((b) => b.date === date && b.status !== 'cancelled')
        .map((b) => b.time);
      setBooked(bookedToday);

      // cliente já agendou nessa barbearia (qualquer data futura)
      if (user) {
        const hasBooking = allBookings.some(
          (b) => b.clientEmail === user.email && b.status !== 'cancelled',
        );
        setAlreadyBooked(hasBooking);
      }
    }
    load();
  }, [shopId, date, user]);

  async function confirm(t: string) {
    if (!user) {
      alert('Você precisa estar logado para agendar.');
      return;
    }
    if (!phone.trim()) {
      alert('Informe seu telefone de contato.');
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
      alert('Agendamento realizado!');
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <Container>
      <Card>
        <h2>Agendar: {shop?.name}</h2>

        {alreadyBooked ? (
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
                onChange={(e) => setDate(e.target.value)}
              />
            </S.DateSelector>

            <S.PhoneInput
              type="text"
              placeholder="Telefone (99) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <S.TimeGrid>
              {times.length === 0 && (
                <p>Nenhum horário disponível neste dia.</p>
              )}
              {times.map((t) => {
                const isBooked = booked.includes(t);
                return (
                  <Button
                    key={t}
                    onClick={() => confirm(t)}
                    disabled={isBooked}
                    variant={isBooked ? 'ghost' : 'default'}
                  >
                    {t} {isBooked && '(ocupado)'}
                  </Button>
                );
              })}
            </S.TimeGrid>
          </>
        )}
      </Card>
    </Container>
  );
}
