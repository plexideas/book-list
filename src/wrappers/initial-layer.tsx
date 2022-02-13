import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TABS } from '../configs';
import { setFilters } from '../features/filters-slice';
import { initStatus } from '../features/status-slice';
import { setTab } from '../features/tabs-slice';
import { getParamsFromQueryString } from '../helpers/get-params-from-query-string';
import { getQueryStringFromLocation } from '../helpers/get-query-string-from-location';

/**
 * Врапер для инициализации данных
 */
export const InitialLayer: FC = ({ children }) => {
    const dispatch = useDispatch();
    const queryString = getQueryStringFromLocation();
    const { tags, tab } = getParamsFromQueryString(queryString);

    const status = localStorage.getItem('status');

    dispatch(initStatus(status));
    dispatch(setTab(TABS.includes(tab) ? tab : 'toread'));
    dispatch(setFilters(tags ? tags.split(',') : []));

    return <>{children}</>;
};
