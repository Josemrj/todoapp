import { styled } from 'styled-components';

export const SectionJss = styled.section<{ padding?: number }>`
    padding: ${props => props.padding !== undefined ? `${props.padding}px` : '16px'};
`;
