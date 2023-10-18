'use client';

import Button from './components/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
    const [userName, setUserName] = useState('');
    const router = useRouter();

    const saveUser = async (userName: String) => {
        if (userName) {
            const res = await fetch(`http://3.139.42.175/api/v1/users?name=${userName}`, {
                method: 'POST',
            });
            const data = await res.json();
            localStorage.setItem('token', data.token);
            router.push('/question');
        } else {
        }
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
                        <div className="w-9/12">
                            <div
                                style={{ background: '#C3CED8' }}
                                className="flex justify-center align-middle py-2 px-2 text-2xl cursor-pointer rounded-lg mb-4"
                            >
                                <div className="flex flex-col justify-center text-white me-3">NAME</div>
                                <input
                                    type="text"
                                    className="h-16 rounded-lg w-full text-center"
                                    onChange={e => {
                                        setUserName(e.target.value);
                                    }}
                                />
                            </div>
                            <Button
                                outlined={false}
                                size={'xl'}
                                onClick={(e: any) => {
                                    saveUser(userName);
                                }}
                            >
                                시작하기
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
