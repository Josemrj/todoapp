
export type ResponseStatus = 'success' | 'warning' | 'error' | 'info';

export interface INotification {
  message: string;
}

export interface IResponseModel<T> {
  data?: T;
  status?: ResponseStatus;
  httpStatusCode?: number;
  notifications?: INotification[];
  parent?: any;
}

export class ResponseModel<T> {
  data: T;
  status: ResponseStatus;
  httpStatusCode: number;
  notifications: INotification[];
  parent?: any;

  constructor({ status = 'success', data, httpStatusCode = 200, notifications = [], parent }: IResponseModel<T>) {
    this.data = data as T;
    this.status = status;
    this.httpStatusCode = httpStatusCode;
    this.notifications = notifications;
    this.parent = parent;
  }

  get isValid() {
    return this.httpStatusCode >= 200 && this.httpStatusCode < 300 && this.status === 'success';
  }
}
