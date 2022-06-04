import ProjectSidebar from 'components/Blocks/ProjectSidebar';
import CreateProjectModal from 'components/Shared/CreateProjectModal';
import Head from 'next/head';

const index = () => {
    return (
        <div>
            <Head>
                <title>Workspace</title>
            </Head>
            <div className="flex items-center">
                <ProjectSidebar />
            </div>
            <CreateProjectModal />
        </div>
    );
};

export default index;
