import { QuizDataQuestionInfo } from "../typings/QuizDataQuestionInfo";
import Structure from "./Structure";

/**
 * @description Represents a specific Question from a Quiz
 * @class
 */
export default class Question {
    raw: QuizDataQuestionInfo;
    _id: string;
    createdAt: string;
    updated: string;
    time: number;
    type: string;
    published: boolean;
    standards: string[];
    topics: string[];
    cached: boolean;
    structure: Structure;

    /**
     * @param {QuizDataQuestionInfo} data
     * @constructor
     */
    constructor(data: QuizDataQuestionInfo) {
        this.raw = data;
        this._id = data._id;
        this.createdAt = data.createdAt;
        this.updated = data.updated;
        this.time = data.time;
        this.type = data.type;
        this.published = data.published;
        this.standards = data.standards;
        this.topics = data.topics;
        this.cached = data.cached;

        this.structure = new Structure(data.structure);
    }
}
