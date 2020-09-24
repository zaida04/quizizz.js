import { QuizDataAnswer, QuizDataQuestion } from "../typings/QuizDataQuestion";

/**
 * @class
 * @classdec Represents the internal structure of a Question, data like the answers and the prompt
 */
export default class Structure {
    raw: QuizDataQuestion;
    kind: string;
    title: { type: string; media: string[]; text: string[]; hasMath: boolean };
    choices: QuizDataAnswer[];
    answerNumber: number;
    answer: QuizDataAnswer;
    settings: { hasCorrectAnswer: boolean };

    /**
     * @constructor
     * @param {QuizDataQuestion} data
     */
    constructor(data: QuizDataQuestion) {
        this.raw = data;
        this.kind = data.kind;
        this.title = data.query;
        this.choices = [];
        this.answerNumber = data.answer;
        this.answer = this.choices[data.answer];
        this.settings = data.settings;

        for (const choice of data.options) {
            this.choices.push(choice);
        }
    }
}
