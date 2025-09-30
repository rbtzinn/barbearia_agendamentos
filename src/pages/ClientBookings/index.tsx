import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import {
  listClientBookings,
  cancelBooking,
  bookSlot,
  archiveBooking,
  doneBooking,
} from '@/services/firestore';
import { useAuthStore } from '@/stores/auth';
import ConfirmDialog from '@/components/ConfirmDialog';
import { FiRefreshCw, FiTrash2 } from 'react-icons/fi';
import * as S from './styles';

function traduzStatus(status: string) {
  switch (status) {
    case 'confirmed':
      return 'Confirmado';
    case 'cancelled':
      return 'Cancelado';
    case 'done':
      return 'Concluído';
    default:
      return status;
  }
}

function traduzCancelador(by: string) {
  switch (by) {
    case 'client':
      return 'cliente';
    case 'barber':
      return 'barbeiro';
    default:
      return by;
  }
}

export default function ClientBookings() {
  const { user, role } = useAuthStore();
  const [bookings, setBookings] = useState<any[]>([]);
  const [rescheduleTarget, setRescheduleTarget] = useState<any | null>(null);
  const [cancelTarget, setCancelTarget] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null); // 👈 feedback estilizado

  async function load() {
    if (!user) return;
    setLoading(true);
    try {
      const b = await listClientBookings(user.displayName || user.email || '');
      setBookings(
        b.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)),
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [user]);

  if (!user || role !== 'client') {
    return (
      <Container>
        <Card>
          <p>Você precisa estar logado como cliente para ver seus agendamentos.</p>
        </Card>
      </Container>
    );
  }

  async function handleCancel(reason?: string) {
    if (!cancelTarget || !reason) return;
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

  async function handleReschedule(reason?: string, newDate?: string, newTime?: string) {
    if (!rescheduleTarget || !reason || !newDate || !newTime) return;
    await cancelBooking(rescheduleTarget.shopId, rescheduleTarget.id, reason, 'client');
    setBookings((prev) =>
      prev.map((bk) =>
        bk.id === rescheduleTarget.id
          ? {
              ...bk,
              status: 'cancelled',
              cancelReason: reason,
              cancelledBy: 'client',
            }
          : bk,
      ),
    );
    await bookSlot(
      rescheduleTarget.shopId,
      newDate,
      newTime,
      user!.displayName || user!.email || 'Cliente',
      rescheduleTarget.phone || ''
    );
    setFeedback('Horário reagendado com sucesso! ✅'); // 👈 feedback
    setRescheduleTarget(null);
    await load();
  }

  async function handleArchive(b: any) {
    await archiveBooking(b.shopId, b.id);
    setBookings((prev) => prev.filter((bk) => bk.id !== b.id));
  }

  async function handleDone(b: any) {
    await doneBooking(b.shopId, b.id);
    setBookings((prev) =>
      prev.map((bk) =>
        bk.id === b.id ? { ...bk, status: 'done' } : bk,
      ),
    );
    setFeedback('Corte marcado como concluído! 💈'); // 👈 feedback
  }

  function jaPassou(date: string, time: string) {
    const agendamento = new Date(`${date}T${time}:00`);
    return agendamento < new Date();
  }

  return (
    <Container>
      <Card>
        <S.HeaderRow>
          <h2>Meus Agendamentos</h2>
          <button
            onClick={load}
            disabled={loading}
            title="Recarregar agendamentos"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              fontSize: 20,
            }}
          >
            <FiRefreshCw className={loading ? 'spin' : ''} />
          </button>
        </S.HeaderRow>

        {feedback && (
          <p style={{ color: 'green', fontSize: '0.9rem', marginBottom: 12 }}>
            {feedback}
          </p>
        )}

        {bookings.length === 0 && <p>Nenhum agendamento encontrado.</p>}
        <S.List>
          {bookings.map((b) => (
            <S.Item key={b.id} status={b.status}>
              <div className="info">
                <strong>
                  {b.date} às {b.time}
                </strong>
                <div>Barbearia: {b.shopName || b.shopId}</div>
                <div>Status: {traduzStatus(b.status || 'ativo')}</div>

                {b.status === 'cancelled' && (
                  <S.CancelReason>
                    Cancelado pelo {traduzCancelador(b.cancelledBy)}: {b.cancelReason}
                  </S.CancelReason>
                )}
                {b.status === 'done' && (
                  <S.CancelReason style={{ color: 'green' }}>
                    Concluído
                  </S.CancelReason>
                )}
              </div>

              <div className="actions">
                {b.status !== 'cancelled' && b.status !== 'done' && (
                  <>
                    <Button variant="danger" onClick={() => setCancelTarget(b)}>
                      Cancelar
                    </Button>
                    <Button variant="ghost" onClick={() => setRescheduleTarget(b)}>
                      Trocar horário
                    </Button>
                    {jaPassou(b.date, b.time) && (
                      <Button
                        variant="default"
                        onClick={() => handleDone(b)}
                      >
                        Corte feito
                      </Button>
                    )}
                  </>
                )}

                {(b.status === 'cancelled' || b.status === 'done') && (
                  <button
                    className="trash"
                    onClick={() => handleArchive(b)}
                    title="Excluir do histórico"
                  >
                    <FiTrash2 />
                  </button>
                )}
              </div>
            </S.Item>
          ))}
        </S.List>
      </Card>

      {cancelTarget && (
        <ConfirmDialog
          title="Cancelar agendamento"
          message={`Você realmente deseja cancelar o horário de ${cancelTarget.date} às ${cancelTarget.time}?`}
          onCancel={() => setCancelTarget(null)}
          onConfirm={(reason) => handleCancel(reason)}
          confirmLabel="Cancelar"
        />
      )}

      {rescheduleTarget && (
        <ConfirmDialog
          title="Trocar horário"
          message={`Informe o motivo e escolha o novo horário para ${rescheduleTarget.shopName}`}
          shopId={rescheduleTarget.shopId}
          currentDate={rescheduleTarget.date}
          currentTime={rescheduleTarget.time}
          onCancel={() => setRescheduleTarget(null)}
          onConfirm={(reason, date, time) =>
            handleReschedule(reason, date, time)
          }
          confirmLabel="Reagendar"
        />
      )}
    </Container>
  );
}
