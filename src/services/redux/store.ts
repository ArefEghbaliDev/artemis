import { configureStore } from '@reduxjs/toolkit';

import project from './slices/project';

export const store = configureStore({
    reducer: {
        project,
    },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
