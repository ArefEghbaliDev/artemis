import clsx from 'clsx';
import { InputHTMLAttributes, ReactElement } from 'react';
import { HiExclamation } from 'react-icons/hi';

interface IProps extends InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
    className?: string;
    Icon?: ReactElement;
    label?: string;
    error?: string;
}

const TextField = ({ className, label, name, type, placeholder, onChange, Icon, error, value }: IProps) => {
    return (
        <div className={clsx('flex flex-col items-stretch text-field', className)}>
            {label && <label className="mb-2">{label}</label>}
            {type === 'area' ? (
                <div className="flex items-center justify-start rounded bg-white-500 bg-opacity-10 px-4 border border-transparent focus-within:border-primary-400">
                    <textarea
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
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
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        className="bg-transparent w-full py-4 border-none outline:none focus:outline-none"
                    />
                </div>
            )}
            {error && (
                <span className="text-red-500 mt-2 flex items-center">
                    <HiExclamation size={16} className="mr-1" />
                    {error}
                </span>
            )}
        </div>
    );
};

export default TextField;
