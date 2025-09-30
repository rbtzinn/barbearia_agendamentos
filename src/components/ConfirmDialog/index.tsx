import { useState, useEffect } from 'react';
import * as S from './styles';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { toDateInputValue } from '@/utils/dates';

type ConfirmDialogProps = {
  title: string;
  message: string;
  onConfirm: (reason?: string, newDate?: string, newTime?: string) => void;
  onCancel: () => void;
  shopId?: string;
  currentDate?: string;
  currentTime?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  simple?: boolean; // 👈 modo simples
};

export default function ConfirmDialog({
  title,
  message,
  onConfirm,
  onCancel,
  shopId,
  currentDate,
  currentTime,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  simple = false,
}: ConfirmDialogProps) {
  const [reason, setReason] = useState('');
  const [date, setDate] = useState(toDateInputValue());
  const [times, setTimes] = useState<string[]>([]);
  const [booked, setBooked] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      if (!shopId) return;
      const schedSnap = await getDoc(doc(db, 'schedules', shopId));
      const weekly = (schedSnap.data() as any)?.weekly || {};
      const weekday = new Date(date + 'T00:00:00').getDay();
      const map = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;
      setTimes(weekly[map[weekday]] || []);

      const bookingsSnap = await getDocs(
        collection(db, 'shops', shopId, 'bookings'),
      );
      const allBookings = bookingsSnap.docs.map((d) => d.data() as any);
      const bookedToday = allBookings
        .filter((b) => b.date === date && b.status !== 'cancelled')
        .map((b) => b.time);

      setBooked(bookedToday);
    }
    load();
  }, [shopId, date]);

  function validateAndConfirm() {
    setError(null);

    if (simple) {
      onConfirm();
      return;
    }
    if (!reason.trim()) {
      setError('Informe o motivo.');
      return;
    }
    if (date < toDateInputValue()) {
      setError('Não é possível reagendar para uma data que já passou.');
      return;
    }
    if (shopId && (!date || !selectedTime)) {
      setError('Selecione o novo horário.');
      return;
    }
    onConfirm(reason, date, selectedTime);
  }

  function horaJaPassou(date: string, time: string) {
    const agora = new Date();
    const agendamento = new Date(`${date}T${time}:00`);
    return agendamento < agora;
  }

  return (
    <S.Overlay>
      <S.Dialog>
        <h3>{title}</h3>
        <p>{message}</p>

        {!simple && (
          <textarea
            placeholder="Motivo"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{ width: '100%', minHeight: 80 }}
          />
        )}
        {!simple && shopId && (
          <>
            <input
              type="date"
              value={date}
              min={toDateInputValue()}
              onChange={(e) => setDate(e.target.value)}
            />

            <S.TimeGrid>
              {times.map((t) => {
                const isOld = currentDate === date && currentTime === t;
                const isBooked = booked.includes(t);
                const isPast = horaJaPassou(date, t);
                const disabled = isBooked || isOld || isPast;

                let badge: JSX.Element | null = null;
                if (isOld) {
                  badge = <S.Badge variant="old">Atual</S.Badge>;
                } else if (isBooked) {
                  badge = <S.Badge variant="booked">Ocupado</S.Badge>;
                } else if (isPast) {
                  badge = <S.Badge variant="past">Passou</S.Badge>;
                }

                return (
                  <S.TimeButton
                    key={t}
                    disabled={disabled}
                    selected={selectedTime === t}
                    onClick={() => !disabled && setSelectedTime(t)}
                  >
                    {t}
                    {badge}
                  </S.TimeButton>
                );
              })}
            </S.TimeGrid>
          </>
        )}

        {error && (
          <p style={{ color: 'red', marginTop: 10, fontSize: '0.9rem' }}>
            {error}
          </p>
        )}

        <S.Actions>
          <S.CancelButton onClick={onCancel}>{cancelLabel}</S.CancelButton>
          <S.ConfirmButton onClick={validateAndConfirm}>
            {confirmLabel}
          </S.ConfirmButton>
        </S.Actions>
      </S.Dialog>
    </S.Overlay>
  );
}
