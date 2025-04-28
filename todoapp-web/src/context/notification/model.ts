import { ResponseStatus } from '../../hooks/api/model';

export class NotificationModel {
  message: string;
  status: ResponseStatus;

  constructor(status: ResponseStatus, message: string) {
    this.message = message;
    this.status = status;
  }
}
