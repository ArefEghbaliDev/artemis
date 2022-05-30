import WorkspaceSelect from 'components/Shared/WorkspaceSelect';
import { TSingleWorkspace } from 'models/workspace/workspace.interface';

const WorkspaceSidebar = () => {
    const workspaces: TSingleWorkspace[] = [
        {
            id: '1234',
            title: 'First Workspace',
            owner: 'Aref',
            createdDate: 'now',
            projects: [],
            avatar: null,
        },
        {
            id: '4567',
            title: 'Second Workspace',
            owner: 'Aref',
            createdDate: 'now',
            projects: [],
            avatar: null,
        },
    ];

    return (
        <div className="bg-dark-400 h-screen p-5">
            <WorkspaceSelect items={workspaces} />
        </div>
    );
};

export default WorkspaceSidebar;
