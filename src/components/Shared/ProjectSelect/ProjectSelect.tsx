import { Menu } from '@headlessui/react';
import Avatar from 'components/UI/Avatar';
import TextButton from 'components/UI/Button/TextButton';
import TextField from 'components/UI/TextField';
import useNotification from 'hooks/useNotification';
import { TSingleWorkspace } from 'models/workspace/workspace.interface';

import { HiChevronRight, HiPlus, HiSearch, HiSelector } from 'react-icons/hi';
import CreateProjectModal from '../CreateProjectModal';

interface IProps {
    items: TSingleWorkspace[];
}

const ProjectSelect = ({ items }: IProps) => {
    const { addModal, removeModal } = useNotification();

    const handleShowCreateWorkspace = () => {
        addModal(<CreateProjectModal onClose={removeModal} />);
    };

    return (
        <Menu as="div" className="relative">
            <Menu.Button className="rounded bg-opacity-10 bg-white-500 px-5 py-3 flex items-center">
                <Avatar placeholderText="Workspace" avatar={null} size="md" className="mr-3" />
                <p className="workspace-select-title truncate text-left">Project Title</p>
                <HiSelector size={18} className="ml-5" />
            </Menu.Button>
            <Menu.Items as="div" className="absolute left-0 top-full w-full transform-gpu translate-y-2 bg-dark-300 rounded p-3 min-w-max">
                <TextField type="text" placeholder="Projects..." className="w-56 mb-5" Icon={<HiSearch size={18} className="mr-2" />} />
                <div className="divider-line mt-1 mb-3" />
                {items.map((item) => (
                    <Menu.Item
                        as="button"
                        key={item.id}
                        className="p-3 cursor-pointer w-full flex items-center justify-between transition-all duration-75 ease-out hover:bg-dark-400 rounded"
                    >
                        {item.title}
                        <HiChevronRight size={18} />
                    </Menu.Item>
                ))}
                <div className="divider-line my-3" />
                <Menu.Item as={'div'}>
                    <TextButton color="primary" className="w-full text-white-500 add-workspace-select" onClick={handleShowCreateWorkspace}>
                        <HiPlus size={18} className="mr-3" />
                        Create Workspace
                    </TextButton>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};

export default ProjectSelect;
