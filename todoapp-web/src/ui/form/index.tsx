// src/ui/form/index.tsx
import React, { ReactNode, FormEvent } from 'react';
import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
`;

interface IFormProps {
  children: ReactNode;
  model: any;
  formType?: 'custom' | 'default';
  onSubmitAsync: (body: any, event: FormEvent<Element>) => Promise<any>;
}

const FormUi: React.FC<IFormProps> = ({ children, model, onSubmitAsync, formType = 'default' }) => {
  const handleSubmitAsync = async (event: FormEvent<Element>) => {
    event.preventDefault();

    const body: any = {};
    if (formType === 'default') {
      for (const key in model) {
        const inputElement = event.currentTarget.querySelector(`[name="${key}"]`) as HTMLInputElement;
        body[key] = inputElement?.value;
      }
    } else {
      body['custom'] = model;
    }

    await onSubmitAsync(body, event);
  };
  return (
    <Form onSubmit={handleSubmitAsync}>
      {children}
    </Form>
  );
};
export default FormUi;
