import styled from 'styled-components';
import Card from '@/components/Card';

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  /* AJUSTE PARA MOBILE */
  @media (max-width: 768px) {
    flex-direction: column;

    & > a,
    & > button {
      width: 100%;
    }

    & > a > button,
    & > button {
      width: 100%;
    }
  }
`;

export const BookingsTitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const BookingsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const BookingCard = styled(Card)<{ status?: string }>`
  opacity: ${({ status }) => (status === 'cancelled' ? 0.6 : 1)};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex; /* troquei grid por flex */
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;

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
  font-size: 0.9rem;
  margin: 0;
`;