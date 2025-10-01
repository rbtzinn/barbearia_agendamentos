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
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;

  .info {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  .actions {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .trash {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.danger};
      cursor: pointer;
      font-size: 20px;
      transition: transform 0.2s ease, color 0.2s ease;

      &:hover {
        transform: scale(1.2);
        color: ${({ theme }) => theme.colors.dangerHover || '#ff4444'};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    .actions {
      justify-content: space-between;
      width: 100%;
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
