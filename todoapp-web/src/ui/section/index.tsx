// src/ui/section/index.tsx
import React, { ReactNode } from 'react';
import { SectionJss } from './jss';

interface ISectionProps {
  children: ReactNode;
  padding?: number;
}

const SectionLayout: React.FC<ISectionProps> = ({ children, padding }) => {
  return (
    <SectionJss padding={padding}>
      {children}
    </SectionJss>
  );
};

export default SectionLayout;
