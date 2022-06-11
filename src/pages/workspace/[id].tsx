import ProjectSidebar from 'components/Blocks/ProjectSidebar';
import CreateProjectModal from 'components/Shared/CreateProjectModal';
import { IProjectEntity } from 'models/project/project.interface';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllProjects } from 'services/firebase/api/project.api';
import { queryClient } from 'services/react-query/queryClient';

interface IProps {
    projects: IProjectEntity[];
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getAllProjects();

    queryClient.setQueryData('projects', projects);

    return {
        props: {
            projects,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

const index = ({ projects }: IProps) => {
    return (
        <div>
            <Head>
                <title>Workspace</title>
            </Head>
            <div className="flex items-center">
                <ProjectSidebar projects={projects} />
            </div>
            <CreateProjectModal />
        </div>
    );
};

export default index;
