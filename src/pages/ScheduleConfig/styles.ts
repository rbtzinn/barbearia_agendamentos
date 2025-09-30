import styled from 'styled-components';

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  label {
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

    /* Remove o estilo padrão do number */
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }

    /* Customizações extras */
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
      box-shadow: 0 0 0 2px rgba(187, 134, 252, 0.3);
    }
  }
`;


export const DaysSelector = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;

  .days-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.sm};

    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Actions = styled.div`
 display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  width: 100%;

  button {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > button {
      width: 100%;
    }
  }
`;

export const Preview = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const DayPreview = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TimeSlotsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const TimeSlot = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.soft};
  font-size: 0.85rem;
`;