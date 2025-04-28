import React, { ReactNode } from 'react';
import { ContainerJss } from './jss';

export interface IDisplayProps {
  children: ReactNode;
  flexDirection?: 'row' | 'column';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: number;
  className?: string;
}

const DisplayUi: React.FC<IDisplayProps> = ({
  children,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  className,
}) => {
  return (
    <ContainerJss
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      className={className}>
      {children}
    </ContainerJss>
  );
};

export default DisplayUi;
