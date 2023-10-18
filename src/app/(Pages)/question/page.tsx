'use client';

import { useEffect, useState } from 'react';
import QuestionWrapper from '../../components/question/QuestionWrapper';
import ProgressBar from '@/app/components/question/ProgressBar';
import Button from '@/app/components/Button';
import AnswerList from '@/app/components/question/AnswerList';

export default function Home() {
    //TODO: recoil로 이동
    const [page, setPage] = useState(1);
    const [questions, setQuestions] = useState([]);
    const maxPage = questions.length;
    const question = questions[page - 1];
    const handleClickPrevBtn = () => {
        if (page < 2) {
            return;
        }
        setPage(page - 1);
    };

    const handleClickNextBtn = () => {
        if (page >= maxPage) {
            return;
        }
        setPage(page + 1);
    };

    useEffect(() => {
        (async () => {
            const res = await fetch('http://3.139.42.175/api/v1/questions/1');
            const data = await res.json();
            setQuestions(data);
        })();
    }, []);

    return (
        <div className="flex h-full flex-col items-center bg-gradient-to-t pt-4">
            <ProgressBar page={page} maxPage={maxPage} />

            <div className="w-10/12 pt-7">
                <QuestionWrapper question={question} />
                <AnswerList question={question} />
                <div className="flex w-full justify-center gap-4 pt-6">
                    <Button onClick={handleClickPrevBtn} outlined={false} disabled={page === 1} size={'full'}>
                        이전문제
                    </Button>
                    <Button onClick={handleClickNextBtn} outlined={false} disabled={page === maxPage} size={'full'}>
                        다음문제
                    </Button>
                </div>
            </div>
        </div>
    );
}
