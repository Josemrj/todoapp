
export interface IFilterRequest {
  name: string;
  value: any;
}

export interface IOrderByRequest {
  column: string;
  direction: 'asc' | 'desc';
}

export class TableListRequest {
  view: number;
  page: number;
  search?: string;
  filters: IFilterRequest[];
  downloadId?: string;
  order?: IOrderByRequest;
  tableFieldSearchs?: any;

  constructor(view: number, filters?: IFilterRequest[], tableFieldSearchs?: any) {
    this.view = view;
    this.page = 0;
    this.search = undefined;
    this.filters = filters || [];
    this.downloadId = undefined;
    this.order = undefined;
    this.tableFieldSearchs = tableFieldSearchs;
  }
}
