import { TableListRequest } from '../ui/table/model';

export enum TableListState {
  'loading' = 'loading',
  'loaded' = 'loaded',
}

export const getBody = (request: any, filters: any[]) => {
  const body: any = { ...request };

  if (filters && filters.length > 0) {
    const formattedFilters = filters
      .filter(w => hasValue(w.value))
      .map(w => {
        return { name: w.name, value: w.value };
      });
    body.filters = formattedFilters;
  }

  if (request.order) {
    body.order = request.order;
  }
  delete body.tableFieldSearchs;
  return body;
};

export const Debug = {
  error: (msg: string) => console.error(msg),
};

export const hasValue = (value: any) => value !== undefined && value !== null && value !== '';

export const getFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) as T : null;
};
