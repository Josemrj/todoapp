import { styled } from 'styled-components';

export const TableContainerJss = styled.div`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
`;

export const TableRowJss = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #ccc;
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;
