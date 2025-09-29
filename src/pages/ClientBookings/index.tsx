import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { listClientBookings, cancelBooking } from '@/services/firestore';
import { useAuthStore } from '@/stores/auth';
import { useNavigate } from 'react-router-dom';
import ConfirmDialog from '@/components/ConfirmDialog';
import * as S from './styles';

export default function ClientBookings() {
  const { user, role } = useAuthStore();
  const [bookings, setBookings] = useState<any[]>([]);
  const [cancelTarget, setCancelTarget] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      if (!user) return;
      const b = await listClientBookings(user.displayName || user.email || '');
      setBookings(
        b.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)),
      );
    }
    load();
  }, [user]);

  if (!user || role !== 'client') {
    return (
      <Container>
        <Card>
          <p>
            Você precisa estar logado como cliente para ver seus agendamentos.
          </p>
        </Card>
      </Container>
    );
  }

  async function handleCancel(reason: string) {
    if (!cancelTarget) return;
    await cancelBooking(cancelTarget.shopId, cancelTarget.id, reason, 'client');
    setBookings((prev) =>
      prev.map((bk) =>
        bk.id === cancelTarget.id
          ? {
              ...bk,
              status: 'cancelled',
              cancelReason: reason,
              cancelledBy: 'client',
            }
          : bk,
      ),
    );
    setCancelTarget(null);
  }

  return (
    <Container>
      <Card>
        <h2>Meus Agendamentos</h2>
        {bookings.length === 0 && <p>Nenhum agendamento encontrado.</p>}
        <S.List>
          {bookings.map((b) => (
            <S.Item key={b.id} status={b.status}>
              <strong>
                {b.date} às {b.time}
              </strong>
              <div>Barbearia: {b.shopName || b.shopId}</div>
              <div>Status: {b.status || 'ativo'}</div>

              {b.status === 'cancelled' && (
                <S.CancelReason>
                  Cancelado pelo {b.cancelledBy}: {b.cancelReason}
                </S.CancelReason>
              )}

              {b.status !== 'cancelled' && (
                <S.Actions>
                  <Button variant="danger" onClick={() => setCancelTarget(b)}>
                    Cancelar
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={async () => {
                      // cancelar automaticamente antes de redirecionar
                      await cancelBooking(
                        b.shopId,
                        b.id,
                        'Cliente reagendou',
                        'client',
                      );
                      setBookings((prev) =>
                        prev.map((bk) =>
                          bk.id === b.id
                            ? {
                                ...bk,
                                status: 'cancelled',
                                cancelReason: 'Cliente reagendou',
                                cancelledBy: 'client',
                              }
                            : bk,
                        ),
                      );
                      // agora manda o cliente escolher outro horário
                      navigate(`/s/${b.shopSlug || b.shopId}`);
                    }}
                  >
                    Trocar horário
                  </Button>
                </S.Actions>
              )}
            </S.Item>
          ))}
        </S.List>
      </Card>

      {cancelTarget && (
        <ConfirmDialog
          title="Cancelar agendamento"
          message={`Você realmente deseja cancelar o horário de ${cancelTarget.date} às ${cancelTarget.time}?`}
          onCancel={() => setCancelTarget(null)}
          onConfirm={handleCancel}
        />
      )}
    </Container>
  );
}
