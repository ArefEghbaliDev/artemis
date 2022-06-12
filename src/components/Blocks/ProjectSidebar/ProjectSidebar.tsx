import ProjectSelect from 'components/Shared/ProjectSelect';
import SidebarBoardItem from 'components/Shared/SidebarBoardItem';
import SidebarItem from 'components/Shared/SidebarItem';
import IconButton from 'components/UI/Button/IconButton';
import { IProjectEntity } from 'models/project/project.interface';
import { useEffect, useMemo, useRef } from 'react';
import {
    HiOutlineCalendar,
    HiOutlineChartBar,
    HiOutlineCog,
    HiOutlineDocumentReport,
    HiOutlineTrendingUp,
    HiOutlineUsers,
    HiPlus,
} from 'react-icons/hi';

interface IProps {
    projects: IProjectEntity[];
}

const ProjectSidebar = ({ projects }: IProps) => {
    return (
        <div className="bg-dark-400 h-screen p-5">
            <h4 className="mb-8 font-medium text-2xl">Artemis</h4>
            <ProjectSelect projects={projects} />
            <div className="mt-8">
                <SidebarItem to="/" newItem={0}>
                    <HiOutlineUsers size={24} className="mr-3" />
                    Members
                </SidebarItem>
                <SidebarItem to="/" newItem={0}>
                    <HiOutlineTrendingUp size={24} className="mr-3" />
                    Timeline
                </SidebarItem>
                <SidebarItem to="/" newItem={0}>
                    <HiOutlineCalendar size={24} className="mr-3" />
                    Schedule
                </SidebarItem>
                <SidebarItem to="/" newItem={0}>
                    <HiOutlineDocumentReport size={24} className="mr-3" />
                    Reports
                </SidebarItem>
                <SidebarItem to="/" newItem={0}>
                    <HiOutlineChartBar size={24} className="mr-3" />
                    Analytics
                </SidebarItem>
                <SidebarItem to="/" newItem={0}>
                    <HiOutlineCog size={24} className="mr-3" />
                    Settings
                </SidebarItem>
            </div>
            <div className="divider-line mb-5" />
            <div className="flex items-center justify-between mb-5">
                <h4 className="font-medium text-lg">Boards</h4>
                <IconButton type="button" color="default">
                    <HiPlus size={18} />
                </IconButton>
            </div>
            <div className="flex flex-col overflow-y-auto sidebar-boards custom-scrollbar">
                <SidebarBoardItem to="/" newItem={3}>
                    Board one Title
                </SidebarBoardItem>
                <SidebarBoardItem to="/" newItem={3}>
                    Board one Title
                </SidebarBoardItem>
                <SidebarBoardItem to="/" newItem={3}>
                    Board one Title
                </SidebarBoardItem>
            </div>
        </div>
    );
};

export default ProjectSidebar;
