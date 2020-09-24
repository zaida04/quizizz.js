import { QuizDataQuestion } from "./QuizDataQuestion";

export interface QuizDataQuestionInfo {
    _id: string;
    createdAt: string;
    updated: string;
    time: number;
    type: string;
    published: boolean;
    structure: QuizDataQuestion;
    standards: string[];
    topics: string[];
    cached: boolean;
}
