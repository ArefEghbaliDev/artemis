import { Listbox } from '@headlessui/react';
import Avatar from 'components/UI/Avatar';
import { TSingleWorkspace } from 'models/workspace/workspace.interface';
import { useState } from 'react';

import { HiChevronRight, HiPlus, HiSelector } from 'react-icons/hi';

interface IProps {
    items: TSingleWorkspace[];
}

const WorkspaceSelect = ({ items }: IProps) => {
    const [selectedItem, setSelectedItem] = useState(items[0]);

    return (
        <Listbox value={selectedItem} onChange={setSelectedItem}>
            <div className="relative">
                <Listbox.Button className="rounded bg-opacity-10 bg-white-500 px-5 py-3 flex items-center">
                    <Avatar placeholderText="Workspace" avatar={null} size="md" className="mr-3" />
                    <p className="workspace-select-title truncate">{selectedItem.title}</p>
                    <HiSelector size={18} className="ml-5" />
                </Listbox.Button>
                <Listbox.Options className="absolute left-0 top-full w-full transform-gpu translate-y-2 bg-white-500 bg-opacity-10 rounded p-3 min-w-max">
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
                    <div className="w-full border-b border-b-white-500 opacity-10 my-3" />
                    <button className="p-3 cursor-pointer w-full flex items-center justify-start transition-all duration-75 ease-out hover:bg-dark-400 rounded">
                        <HiPlus size={18} className="mr-3" />
                        Create Workspace
                    </button>
                </Listbox.Options>
            </div>
        </Listbox>
    );
};

export default WorkspaceSelect;
