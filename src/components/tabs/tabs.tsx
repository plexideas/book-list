import cn from 'classnames';
import React, { FC, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TABS } from '../../configs';
import { selectCurrentTabs, setTab } from '../../features/tabs-slice';
import { TBookStatus } from '../../models';

import styles from './tabs.css';

interface ITab {
    title: string;
    id: TBookStatus;
}

export const Tab: FC<ITab> = ({ children }) => {
    return <div className={styles.tabContent}>{children}</div>;
};

interface ITabs {
    children: ReactElement<ITab>[];
}

export const Tabs: FC<ITabs> = ({ children }) => {
    const dispatch = useDispatch();
    const tabs = useMemo(() => children.filter(child => child.props.title), [children]);
    const currentTab = useSelector(selectCurrentTabs);

    const [selectedTab, setSelectedTab] = useState(0);

    const onTabClickHandler = useCallback((tab) => {
        dispatch(setTab(tab));
    }, [])

    useEffect(() => {
        const tabIndex = tabs.findIndex((tab => tab.props.id === currentTab));
        console.log({ tabIndex });
        setSelectedTab(tabIndex);
    }, [tabs, currentTab]);

    return (
        <div className={styles.tabContainer}>
            <ul className={styles.tabPanel}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={cn(styles.tab, {[styles.selected]: tab.props.id === currentTab})}
                    >
                        <button
                            className={cn(
                                styles.tabButton,
                                {[styles.selected]: tab.props.id === currentTab}
                            )}
                            onClick={() => onTabClickHandler(tab.props.id)}
                        >
                            {tab.props.title}
                        </button>
                    </li>
                ))}
            </ul>
            {tabs[selectedTab]}
        </div>
    );
};
