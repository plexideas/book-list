/**
 * Функция парсит строку запроса и пытается вытащить параметры
 */
export const getParamsFromQueryString = (queryString: string) => {
    if (queryString.length < 1) {
        return {};
    }

    const queryParams = queryString
        .slice(1)
        .split('&')
        .map(query => query.split('='));

    return Object.fromEntries(queryParams);
};
