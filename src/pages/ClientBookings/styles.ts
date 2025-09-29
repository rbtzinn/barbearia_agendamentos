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
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const CancelReason = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  margin: 0;
  font-size: 0.9rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;
