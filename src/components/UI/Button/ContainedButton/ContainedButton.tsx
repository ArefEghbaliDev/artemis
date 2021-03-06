import clsx from 'clsx';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import { IButton } from '../button.interface';

const ContainedButton = ({ children, onClick, disabled, isLoading, type, color, className }: IButton) => {
    const baseClass = 'flex items-center justify-center rounded p-4 transition-all duration-100 ease-out';

    const returnButtonColor = () => {
        switch (color) {
            case 'primary':
                return 'bg-primary-500 hover:bg-primary-600';
            default:
                return 'bg-transparent';
        }
    };

    return (
        <button type={type} disabled={disabled} onClick={onClick} className={clsx(baseClass, className, returnButtonColor())}>
            {isLoading && <LoadingSpinner size="normal" color="white" />}
            {children}
        </button>
    );
};

export default ContainedButton;
