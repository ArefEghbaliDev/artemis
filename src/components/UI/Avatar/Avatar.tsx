import clsx from 'clsx';

interface IProps {
    placeholderText: string;
    avatar: string | null;
    size: 'md' | 'lg';
    className?: string;
}

const Avatar = ({ placeholderText, avatar, size, className }: IProps) => {
    return (
        <div
            className={clsx('rounded-full overflow-hidden flex items-center justify-center bg-dark-300', className, {
                'w-10 h-10': size === 'md',
                'h-12 w-12': size === 'lg',
            })}
        >
            {avatar ? (
                <img src={avatar} alt={placeholderText} className="w-full h-full object-cover" />
            ) : (
                <p className="font-medium">{placeholderText.slice(0, 1)}</p>
            )}
        </div>
    );
};

export default Avatar;
