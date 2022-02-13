import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './api/book-api';
import { filtersSlice } from './features/filters-slice';
import { statusSlice } from './features/status-slice';
import { tabsSlice } from './features/tabs-slice';

export const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        status: statusSlice.reducer,
        tabs: tabsSlice.reducer,
        [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(booksApi.middleware)
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
