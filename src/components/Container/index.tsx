import { ReactNode } from 'react';
import { StyledContainer } from './styles';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
