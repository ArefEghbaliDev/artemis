import clsx from 'clsx';
import { InputHTMLAttributes, ReactElement } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    Icon?: ReactElement;
}

const TextField = ({ className, type, placeholder, onChange, Icon }: IProps) => {
    return (
        <div className={clsx('rounded flex items-center', className)}>
            {Icon && Icon}
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="bg-transparent w-full p-3 border-none outline:none focus:outline-none"
            />
        </div>
    );
};

export default TextField;
