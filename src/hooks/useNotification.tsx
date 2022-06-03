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

    const addModal = (modal: ReactElement) => {
        const root = ReactDOM.createRoot(document.getElementById('global-modal-container')!);
        root.render(modal);
        modalRoot.current = root;
    };

    const removeModal = () => {
        if (modalRoot.current) {
            modalRoot.current.unmount();
        }
    };

    return {
        addNotification,
        removeNotification,
        addModal,
        removeModal,
    };
};

export default useNotification;
