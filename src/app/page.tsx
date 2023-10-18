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
                <div className="flex h-full flex-col items-center bg-gradient-to-t pt-4">
                    <div className="flex flex-grow flex-col items-center justify-center gap-14">
                        <img src="/images/geori_logo_img.png" alt="main animation" className="mx-auto" />
                        <div className="flex flex-col gap-4 text-center">
                            <h3 className="text-font-main text-base">- 연애 테스트 100제 -</h3>
                        </div>
                        <div>
                            <NameInput inputValue={inputValue} onChange={handleChangeUpdateInputValue} />
                            <Button outlined={false} size={'xl'} onClick={handleClickStart}>
                                시작하기
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
