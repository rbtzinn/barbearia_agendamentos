import { ReactNode } from 'react';
import { StyledButton, Spinner } from './styles';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'default' | 'ghost' | 'danger';
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  loading = false,
  disabled = false,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      variant={variant}
      disabled={disabled || loading}
    >
      {loading ? <Spinner /> : children}
    </StyledButton>
  );
}
