import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.soft};
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s ease-in-out;
  flex-grow: 1;
  justify-content: center;
  border: 1px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary : 'transparent'};
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;

  ${CheckboxContainer}:hover & {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;