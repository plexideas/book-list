import { useDispatch } from 'react-redux';
import { ACTION_ICON, ACTION_LABEL } from '../configs';
import { toDone, toInProgress, toRead } from '../features/status-slice';
import { TBookStatus } from '../models';


/**
 * Хелпер подготавливает данные для кнопки смены статуса
 */
export const getBookAction = (status: TBookStatus) => {

    const dispatch = useDispatch()

    const dispatchCollection = {
        toread: toInProgress,
        inprogress: toDone,
        done: toRead,
    };

    return {
        label: ACTION_LABEL[status],
        icon: ACTION_ICON[status],
        onClick: (id: string) => dispatch(dispatchCollection[status](id)),
    }
};
