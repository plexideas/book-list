import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRootState } from '../store';

const initialState: string = 'toread';

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setTab: (_, action: PayloadAction<string>) => action.payload
    }
});

export const { setTab } = tabsSlice.actions;

export const selectCurrentTabs = (state: TRootState) => state.tabs;
