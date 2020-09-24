export interface QuizDataQuestion {
    kind: string;
    query: {
        type: string;
        media: string[];
        text: string[];
        hasMath: boolean;
    };
    options: QuizDataAnswer[];
    answer: number;
    settings: {
        hasCorrectAnswer: boolean;
    };
}

export interface QuizDataAnswer {
    type: string;
    text: string;
    media: string[];
    hasMath: boolean;
}
