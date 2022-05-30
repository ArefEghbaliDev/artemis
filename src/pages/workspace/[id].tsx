import WorkspaceSidebar from 'components/Blocks/WorkspaceSidebar';
import Head from 'next/head';

const index = () => {
    return (
        <div>
            <Head>
                <title>Workspace</title>
            </Head>
            <div className="flex items-center">
                <WorkspaceSidebar />
            </div>
        </div>
    );
};

export default index;
