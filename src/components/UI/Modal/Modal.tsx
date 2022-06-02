import { Dialog } from '@headlessui/react';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

const Modal = ({ isOpen, onClose, title }: IProps) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <Dialog.Overlay />
            <Dialog.Panel>
                <h4>{title}</h4>
            </Dialog.Panel>
        </Dialog>
    );
};

export default Modal;
