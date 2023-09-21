'use client';

import Button from './components/Button';
import { useRouter } from 'next/navigation';
import NameInput from './components/NameInput';
import { useState } from 'react';

export default function Home() {
    const router = useRouter();

    const [inputValue, setInputValue] = useState('');
    const handleChangeUpdateInputValue = (e: any) => {
        setInputValue(e.target.value);
    };

    const goToQuestionPage = () => {
        router.push('/question');
    };

    const BASE_URL = 'http://3.139.42.175:80/api/v1';

    const postName = async (name: string) => {
        const postNameURL = `${BASE_URL}/users?name=${encodeURIComponent(name)}`;
        try {
            const response = await fetch(postNameURL, {
                method: 'POST',
                headers: {
                    Accept: '*/*',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to post the name');
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const validateInputValue = (inputValue: string): boolean => {
        if (inputValue.length < 1) {
            return false;
        }
        return true;
    };

    const handleClickStart = async () => {
        if (!validateInputValue(inputValue)) {
            alert('이름을 입력해주세요');
            return;
        }

        const data = await postName(inputValue);
        const userId = data.name;
        localStorage.setItem('userId', userId);

        goToQuestionPage();
    };

    return (
        <main className="">
            <div className="relative mx-auto h-screen max-w-md bg-[#FEF7EC] from-[#f8c6c9] via-[#fff2df] to-[#FFFCE6]">
                <div className="flex h-full w-full flex-col justify-between bg-gradient-to-t px-9 py-9">
                    <div className="flex h-full flex-grow flex-col items-center justify-center gap-14 p-12">
                        <div className="flex flex-col gap-4 text-center">
                            <h1 className="text-5xl text-pink-500 opacity-75">거리</h1>
                            <h3 className="text-neutral-700">- 연애 테스트 100제 -</h3>
                        </div>
                        <img src="/images/geori_logo_animation.gif" alt="main animation" className="mx-auto" />
                        <NameInput inputValue={inputValue} onChange={handleChangeUpdateInputValue} />
                        <Button
                            outlined={false}
                            size={'xl'}
                            // TODO:: 조건달아서 라우팅 하도록 수정
                            onClick={handleClickStart}
                        >
                            시작하기
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
