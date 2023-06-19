import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {useQuery} from "react-query";
import { userState } from './state';

const fetchData = async () => {
    const res = await fetch("/api/hello")
    return res.json();
}

export default function Home() {
    const [state, setState] = useRecoilState(userState)
    
    const { data, status } = useQuery("changeUser", fetchData, {
        onSuccess: (data) => {
            console.log(data)
        }
    })

    const handleChangeUpdateNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nicknameInputVal = e.target.value;
        setState({...state, nicknameInputVal});
    };

    return (
        <>
            <div className="w-full h-full bg-red-100">
                <input type="text" value={state.nicknameInputVal} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeUpdateNicknameInput(e)} />
            </div>
        </>
    );
}
