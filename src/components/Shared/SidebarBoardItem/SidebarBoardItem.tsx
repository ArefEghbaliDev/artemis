import IconButton from 'components/UI/Button/IconButton';
import Link from 'next/link';
import { ReactNode } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

interface IProps {
    children: ReactNode;
    to: string;
    newItem: number;
}

const SidebarBoardItem = ({ to, children, newItem }: IProps) => {
    return (
        <div className="flex items-center justify-between p-3 rounded hover:bg-dark-300 mb-3">
            <Link href={to}>
                <a className="flex items-center justify-between flex-1">
                    <div className="flex items-center sidebar-board-item truncate">{children}</div>
                    {newItem > 0 && (
                        <span className="w-6 h-6 rounded-sm text-xs align-middle bg-primary-500 text-white-500 flex items-center justify-center">
                            {newItem}
                        </span>
                    )}
                </a>
            </Link>
            <IconButton type="button" color="default" className="ml-2">
                <HiDotsHorizontal size={18} />
            </IconButton>
        </div>
    );
};

export default SidebarBoardItem;
