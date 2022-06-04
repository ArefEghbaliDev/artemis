import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { createNewProject } from 'services/firebase/api/project.api';
import { updateShowCreateProject } from 'services/redux/slices/project';

import isAlphaNumeric from 'validator/lib/isAlphanumeric';
import { useAppDispatch } from './useReduxHooks';

const useCreateProject = () => {
    const dispatch = useAppDispatch();
    const createProjectMutation = useMutation('projects', createNewProject);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            avatar: null,
        },
        validate: (values) => {
            const errors: any = {};

            if (!values.title) {
                errors.title = 'Title is required!';
            } else if (!isAlphaNumeric(values.title, 'en-US', { ignore: ' ' })) {
                errors.title = 'Invalid project title!';
            }

            if (values.description) {
                if (!isAlphaNumeric(values.description, 'en-US', { ignore: ' ' })) {
                    errors.description = 'Invalid project description';
                }
            }

            return errors;
        },
        onSubmit: async (values) => {
            try {
                await createProjectMutation.mutateAsync({
                    title: values.title,
                    description: values.description,
                    avatar: values.avatar,
                    owner: 'Aref',
                    createdDate: 'now',
                });
                dispatch(updateShowCreateProject(false));
            } catch (err) {
                console.log(err);
            }
        },
        validateOnChange: false,
    });

    return {
        formik,
        isLoading: createProjectMutation.isLoading,
        error: createProjectMutation.error,
    };
};

export default useCreateProject;
