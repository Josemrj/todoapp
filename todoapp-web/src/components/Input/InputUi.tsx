import React from 'react';
import { InputUiStyle } from './styles';

type InputUiProps = React.ComponentProps<'input'> & {
  className?: string;
};

const InputUi = ({ ...props }: InputUiProps) => {
  return <InputUiStyle {...props} />;
};

export default InputUi;
