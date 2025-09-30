import styled from 'styled-components';

export const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;

  label {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.muted};
  }

  input {
    padding: 8px 12px;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
  }
`;
