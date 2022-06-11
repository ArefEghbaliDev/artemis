import { Menu } from '@headlessui/react';
import Avatar from 'components/UI/Avatar';
import TextButton from 'components/UI/Button/TextButton';
import { useAppDispatch } from 'hooks/useReduxHooks';
import { IProjectEntity } from 'models/project/project.interface';
import { useState } from 'react';

import { HiChevronRight, HiPlus, HiSelector } from 'react-icons/hi';
import { updateShowCreateProject } from 'services/redux/slices/project';
import ProjectSelectSearch from '../ProjectSelectSearch';

interface IProps {
    projects: IProjectEntity[];
}

const ProjectSelect = ({ projects }: IProps) => {
    const dispatch = useAppDispatch();

    const [searchKey, setSearchKey] = useState<string>('');

    const handleShowCreateProject = () => {
        dispatch(updateShowCreateProject(true));
    };

    return (
        <Menu as="div" className="relative">
            <Menu.Button className="rounded bg-opacity-10 bg-white-500 px-5 py-3 flex items-center">
                <Avatar placeholderText="Workspace" avatar={null} size="md" className="mr-3" />
                <p className="workspace-select-title truncate text-left">Project Title</p>
                <HiSelector size={18} className="ml-5" />
            </Menu.Button>
            <Menu.Items as="div" className="absolute left-0 top-full w-full transform-gpu translate-y-2 bg-dark-300 rounded p-3 min-w-max">
                <ProjectSelectSearch setSearchKey={setSearchKey} />
                <div className="divider-line mt-1 mb-3" />
                <Menu.Item disabled as="b" className="mb-3 block">
                    Recent Projects
                </Menu.Item>
                {projects
                    .slice(0, 5)
                    .filter((prev) => prev.data.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map((item) => (
                        <Menu.Item
                            as="button"
                            key={item.id}
                            className="p-3 cursor-pointer w-full flex items-center justify-between transition-all duration-75 ease-out hover:bg-dark-400 rounded"
                        >
                            {item.data.title}
                            <HiChevronRight size={18} />
                        </Menu.Item>
                    ))}
                <div className="divider-line my-3" />
                <Menu.Item as={'div'}>
                    <TextButton color="primary" className="w-full text-white-500 add-workspace-select" onClick={handleShowCreateProject}>
                        <HiPlus size={18} className="mr-3" />
                        Create Project
                    </TextButton>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};

export default ProjectSelect;
