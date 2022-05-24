import clsx from 'clsx';

interface IProps {
    size: 'normal' | 'large';
    color: 'white' | 'primary';
}

const LoadingSpinner = ({ size, color }: IProps) => {
    return (
        <div
            className={clsx(
                'loading-spinner mr-2',
                {
                    normal: size === 'normal',
                    large: size === 'large',
                },
                {
                    white: color === 'white',
                    primary: color === 'primary',
                }
            )}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoadingSpinner;
