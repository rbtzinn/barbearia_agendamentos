import { ReactNode } from 'react';
import { StyledCard } from './styles';

interface CardProps {
  children: ReactNode;
  [key: string]: any;
}

export default function Card({ children, ...props }: CardProps) {
  return <StyledCard {...props}>{children}</StyledCard>;
}
