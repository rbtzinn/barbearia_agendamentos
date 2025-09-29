import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  & > h2 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  & > p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.muted};
  }
`;
