import { Question } from '../../../constants/types/types';

interface Props {
    question: Question;
}

export default function QuestionWrapper({ question }: Props) {
    return (
        <div className="flex h-80 flex-col items-center justify-center rounded-xl border-2 border-geori-primary p-8">
            <div className="">
                <h2>{question?.title}</h2>
            </div>
        </div>
    );
}
