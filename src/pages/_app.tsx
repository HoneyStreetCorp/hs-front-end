import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR, Roboto } from 'next/font/google';

// component
import MainContainer from '../components/MainContainer';
// lib
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query"

const notoSansKr = Noto_Sans_KR({
    preload: false,
    weight: ['100', '400', '700'],
});

const roboto = Roboto({
    preload: false,
    weight: ['100', '400', '700'],
    variable: '--roboto',
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        // <main className={[notoSansKr.className, roboto.variable].join(' ')} >
        <RecoilRoot>
            <QueryClientProvider client={queryClient} >
                <MainContainer>
                    <Component {...pageProps} />
                </MainContainer>
            </QueryClientProvider>
        </RecoilRoot>
        // </main>
    );
}
