import { atom } from 'recoil';
import { v1 } from 'uuid';
import { confirmModalStateProps, questionStateProps } from '@/constants/types/types';

export const confirmModalState = atom<confirmModalStateProps>({
    key: `confirmModalState/${v1()}`,
    default: {
        isOpen: false,
        title: '',
        content: 'dddddddddddddddddddddddddddddddddddddd',
        toggleClickConfirmBtn: () => {},
        toggleClickCancelBtn: () => {},
    },
});

export const questionState = atom<questionStateProps>({
    key: `questionState/${v1()}`,
    default: {
        questions: [],
        maxPage: 1,
        currentPage: 1,
    },
});
