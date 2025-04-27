import React from 'react';
import { CardJss } from './jss';

type CardUiProps = React.ComponentProps<'div'> & {
  children: React.ReactNode;
  className?: string;
};

const CardUi = ({ children, ...props }: CardUiProps) => {
  return <CardJss {...props}>{children}</CardJss>;
};

export default CardUi;
