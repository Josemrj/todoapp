import React from 'react';
import { CardCoStyle } from './styles';

type CardCoProps = React.ComponentProps<'div'> & {
  children: React.ReactNode;
  className?: string;
};

const CardCo = ({ children, ...props }: CardCoProps) => {
  return <CardCoStyle {...props}>{children}</CardCoStyle>;
};

export default CardCo;