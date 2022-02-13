import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRootState } from '../store';

const initialState: string[] = [];

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<string>) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeFilter: (state, action: PayloadAction<string>) =>
            state.filter(tag => tag !== action.payload),
        removeAllFilter: state => [],
        setFilters: (state, action: PayloadAction<string[]>) => action.payload
    }
});

export const { addFilter, removeFilter, removeAllFilter, setFilters } = filtersSlice.actions;

export const selectFilters = (state: TRootState) => Array.from(state.filters);
