import { createContext, Dispatch } from 'react';
import { TDispatch } from '../../../models/notification/notification.interface';

export const NotificationContext = createContext<Dispatch<TDispatch>>(() => {});
