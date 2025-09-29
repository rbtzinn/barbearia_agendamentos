import { useState } from 'react';
import * as S from './styles';

type ConfirmDialogProps = {
  title: string;
  message: string;
  onConfirm: (reason: string) => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
};

export default function ConfirmDialog({
  title,
  message,
  onConfirm,
  onCancel,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
}: ConfirmDialogProps) {
  const [reason, setReason] = useState('');

  return (
    <S.Overlay>
      <S.Dialog>
        <h3>{title}</h3>
        <p>{message}</p>
        <textarea
          placeholder="Motivo do cancelamento"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          style={{ width: '100%', minHeight: 80 }}
        />
        <S.Actions>
          <S.CancelButton onClick={onCancel}>{cancelLabel}</S.CancelButton>
          <S.ConfirmButton
            onClick={() => {
              if (reason.trim()) {
                onConfirm(reason);
              } else {
                alert('Informe um motivo para cancelar.');
              }
            }}
          >
            {confirmLabel}
          </S.ConfirmButton>
        </S.Actions>
      </S.Dialog>
    </S.Overlay>
  );
}
