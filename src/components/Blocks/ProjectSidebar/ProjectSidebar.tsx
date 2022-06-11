import ProjectSelect from 'components/Shared/ProjectSelect';
import { IProjectEntity } from 'models/project/project.interface';

interface IProps {
    projects: IProjectEntity[];
}

const ProjectSidebar = ({ projects }: IProps) => {
    return (
        <div className="bg-dark-400 h-screen p-5">
            <ProjectSelect projects={projects} />
        </div>
    );
};

export default ProjectSidebar;
