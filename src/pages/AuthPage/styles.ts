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

export const ForgotLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing.xs};

  &:hover {
    text-decoration: underline;
  }
`;
