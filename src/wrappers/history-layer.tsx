import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from '../features/filters-slice';
import { selectCurrentTabs } from '../features/tabs-slice';
import { formQueryString } from '../helpers/form-query-string';

/**
 * Врапер для работы с историей. Сохраняем данные оп выбранным фильтрам и активной влкадке
 */
export const HistoryLayer: FC<{ children: JSX.Element[] | JSX.Element }> = ({ children }) => {
    const { history } = window;

    const filters = useSelector(selectFilters);
    const tab = useSelector(selectCurrentTabs);

    const tagsQuery = filters.length > 0 ? `tags=${filters.join(',')}` : undefined;
    const tabQuery = tab ? `tab=${tab}` : undefined;
    
    useEffect(() => {
        if (history) {
            history.pushState(null, '', formQueryString(tabQuery, tagsQuery))
        }
    }, [history, tagsQuery, tabQuery]);

    return <>{children}</>;
};
