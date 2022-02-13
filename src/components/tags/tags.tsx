import React, { VFC } from 'react';
import { TOnClick } from '../../models';

import styles from './tags.css'

export interface ITags {
    tags: string[];
    onClick: TOnClick;
}

export const Tags: VFC<ITags> = ({ tags, onClick }) => {
    return (
        <ul className={styles.tags}>
            {tags.map(tag => (
                <li key={tag} className={styles.tag}>
                    <button onClick={() => onClick(tag)}>#{tag}</button>
                </li>
            ))}
        </ul>
    );
};
