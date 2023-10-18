export type Question = {
    questionId: string;
    title: string;
    body: string | null;
    choices: string[];
};

export type confirmModalStateProps = {
    isOpen: boolean;
    title: string;
    content: string;
    toggleClickConfirmBtn: Function;
    toggleClickCancelBtn: Function;
};
export type questionStateProps = {
    questions: Question[];
    maxPage: number;
    currentPage: number;
};
