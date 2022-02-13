export type TBook = {
    id: string,
    author: string,
    title: string,
    description: string,
    tags: string[]
}

export type TBookStatus = 'toread' | 'inprogress' | 'done';

export type TBookResponse = {
    items: Omit<TBook, 'status'>[]
}

export type TOnClick = (id: string) => {
    payload: string;
    type: string;
}
