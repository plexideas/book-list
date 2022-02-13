import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRootState } from '../store';

interface IStatusState {
    inProgress: string[];
    done: string[];
}

const initialState: IStatusState = {
    inProgress: [],
    done: []
};

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        toInProgress: (state, action: PayloadAction<string>) => {
            state.inProgress.push(action.payload);
        },
        toDone: (state, action: PayloadAction<string>) => {
            state.inProgress = state.inProgress.filter(id => id !== action.payload);
            state.done.push(action.payload);
        },
        toRead: (state, action: PayloadAction<string>) => {
            state.done = state.done.filter(id => id !== action.payload);
        },
        initStatus: (_, action: PayloadAction<string | null>) =>
            action.payload ? JSON.parse(action.payload) : initialState
    }
});

export const { initStatus, toDone, toInProgress, toRead } = statusSlice.actions;

export const selectStatus = (state: TRootState) => state.status;
