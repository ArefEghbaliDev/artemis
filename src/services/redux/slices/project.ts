import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProjectState } from '../interfaces/project.interface';

const initialState: IProjectState = {
    showCreateProject: false,
    projects: [],
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        updateShowCreateProject: (state, action: PayloadAction<boolean>) => {
            state.showCreateProject = action.payload;
        },
    },
});

export const { updateShowCreateProject } = projectSlice.actions;

export default projectSlice.reducer;
