import { QuizDataQuestionInfo } from "./QuizDataQuestionInfo";

export interface QuizDataInfo {
    _id: string;
    traits: {
        isQuizWithoutCorrectAnswer: boolean;
        totalSlides: number;
    };
    pref: {
        time: number | null;
    };
    lang: string;
    visibility: boolean;
    questions: QuizDataQuestionInfo[];
    subjects: string[];
    topics: string[];
    subtopics: string[];
    grade: string[];
    gradeLevel: number | null;
    deleted: boolean;
    standards: string[];
    name: string;
    createdAt: string;
    updated: string;
    qm: {
        [key: string]: {
            time: number;
        };
    };
    image: string;
    profane: boolean;
    isProfane: boolean;
    whitelisted: boolean;
    cached: boolean;
    courses: string[];
}
