import { Listbox } from '@headlessui/react';
import Avatar from 'components/UI/Avatar';
import TextButton from 'components/UI/Button/TextButton';
import TextField from 'components/UI/TextField';
import useNotification from 'hooks/useNotification';
import { TSingleWorkspace } from 'models/workspace/workspace.interface';
import { useState } from 'react';

import { HiChevronRight, HiPlus, HiSearch, HiSelector } from 'react-icons/hi';

interface IProps {
    items: TSingleWorkspace[];
}

const WorkspaceSelect = ({ items }: IProps) => {
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const { addNotification } = useNotification();

    const handleAddNotif = () => {
        addNotification({
            title: 'Welcome now',
            type: 'default',
            id: '1234',
            maxNotifs: 3,
            message: 'Welcome to here',
        });
    };

    return (
        <Listbox value={selectedItem} onChange={setSelectedItem}>
            <div className="relative">
                <Listbox.Button className="rounded bg-opacity-10 bg-white-500 px-5 py-3 flex items-center">
                    <Avatar placeholderText="Workspace" avatar={null} size="md" className="mr-3" />
                    <p className="workspace-select-title truncate">{selectedItem.title}</p>
                    <HiSelector size={18} className="ml-5" />
                </Listbox.Button>
                <Listbox.Options className="absolute left-0 top-full w-full transform-gpu translate-y-2 bg-dark-300 rounded p-3 min-w-max">
                    <TextField type="text" placeholder="Workspaces..." className="w-56" Icon={<HiSearch size={18} className="mr-2" />} />
                    <div className="divider-line mt-1 mb-3" />
                    {items.map((item) => (
                        <Listbox.Option
                            key={item.id}
                            value={item}
                            className="p-3 cursor-pointer flex items-center justify-between transition-all duration-75 ease-out hover:bg-dark-400 rounded"
                        >
                            {item.title}
                            <HiChevronRight size={18} />
                        </Listbox.Option>
                    ))}
                    <div className="divider-line my-3" />
                    <TextButton color="primary" className="w-full text-white-500 add-workspace-select" onClick={handleAddNotif}>
                        <HiPlus size={18} className="mr-3" />
                        Create Workspace
                    </TextButton>
                </Listbox.Options>
            </div>
        </Listbox>
    );
};

export default WorkspaceSelect;
