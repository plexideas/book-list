import React, { VFC } from 'react';
import { Tab, Tabs } from '../tabs/tabs';
import { BookList } from '../book-list/book-list';
import { useGetBooks } from '../../hooks/use-get-books';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../features/filters-slice';

export const App: VFC = () => {
    const { isLoading, doneList, inProgressList, toReadList } = useGetBooks();

    const filters = useSelector(selectFilters);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Tabs>
                <Tab id="toread" title={`To read (${toReadList.length})`}>
                    <BookList
                        status="toread"
                        books={toReadList.filter(book =>
                            filters.every(tag => book.tags.includes(tag))
                        )}
                    />
                </Tab>
                <Tab id="inprogress" title={`In progress (${inProgressList.length})`}>
                    <BookList
                        status="inprogress"
                        books={inProgressList.filter(book =>
                            filters.every(tag => book.tags.includes(tag))
                        )}
                    />
                </Tab>
                <Tab id="done" title={`Done (${doneList.length})`}>
                    <BookList
                        status="done"
                        books={doneList.filter(book =>
                            filters.every(tag => book.tags.includes(tag))
                        )}
                    />
                </Tab>
            </Tabs>
        </div>
    );
};
