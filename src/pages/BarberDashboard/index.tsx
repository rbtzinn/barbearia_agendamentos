import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useAuthStore } from '@/stores/auth';
import {
  cancelBooking,
  getShopByOwner,
  listBookings,
} from '@/services/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import ConfirmDialog from '@/components/ConfirmDialog';

export default function BarberDashboard() {
  const { user } = useAuthStore();
  const [shopId, setShopId] = useState<string>('');
  const [bookings, setBookings] = useState<any[]>([]);
  const [cancelTarget, setCancelTarget] = useState<any | null>(null);

  useEffect(() => {
    async function load() {
      if (!user) return;
      const shops = await getShopByOwner(user.uid);
      if (shops[0]) {
        setShopId(shops[0].id);
        const b = await listBookings(shops[0].id);
        setBookings(
          b.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)),
        );
      }
    }
    load();
  }, [user]);

  return (
    <Container>
      <Card>
        <h2>Painel do Barbeiro</h2>
        {!shopId && (
          <>
            <p>Você ainda não cadastrou sua barbearia.</p>
            <Link to="/barber/setup">
              <Button>Cadastrar</Button>
            </Link>
          </>
        )}
        {shopId && (
          <>
            <S.ButtonGroup>
              <Link to={`/barber/schedule?shopId=${shopId}`}>
                <Button>Configurar horários</Button>
              </Link>
              <Link to={`/barber/share?shopId=${shopId}`}>
                <Button variant="ghost">Ver link público</Button>
              </Link>
            </S.ButtonGroup>
            <S.BookingsTitle>Agendamentos</S.BookingsTitle>
            <S.BookingsGrid>
              {bookings.length === 0 && <p>Nenhum agendamento.</p>}
              {bookings.map((b) => (
                <S.BookingCard key={b.id} status={b.status}>
                  <strong>
                    {b.date} às {b.time}
                  </strong>
                  <div>
                    {b.clientName} - {b.clientPhone}
                  </div>
                  {b.status === 'cancelled' && (
                    <S.CancelReason>Cancelado: {b.cancelReason}</S.CancelReason>
                  )}
                  {b.status !== 'cancelled' && (
                    <Button variant="danger" onClick={() => setCancelTarget(b)}>
                      Cancelar
                    </Button>
                  )}
                </S.BookingCard>
              ))}
            </S.BookingsGrid>
          </>
        )}
      </Card>

      {cancelTarget && (
        <ConfirmDialog
          title="Cancelar agendamento"
          message={`Você está prestes a cancelar o horário de ${cancelTarget.date} às ${cancelTarget.time}.`}
          onCancel={() => setCancelTarget(null)}
          onConfirm={async (reason) => {
            await cancelBooking(shopId, cancelTarget.id, reason, 'barber');
            setBookings((prev) =>
              prev.map((bk) =>
                bk.id === cancelTarget.id
                  ? { ...bk, status: 'cancelled', cancelReason: reason }
                  : bk,
              ),
            );
            setCancelTarget(null);
          }}
        />
      )}
    </Container>
  );
}
