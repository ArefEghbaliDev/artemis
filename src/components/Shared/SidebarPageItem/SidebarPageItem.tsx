import Link from 'next/link';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    to: string;
}

const SidebarPageItem = ({ children, to }: IProps) => {
    return (
        <Link href={to}>
            <a className="flex items-center justify-start p-3 rounded hover:bg-dark-300 mb-3">{children}</a>
        </Link>
    );
};

export default SidebarPageItem;
