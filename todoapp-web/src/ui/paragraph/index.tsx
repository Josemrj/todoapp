import React from 'react';
import { ParagraphJss } from './jss';

interface IParagraphProps {
  children: React.ReactNode;
}

const ParagraphUi: React.FC<IParagraphProps> = ({ children }) => {
  return <ParagraphJss>{children}</ParagraphJss>;
};

export default ParagraphUi;
