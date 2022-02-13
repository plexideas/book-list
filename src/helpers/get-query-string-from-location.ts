/**
 * Хелпер помогает получить строку с параметрами
 */
export const getQueryStringFromLocation = () => {
    return typeof window === 'undefined'
        ? ''
        : window.location.search;
};
