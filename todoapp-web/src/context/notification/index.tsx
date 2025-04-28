import React, { createContext, useState, useContext } from 'react';
import { NotificationModel } from './model';

interface INotificationContext {
  notifications: NotificationModel[];
  setNotifications: (notifications: NotificationModel[]) => void;
}

const NotificationContext = createContext<INotificationContext>({
  notifications: [],
  setNotifications: () => { },
});

export const NotificationProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationModel[]>([]);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
export default NotificationContext;
