import React from 'react';
import { InputCoStyle } from './styles';

type InputCoProps = React.ComponentProps<'input'> & {
  className?: string;
};

const InputCo = ({ ...props }: InputCoProps) => {
  return <InputCoStyle {...props} />;
};

export default InputCo;