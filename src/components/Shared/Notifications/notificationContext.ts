import { createContext, Dispatch } from 'react';
import { TDispatch } from './notification.interface';

export const NotificationContext = createContext<Dispatch<TDispatch>>(() => {});
