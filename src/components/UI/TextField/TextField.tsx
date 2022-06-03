import clsx from 'clsx';
import { InputHTMLAttributes, ReactElement } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    Icon?: ReactElement;
    label?: string;
}

const TextField = ({ className, label, name, type, placeholder, onChange, Icon }: IProps) => {
    return (
        <div className={clsx('flex flex-col items-stretch', className)}>
            {label && <label className="mb-2">{label}</label>}
            <div className="flex items-center justify-start rounded bg-white-500 bg-opacity-10 px-4">
                {Icon && Icon}
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="bg-transparent w-full py-4 border-none outline:none focus:outline-none"
                />
            </div>
        </div>
    );
};

export default TextField;
