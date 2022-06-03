import clsx from 'clsx';
import { InputHTMLAttributes, ReactElement } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    Icon?: ReactElement;
    label?: string;
}

const TextField = ({ className, label, name, type, placeholder, onChange, Icon }: IProps) => {
    return (
        <div className={clsx('flex flex-col items-stretch text-field', className)}>
            {label && <label className="mb-2">{label}</label>}
            {type === 'area' ? (
                <div className="flex items-center justify-start rounded bg-white-500 bg-opacity-10 px-4 border border-transparent focus-within:border-primary-400">
                    <textarea
                        name={name}
                        placeholder={placeholder}
                        rows={5}
                        className="resize-none bg-transparent w-full outline:none focus:outline-none py-4"
                    />
                </div>
            ) : (
                <div className="flex items-center justify-start rounded bg-white-500 bg-opacity-10 px-4 border border-transparent focus-within:border-primary-400">
                    {Icon && Icon}
                    <input
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        className="bg-transparent w-full py-4 border-none outline:none focus:outline-none"
                    />
                </div>
            )}
        </div>
    );
};

export default TextField;
