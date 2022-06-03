import ContainedButton from 'components/UI/Button/ContainedButton';
import Modal from 'components/UI/Modal';
import TextField from 'components/UI/TextField';
import SelectProjectAvatar from '../SelectProjectAvatar';

interface IProps {
    onClose: () => void;
}

const CreateProjectModal = ({ onClose }: IProps) => {
    return (
        <Modal isOpen={true} onClose={onClose} title="New Project" className="w-96">
            <TextField type="text" name="title" placeholder="Project Title" label="Project Title" />
            <TextField type="area" name="title" placeholder="Description" label="Project Description" className="mt-8" />
            <SelectProjectAvatar />
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
