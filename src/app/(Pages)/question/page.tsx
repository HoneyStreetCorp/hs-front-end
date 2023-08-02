'use client';

import { useEffect, useState } from 'react';
import Question from '../../components/question/Question';
import ProgressBar from '@/app/components/question/ProgressBar';
import Button from '@/app/components/Button';
import AnswerList from '@/app/components/question/AnswerList';

export default function Home() {
    //TODO: recoil로 이동
    const [page, setPage] = useState(1);
    const [questions, setQuestions] = useState([]);
    const maxPage = questions.length;
    const question = questions[page - 1];
    const handleClickPrev = () => {
        if (page < 2) {
            return;
        }
        setPage(page - 1);
    };

    const handleClickNext = () => {
        if (page >= maxPage) {
            return;
        }
        setPage(page + 1);
    };

    //TODO: 추후 react-query로 api 변경
    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/api/question');
            const data = await res.json();
            setQuestions(data.questions);
        })();
    }, []);

    return (
        <div className="flex h-full flex-col items-center bg-gradient-to-t pt-4">
            <ProgressBar page={page} maxPage={maxPage} />

            <div className="w-10/12 pt-7">
                <Question question={question} />
                <AnswerList question={question} />
                <div className="flex w-full justify-center gap-4 pt-6">
                    <Button onClick={handleClickPrev} outlined={false} disabled={page === 1} size={'full'}>
                        이전문제
                    </Button>
                    <Button onClick={handleClickNext} outlined={false} disabled={page === maxPage} size={'full'}>
                        다음문제
                    </Button>
                </div>
            </div>
        </div>
    );
}
