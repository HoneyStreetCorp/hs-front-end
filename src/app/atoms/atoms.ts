import { atom } from 'recoil';
import { v1 } from 'uuid';

interface confirmModalStateProps {
    isOpen: boolean;
    title: string;
    content: string;
    toggleClickConfirmBtn: Function;
    toggleClickCancelBtn: Function;
}

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
