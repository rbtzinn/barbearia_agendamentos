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
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};

  & > button {
    margin-top: ${({ theme }) => theme.spacing.sm};
    justify-self: flex-start;
  }

  /* AJUSTE PARA MOBILE */
  @media (max-width: 768px) {
    /* Faz o botão ocupar a largura total do card */
    & > button {
      justify-self: stretch;
      width: 100%;
    }
  }
`;

export const CancelReason = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.9rem;
  margin: 0;
`;