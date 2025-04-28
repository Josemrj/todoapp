// src/ui/view/index.tsx
import React from 'react';
import { ContainerJss, SelectJss } from './jss';

interface IViewRequestUiProps {
  onReload: (view: number) => void;
  view: number;
  total: number;
}

const ViewRequestUi: React.FC<IViewRequestUiProps> = ({ onReload, view, total }) => {
  const options = [10, 25, 50, 100];

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onReload(parseInt(e.target.value, 10));
  };

  return (
    <ContainerJss>
      <span>Visualizar</span>
      <SelectJss value={view} onChange={handleViewChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectJss>
      <span> de {total}</span>
    </ContainerJss>
  );
};

export default ViewRequestUi;
