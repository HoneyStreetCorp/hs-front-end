import { Question } from '../../../constants/types/types';
import Answer from './Answer';

interface Props {
    question: Question;
}

export default function AnswerList({ question }: Props) {
    const chooseAnswer = () => {
        // choose answer
    };
    return (
        <div className="flex flex-col justify-center placeholder-opacity-10">
            {question?.choices.map((choice, idx) => {
                return <Answer key={`${idx}` + choice} choice={choice} onClick={chooseAnswer} />;
            })}
        </div>
    );
}
