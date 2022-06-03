import ProjectSidebar from 'components/Blocks/ProjectSidebar';
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
        </div>
    );
};

export default index;
