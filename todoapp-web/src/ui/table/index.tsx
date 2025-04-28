import React from 'react';
import { TableContainerJss, TableRowJss } from './jss';

interface ITableProps {
  rows: any[];
  onReload?: (sort?: any) => void;
  request?: any;
}

const TableUi: React.FC<ITableProps> = ({ rows }) => {
  return (
    <TableContainerJss>
      {rows.map((row: any) => (
        <TableRowJss key={row.id}>
          {/* Aqui você irá renderizar os dados da linha da tabela */}
          <div>{row.name}</div>
          {/* Adicione mais colunas conforme necessário */}
        </TableRowJss>
      ))}
    </TableContainerJss>
  );
};

export default TableUi;
