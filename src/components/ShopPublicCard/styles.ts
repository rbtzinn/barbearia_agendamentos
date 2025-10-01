// components/ShopPublicCard/styles.ts
import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Location = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
