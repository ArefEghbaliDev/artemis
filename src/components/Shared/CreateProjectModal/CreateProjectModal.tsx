import ContainedButton from 'components/UI/Button/ContainedButton';
import Modal from 'components/UI/Modal';
import TextField from 'components/UI/TextField';
import { HiFolderOpen } from 'react-icons/hi';

interface IProps {
    onClose: () => void;
}

const CreateProjectModal = ({ onClose }: IProps) => {
    return (
        <Modal isOpen={true} onClose={onClose} title="New Project" className="w-96">
            <TextField type="text" name="title" placeholder="Project Title" label="Project Title" />
            <TextField type="text" name="title" placeholder="Description" label="Project Description" className="mt-8" />
            <label className="mb-2 mt-8 block">Project Avatar (optional)</label>
            <div className="rounded p-4 bg-white-500 bg-opacity-10 flex flex-col items-center">
                <HiFolderOpen size={42} className="mb-2" />
                <p>Drag & drop or click to select avatar</p>
            </div>
            <div className="flex items-center justify-end mt-8">
                <ContainedButton type="button" color="default" className="mr-3" onClick={onClose}>
                    Cancel
                </ContainedButton>
                <ContainedButton type="button" color="primary">
                    Create Workspace
                </ContainedButton>
            </div>
        </Modal>
    );
};

export default CreateProjectModal;
