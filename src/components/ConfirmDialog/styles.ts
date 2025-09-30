import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Dialog = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius}; // 👈 ajustado
  width: 100%;
  max-width: 400px;
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ConfirmButton = styled.button`
  background: ${({ theme }) => theme.colors.danger};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius}; // 👈 ajustado
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background: ${({ theme }) => theme.colors.soft};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius}; // 👈 ajustado
  cursor: pointer;
`;

// Adiciona no seu styles.ts

export const TimeGrid = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const TimeButton = styled.button<{ selected?: boolean; disabled?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ selected, theme }) =>
    selected ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.border}`};
  background: ${({ selected, theme }) =>
    selected ? theme.colors.secondary : theme.colors.surface};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.muted : theme.colors.text};
  font-weight: ${({ selected }) => (selected ? 'bold' : 500)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: ${({ disabled, theme }) =>
      disabled ? theme.colors.surface : theme.colors.soft};
  }
`;

export const Badge = styled.span<{ variant: 'old' | 'booked' | 'past' }>`
  font-size: 0.7rem;
  padding: 1px 6px;
  border-radius: 12px;
  margin-left: 6px;
  font-weight: 600;

  ${({ variant }) =>
    variant === 'old' &&
    `
    background: #444;
    color: #f0c420;
  `}
  ${({ variant }) =>
    variant === 'booked' &&
    `
    background: #a11;
    color: #fff;
  `}
  ${({ variant }) =>
    variant === 'past' &&
    `
    background: #333;
    color: #aaa;
  `}
`;
