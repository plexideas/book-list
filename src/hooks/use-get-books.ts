import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetBooksQuery } from '../api/book-api';
import { selectStatus } from '../features/status-slice';
import { TBook } from '../models';

export const useGetBooks = () => {
    const [toReadList, setToReadList] = useState<TBook[]>([]);
    const [inProgressList, setInProgressList] = useState<TBook[]>([]);
    const [doneList, setDoneList] = useState<TBook[]>([]);

    const { isLoading, data } = useGetBooksQuery();
    const { done, inProgress } = useSelector(selectStatus);

    useEffect(() => {
        if (!isLoading && data) {
            setToReadList(data.filter((book) => !done.includes(book.id) && !inProgress.includes(book.id)));
            setInProgressList(data.filter((book) => inProgress.includes(book.id)));
            setDoneList(data.filter((book) => done.includes(book.id)));
        }
    }, [isLoading,data, done, inProgress]);

    return {
        isLoading,
        toReadList,
        inProgressList,
        doneList
    };
};
