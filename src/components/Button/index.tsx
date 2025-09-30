import { ReactNode } from 'react';
import { StyledButton, Spinner } from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'danger';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void | Promise<void>;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

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
