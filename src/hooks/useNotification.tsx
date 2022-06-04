import { ReactElement, useContext, useRef } from 'react';
import * as ReactDOM from 'react-dom/client';

import { INotification } from 'models/notification/notification.interface';
import { NotificationContext } from 'services/context/NotificationContext/notificationContext';

const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    const modalRoot = useRef<ReactDOM.Root | null>(null);

    const addNotification = (notif: INotification) => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: notif,
        });
    };

    const removeNotification = (notifId: string) => {
        dispatch({
            type: 'REMOVE_NOTIFICATION',
            payload: notifId,
        });
    };

    return {
        addNotification,
        removeNotification,
    };
};

export default useNotification;
