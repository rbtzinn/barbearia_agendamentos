import styled from 'styled-components';

export const ToggleButton = styled.button<{ selected: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.2s ease-in-out;

  /* Estilos baseados na propriedade 'selected' */
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.soft};

  color: ${({ selected, theme }) =>
    selected ? '#FFFFFF' : theme.colors.text};

  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;