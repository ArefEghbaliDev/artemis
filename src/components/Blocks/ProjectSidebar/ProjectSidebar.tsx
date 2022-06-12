import ProjectSelect from 'components/Shared/ProjectSelect';
import SidebarPageItem from 'components/Shared/SidebarPageItem';
import { IProjectEntity } from 'models/project/project.interface';
import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineCog, HiOutlineDocumentReport, HiOutlineTrendingUp, HiOutlineUsers } from 'react-icons/hi';

interface IProps {
    projects: IProjectEntity[];
}

const ProjectSidebar = ({ projects }: IProps) => {
    return (
        <div className="bg-dark-400 h-screen p-5">
            <h4 className="mb-8 font-medium text-2xl">Artemis</h4>
            <ProjectSelect projects={projects} />
            <div className="mt-8">
                <SidebarPageItem to="/">
                    <HiOutlineUsers size={24} className="mr-3" />
                    Members
                </SidebarPageItem>
                <SidebarPageItem to="/">
                    <HiOutlineTrendingUp size={24} className="mr-3" />
                    Timeline
                </SidebarPageItem>
                <SidebarPageItem to="/">
                    <HiOutlineCalendar size={24} className="mr-3" />
                    Schedule
                </SidebarPageItem>
                <SidebarPageItem to="/">
                    <HiOutlineDocumentReport size={24} className="mr-3" />
                    Reports
                </SidebarPageItem>
                <SidebarPageItem to="/">
                    <HiOutlineChartBar size={24} className="mr-3" />
                    Analytics
                </SidebarPageItem>
                <SidebarPageItem to="/">
                    <HiOutlineCog size={24} className="mr-3" />
                    Settings
                </SidebarPageItem>
            </div>
            <div className="divider-line mb-5" />
            <h4 className="font-medium text-lg">Boards</h4>
        </div>
    );
};

export default ProjectSidebar;
