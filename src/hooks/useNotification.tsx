import { ReactElement, useContext } from 'react';
import { render } from 'react-dom';

import { INotification } from 'components/Shared/Notifications/notification.interface';
import { NotificationContext } from 'components/Shared/Notifications/notificationContext';

const useNotification = () => {
    const dispatch = useContext(NotificationContext);

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
        render(modal, document.getElementById('global-modal-container'));
    };

    return {
        addNotification,
        removeNotification,
        addModal,
    };
};

export default useNotification;
