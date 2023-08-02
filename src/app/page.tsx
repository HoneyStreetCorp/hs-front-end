import Button from './components/Button';

export default function Home() {
    return (
        <main className="">
            <div className="relative mx-auto h-screen max-w-md bg-[#FEF7EC] from-[#f8c6c9] via-[#fff2df] to-[#FFFCE6]">
                <div className="flex h-full w-full flex-col justify-between bg-gradient-to-t px-9 py-9">
                    <div className="flex flex-grow flex-col items-center justify-center gap-14">
                        <div className="flex flex-col gap-4 text-center">
                            <h1 className="text-5xl text-pink-500 opacity-75">거리</h1>
                            <h3 className="text-neutral-700">- 연애 테스트 100제 -</h3>
                        </div>
                        <img src="/images/geori_gif.gif" alt="main animation" className="mx-auto" />
                        <Button outlined={false} size={'xl'}>
                            시작하기
                        </Button>
                    </div>
                    <div className="mx-auto flex h-20 w-full flex-col justify-center bg-white text-center">
                        배너광고 모래반지 빵야빵야
                    </div>
                </div>
            </div>
        </main>
    );
}
