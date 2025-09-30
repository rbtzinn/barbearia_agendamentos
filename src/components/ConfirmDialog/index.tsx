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
  simple?: boolean; // 👈 NOVA PROP
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

  useEffect(() => {
    async function load() {
      if (!shopId) return;
      const schedSnap = await getDoc(doc(db, 'schedules', shopId));
      const weekly = (schedSnap.data() as any)?.weekly || {};
      const weekday = new Date(date + 'T00:00:00').getDay();
      const map = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;
      setTimes(weekly[map[weekday]] || []);

      const bookingsSnap = await getDocs(collection(db, 'shops', shopId, 'bookings'));
      const allBookings = bookingsSnap.docs.map((d) => d.data() as any);
      const bookedToday = allBookings
        .filter((b) => b.date === date && b.status !== 'cancelled')
        .map((b) => b.time);

      setBooked(bookedToday);
    }
    load();
  }, [shopId, date]);

  return (
    <S.Overlay>
      <S.Dialog>
        <h3>{title}</h3>
        <p>{message}</p>

        {!simple && ( // 👈 só mostra textarea se NÃO for modo simples
          <textarea
            placeholder="Motivo"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{ width: '100%', minHeight: 80 }}
          />
        )}

        {!simple && shopId && ( // 👈 só mostra seleção de datas/horários se NÃO for modo simples
          <>
            <input
              type="date"
              value={date}
              min={toDateInputValue()}
              onChange={(e) => setDate(e.target.value)}
            />

            <div style={{ marginTop: 10 }}>
              {times.length === 0 && <p>Nenhum horário disponível neste dia.</p>}
              {times.map((t) => {
                const isOld = currentDate === date && currentTime === t;
                const isBooked = booked.includes(t);
                return (
                  <button
                    key={t}
                    disabled={isBooked || isOld}
                    style={{
                      margin: 4,
                      padding: '6px 10px',
                      borderRadius: 6,
                      border: selectedTime === t ? '2px solid #7c3aed' : '1px solid #555',
                      background: isOld
                        ? '#333'
                        : isBooked
                        ? '#444'
                        : '#222',
                      color: isOld ? '#777' : isBooked ? '#999' : '#fff',
                      textDecoration: isOld ? 'line-through' : 'none',
                    }}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t} {isOld ? '(seu horário atual)' : isBooked ? '(ocupado)' : ''}
                  </button>
                );
              })}
            </div>
          </>
        )}

        <S.Actions>
          <S.CancelButton onClick={onCancel}>{cancelLabel}</S.CancelButton>
          <S.ConfirmButton
            onClick={() => {
              if (simple) {
                onConfirm();
                return;
              }
              if (!reason.trim()) {
                alert('Informe o motivo.');
                return;
              }
              if (date < toDateInputValue()) {
                alert('Não é possível reagendar para uma data que já passou.');
                return;
              }
              if (shopId && (!date || !selectedTime)) {
                alert('Selecione o novo horário.');
                return;
              }
              onConfirm(reason, date, selectedTime);
            }}
          >
            {confirmLabel}
          </S.ConfirmButton>
        </S.Actions>
      </S.Dialog>
    </S.Overlay>
  );
}
