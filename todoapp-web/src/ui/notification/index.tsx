import React from 'react';
import { ResponseStatus } from '../../hooks/api/model';
import { NotificationContainerJss } from './jss';

interface INotificationProps {
  messages: string[];
  status: ResponseStatus;
  open?: boolean;
}

const NotificationUi: React.FC<INotificationProps> = ({ messages, status, open = false }) => {
  return (
    <NotificationContainerJss status={status} open={open}>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </NotificationContainerJss>
  );
};

export default NotificationUi;
