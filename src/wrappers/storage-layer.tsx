import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocalStorage } from 'react-use';
import { selectStatus } from '../features/status-slice';

/**
 * Небольшой слой для работы со стореджем. ТУт просто сохраняем текущий статус книг
 */
export const StorageLayer: FC = ({ children }) => {
    const [_status, setStatus] = useLocalStorage('status', {});
    const status = useSelector(selectStatus);

    useEffect(() => {
        setStatus(status)
    }, [status]);

    return <>{children}</>;
};
