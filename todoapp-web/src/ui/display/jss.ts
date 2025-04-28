import { IDisplayProps } from './index';
import styled from 'styled-components';

export const ContainerJss = styled.div<IDisplayProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap ? `${props.gap}px` : '0'};
`;
