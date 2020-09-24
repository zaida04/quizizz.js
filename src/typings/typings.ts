import { QuizData } from "./QuizData";

export type QuizID = string;

export interface Data {
    quiz: QuizData;
    draft: string | null;
}
