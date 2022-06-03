import useNotification from 'hooks/useNotification';
import { HiX } from 'react-icons/hi';
import { INotification } from '../../../models/notification/notification.interface';

interface IProps {
    notif: INotification;
}

const Notification = ({ notif }: IProps) => {
    const { removeNotification } = useNotification();

    const handleRemove = () => {
        removeNotification(notif.id);
    };

    return (
        <div className="rounded bg-dark-300 shadow-md p-5 mb-3">
            <div className="flex items-center justify-between">
                <p className="font-medium mr-5">{notif.title}</p>
                <button type="button" className="bg-transparent" onClick={handleRemove}>
                    <HiX size={18} />
                </button>
            </div>
            {notif.message && <p className="mt-2">{notif.message}</p>}
        </div>
    );
};

export default Notification;
