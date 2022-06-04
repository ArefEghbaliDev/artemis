import { IProjectEntity, TSingleProject } from 'models/project/project.interface';
import { queryClient } from 'services/react-query/queryClient';

import { firestoreDB } from '../firebaseClient';

export const createNewProject = async (data: TSingleProject): Promise<IProjectEntity> => {
    const newProject = await firestoreDB.collection('projects').add(data);

    const newProjectFinal = {
        id: newProject.id,
        data: { ...data },
    };

    queryClient.setQueriesData<IProjectEntity[]>('projects', (prevProjects) => {
        if (prevProjects) {
            return [...prevProjects, { ...newProjectFinal }];
        }

        return [];
    });

    return newProjectFinal;
};

export const getAllProjects = async (): Promise<IProjectEntity[]> => {
    const projects = await firestoreDB.collection('projects').get();

    const projectsList: IProjectEntity[] = [];

    projects.docs.forEach((doc) => {
        projectsList.push({
            id: doc.id,
            data: doc.data() as TSingleProject,
        });
    });

    return projectsList;
};
