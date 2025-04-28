import { IInputProps } from './index';
import styled from 'styled-components';

export const InputJss = styled.input<Pick<IInputProps, 'maxWidth'>>`
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
