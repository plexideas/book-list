import React, { useMemo, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../features/filters-slice';
import { getBookAction } from '../../helpers/get-book-action';
import { TBook, TBookStatus, TOnClick } from '../../models';
import { Tags } from '../tags/tags';

import styles from './book.css';

interface IBook extends TBook {
    action: {
        label: string;
        icon: string;
        onClick: TOnClick;
    };
}

export const Book: VFC<IBook> = ({ id, action, author, description, tags, title }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.author}>{author}</div>
            <h3 className={styles.title}>{title}</h3>
            <button onClick={() => action.onClick(id)} className={styles.action}>
                <span>{action.label}</span>
                <span>{action.icon}</span>
            </button>
            <div className={styles.description}>{description}</div>
            <div className={styles.tags}>
                <Tags onClick={(tag) => dispatch(addFilter(tag))} tags={tags} />
            </div>
        </div>
    );
};
