interface ProgressBarProps {
    page: number;
    maxPage: number;
}

export default function ProgressBar({ page, maxPage }: ProgressBarProps) {
    const progress = ((page - 1) / maxPage) * 100;
    return (
        <>
            <div className="mt-2 flex h-7 w-full flex-col justify-center">
                <div className="flex">
                    <div
                        className={'relative h-2 bg-geori-pink duration-300 ease-in'}
                        style={{ width: `${progress}%` }}
                    ></div>
                    <div
                        className="h-2 bg-geori-blue duration-300 ease-in"
                        style={{ width: `${100 - progress}%` }}
                    ></div>
                </div>
                <div
                    className={
                        'absolute h-5 w-10 rounded-md bg-geori-pink text-center leading-5 text-white duration-200 ease-in'
                    }
                    style={{ left: progress ? `calc(${progress}% - 1.7rem)` : '0' }}
                >
                    {progress + '%'}
                </div>
            </div>
        </>
    );
}
