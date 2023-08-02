'use client';

interface ButtonProps {
    color?: string;
    size?: string;
    onClick?: Function;
    outlined?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
}

const buttonConfig: {
    primary: {
        bgColor: string,
        color: string,
        outline: string,
    },
    secondary: {
        bgColor: string,
        color: string,
        outline: string,
    },
    small: string,
    medium: string,
    large: string,
    [key: string]: any, // 인덱스 시그니처 추가
} = {
    // Colors
    primary: {
        bgColor: 'bg-geori-pink hover:bg-opacity-80',
        color: 'text-neutral-100',
        outline: 'border-geori-primary text-primary-500 bg-opacity-20 hover:bg-opacity-70 text-neutral-700',
    },
    // TODO: Color 테마컬러로 바꾸기
    secondary: {
        bgColor: 'bg-slate-600',
        color: 'text-white',
        outline: 'border-secondary-500 text-secondary-500 bg-opacity-0 hover:bg-opacity-50',
    },

    // Sizes
    small: 'px-3 py-2',
    medium: 'px-4 py-2',
    large: 'px-5 py-2',
    xl: 'px-24 py-4 text-2xl',
    full: 'py-2 w-full',
};

export default function Button({
    color = 'primary',
    size = 'small',
    onClick = () => {},
    outlined = true,
    children,
    disabled = false,
}: ButtonProps) {
    return (
        <>
            <div
                className={`cursor-pointer rounded-lg text-center shadow-black drop-shadow-md transition-all duration-100
                    focus:outline-none ${outlined ? 'border-2' : ''} ${buttonConfig[size]} ${
                    outlined ? buttonConfig[color].outline : buttonConfig[color].color
                }
                    ${buttonConfig[color].bgColor}
                    `}
                onClick={e => onClick(e)}
            >
                {children}
            </div>
        </>
    );
}
