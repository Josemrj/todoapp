import React from 'react';
import { InputJss } from './jss';

type InputUiProps = React.ComponentProps<'input'> & {
  className?: string;
};

const InputUi = ({ ...props }: InputUiProps) => {
  return <InputJss {...props} />;
};

export default InputUi;
