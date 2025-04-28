import React from 'react';
import { InputJss } from './jss';

export interface IInputProps {
  onReload: (search: string) => void;
  maxWidth?: number;
  placeholder?: string;
  type?: string;
}

const InputUi: React.FC<IInputProps> = ({
  onReload,
  maxWidth,
  placeholder = 'Pesquisar...',
  type = 'text',
}) => {
  return (
    <InputJss
      type={type}
      placeholder={placeholder}
      onChange={(e) => onReload(e.target.value)}
      maxWidth={maxWidth}
    />
  );
};

export default InputUi;
