import styled from 'styled-components';
import Card from '@/components/Card';

export const List = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Item = styled(Card)<{ status?: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  opacity: ${({ status }) => (status === 'cancelled' ? 0.6 : 1)};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;
  overflow: hidden;   /* 👈 impede vazamento do conteúdo */

  .info {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
    flex: 1;
    min-width: 0;     /* 👈 permite o texto encolher */
  }

  .actions {
    display: flex;
    flex-wrap: wrap;  /* 👈 se não couber, joga pra baixo */
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.sm};
    max-width: 100%;

    & > * {
      flex: 1 1 auto;
      min-height: 44px;  /* mesma altura */
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    
    .actions {
      width: 100%;

      & > * {
        flex: 1;
        width: 100%;
      }
    }
  }
`;


export const CancelReason = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  margin: 0;
  font-size: 0.9rem;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
