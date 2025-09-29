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
