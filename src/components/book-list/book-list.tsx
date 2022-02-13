import React, { FC, useRef } from 'react';
import { useVirtual } from 'react-virtual';
import { getBookAction } from '../../helpers/get-book-action';

import { TBook, TBookStatus } from '../../models';
import { Book } from '../book/book';
import { EmptyList } from '../empty-list/empty-list';
import { Filters } from '../filters/filters';

import styles from './book-list.css';

interface IBookList {
    books?: TBook[];
    status: TBookStatus;
}

/**
 * Компонент для отображения списка книг. 
 * Для возможности отобржаения большого количества книг, решил 
 * использовать react-virtual. С этой библиотекой раюотаю вперые,
 * поэтому делал по принципу - лишь бы работало. Так как в описание
 * и в макете не сказанно как именно должен выглядеть список и форма
 * в целом - фиксированная высота или нет, я принял решение зафиксировать
 * ее - height: 640px, просто ради удобства (ну и наверное выглядит чуть 
 * лучше чем бесконечный по высоте список)
 */
export const BookList: FC<IBookList> = ({ status, books }) => {
    if (!books || books.length < 1) {
        return (
            <>
                <Filters />
                <EmptyList />
            </>
        );
    }

    const parentRef = useRef<HTMLDivElement>(null);
    const action = getBookAction(status);

    const rowVirtualizer = useVirtual({
        size: books.length,
        parentRef,
        useObserver: React.useCallback(() => ({ height: 400, width: 480 }), [status])
    });

    return (
        <div>
            <Filters />
            <div ref={parentRef} className={styles.bookList}>
                <div
                    style={{
                        height: rowVirtualizer.totalSize,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {rowVirtualizer.virtualItems.map(virtualRow => (
                        <div
                            key={virtualRow.index}
                            data-key={virtualRow.index}
                            ref={virtualRow.measureRef}
                            className={styles.bookContent}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                        >
                            {books[virtualRow.index] && (
                                <Book action={action} {...books[virtualRow.index]} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
