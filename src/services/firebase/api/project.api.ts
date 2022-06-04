import { IProjectEntity, TSingleProject } from 'models/project/project.interface';

import { firestoreDB } from '../firebaseClient';

export const createNewProject = async (data: TSingleProject): Promise<IProjectEntity> => {
    const newProject = await firestoreDB.collection('projects').add(data);

    const newProjectFinal = {
        id: newProject.id,
        data: { ...data },
    };

    return newProjectFinal;
};
