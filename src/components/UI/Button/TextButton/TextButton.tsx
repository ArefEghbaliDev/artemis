import clsx from 'clsx';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import { IButton } from '../button.interface';

const TextButton = ({ children, onClick, disabled, isLoading, type, color, className }: IButton) => {
    const baseClass = 'flex items-center justify-center bg-transparent rounded px-4 py-3 transition-all duration-100 ease-out';

    const returnButtonColor = () => {
        switch (color) {
            case 'primary':
                return 'text-primary-500 hover:text-white-500 hover:bg-primary-600';
            default:
                return 'bg-transparent';
        }
    };

    return (
        <button type={type} disabled={disabled} onClick={onClick} className={clsx(baseClass, returnButtonColor(), className)}>
            {isLoading && <LoadingSpinner size="normal" color="white" />}
            {children}
        </button>
    );
};

export default TextButton;
