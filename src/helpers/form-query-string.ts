/**
 * Функция формирует строку query параметров
 */
export const formQueryString = (...queryes: (string | undefined)[]) => {
    return `?${queryes.filter(Boolean).join('&')}`;
}
