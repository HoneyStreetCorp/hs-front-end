'use client';

import { confirmModalState } from '../atoms/atoms';
import { useRecoilValue } from 'recoil';

export default function ConfirmModal() {
    const { isOpen, title, content, toggleClickConfirmBtn, toggleClickCancelBtn } = useRecoilValue(confirmModalState);
    return (
        <>
            <div className="fixed bg-black w-full h-full opacity-80 ">{content}</div>
        </>
    );
}
