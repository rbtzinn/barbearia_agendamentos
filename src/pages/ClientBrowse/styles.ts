import Card from '@/components/Card';
import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SearchInput = styled.input`
  flex: 1;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
`;

export const ShopCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ShopCardContent = styled.div`
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;
