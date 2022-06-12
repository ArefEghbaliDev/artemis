import Link from 'next/link';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    to: string;
    newItem: number;
}

const SidebarItem = ({ children, to, newItem }: IProps) => {
    return (
        <Link href={to}>
            <a className="flex items-center justify-between p-3 rounded hover:bg-dark-300 mb-3">
                <div className="flex items-center">{children}</div>
                {newItem > 0 && (
                    <span className="w-6 h-6 rounded-sm text-xs align-middle bg-primary-500 text-white-500 flex items-center justify-center">
                        {newItem}
                    </span>
                )}
            </a>
        </Link>
    );
};

export default SidebarItem;
