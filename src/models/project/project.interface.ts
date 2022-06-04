export type TSingleProject = {
    title: string;
    owner: string;
    createdDate: string;
    description: string;
    avatar: string | null;
};

export interface IProjectEntity {
    id: string;
    data: TSingleProject;
}
