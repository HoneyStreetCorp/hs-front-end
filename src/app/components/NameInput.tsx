interface Props {
    inputValue: string;
    onChange: (e: any) => void;
}

export default function NameInput({ inputValue, onChange }: Props) {
    return (
        <div className="flex gap-2">
            <p>NAME</p>
            <div>
                <input className="w-40" type="text" onChange={onChange} value={inputValue} />
            </div>
        </div>
    );
}
