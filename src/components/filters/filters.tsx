import React, { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFilter, removeFilter, selectFilters } from '../../features/filters-slice';
import { Tags } from '../tags/tags';

import styles from './filters.css';

export const Filters: VFC = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);

    if (!filter || filter.length < 1) return null;

    return (
        <div className={styles.container}>
            Filtered by tags: <Tags onClick={(tag) => dispatch(removeFilter(tag))} tags={filter} />
            <button onClick={() => dispatch(removeAllFilter())} className={styles.clear}>(clear)</button>
        </div>
    );
};
