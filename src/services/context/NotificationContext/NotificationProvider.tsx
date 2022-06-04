import { ReactNode, useReducer } from 'react';
import Notification from '../../../components/Shared/Notifications/Notification';
import { INotification, TDispatch } from '../../../models/notification/notification.interface';

import { motion } from 'framer-motion';

import { NotificationContext } from './notificationContext';

interface IProps {
    children: ReactNode;
}

const NotificationProvider = ({ children }: IProps) => {
    const reducer = (prevState: INotification[], action: TDispatch) => {
        switch (action.type) {
            case 'ADD_NOTIFICATION':
                // prevent adding duplicate notifs if allowDuplicate is false
                if (action.payload.allowDuplicate === false) {
                    if (prevState.findIndex((prev) => prev.id === action.payload.id) > -1) {
                        return prevState;
                    }
                }

                if (action.payload.maxNotifs) {
                    if (prevState.length + 1 > action.payload.maxNotifs) return prevState;
                }

                return [...prevState, { ...action.payload }];
            case 'REMOVE_NOTIFICATION':
                const notifications = [...prevState];
                const newNotifications = notifications.filter((prev) => prev.id !== action.payload);

                return newNotifications;
            default:
                return prevState;
        }
    };

    const [state, dispatch] = useReducer(reducer, []);

    return (
        <NotificationContext.Provider value={dispatch}>
            <div className="fixed top-5 right-5 flex flex-col justify-start">
                {state.map((notif) => (
                    <motion.div initial={{ opacity: 0, translateY: -30 }} animate={{ opacity: 1, translateY: 0 }} key={notif.title}>
                        <Notification notif={notif} />
                    </motion.div>
                ))}
            </div>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
