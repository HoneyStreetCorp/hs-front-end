interface Props {
    inputValue: string;
    onChange: (e: any) => void;
}

export default function NameInput({ inputValue, onChange }: Props) {
    return (
        <div
            style={{ background: '#C3CED8' }}
            className="flex justify-center align-middle py-2 px-2 text-2xl cursor-pointer rounded-lg mb-4"
        >
            <div className="flex flex-col justify-center text-white me-3">NAME</div>
            <input
                type="text"
                className="h-16 rounded-lg w-48 text-center"
                onChange={e => {
                    onChange(e);
                }}
            />
        </div>
    );
}
