import styled from 'styled-components';

export const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.9rem;
  margin: 0;
`;

export const RoleSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
`;
