'use client';

import './globals.css';
import Providers from '@/utils/provider';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="font-KBIZ">
                <Providers>
                    <RecoilRoot>
                        <div>{children}</div>
                    </RecoilRoot>
                </Providers>
            </body>
        </html>
    );
}
