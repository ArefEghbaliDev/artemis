import ContainedButton from 'components/UI/Button/ContainedButton';
import Modal from 'components/UI/Modal';
import TextField from 'components/UI/TextField';
import useCreateProject from 'hooks/useCreateProject';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxHooks';
import { updateShowCreateProject } from 'services/redux/slices/project';
import SelectProjectAvatar from '../SelectProjectAvatar';

const CreateProjectModal = () => {
    const dispatch = useAppDispatch();

    const showCreateProject = useAppSelector((state) => state.project.showCreateProject);

    const { formik, isLoading } = useCreateProject();

    const handleUpdateAvatar = (avatar: string | null) => {
        formik.setFieldValue('avatar', avatar);
    };

    const handleClose = () => {
        dispatch(updateShowCreateProject(false));
    };

    return (
        <Modal isOpen={showCreateProject} onClose={handleClose} title="New Project" className="w-96">
            <form name="create-project-form" onSubmit={formik.handleSubmit}>
                <TextField
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    error={formik.errors.title}
                    label="Project Title"
                    onChange={formik.handleChange}
                />
                <TextField
                    type="area"
                    name="description"
                    placeholder="Description"
                    error={formik.errors.description}
                    label="Project Description"
                    onChange={formik.handleChange}
                    className="mt-8"
                />
                <SelectProjectAvatar setAvatar={handleUpdateAvatar} />
                <div className="flex items-center justify-end mt-8">
                    <ContainedButton type="button" color="default" className="mr-3" onClick={handleClose} disabled={isLoading}>
                        Cancel
                    </ContainedButton>
                    <ContainedButton type="submit" color="primary" isLoading={isLoading} disabled={isLoading}>
                        Create Project
                    </ContainedButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateProjectModal;
