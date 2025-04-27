import React from 'react';
import { CardUiStyle } from './styles';

type CardUiProps = React.ComponentProps<'div'> & {
  children: React.ReactNode;
  className?: string;
};

const CardUi = ({ children, ...props }: CardUiProps) => {
  return <CardUiStyle {...props}>{children}</CardUiStyle>;
};

export default CardUi;
