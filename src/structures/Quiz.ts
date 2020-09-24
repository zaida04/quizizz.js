import { Data } from "../typings/typings";
import { QuizDataStats } from "../typings/QuizDataStats";
import { QuizDataInfo } from "../typings/QuizDataInfo";
import { QuizData } from "../typings/QuizData";
import User from "./User";
import Collection from "@discordjs/collection";
import Question from "./Question";

/**
 * @class
 * @description Represents a Quiz from the API
 */
export default class Quiz {
    private _raw: Data;
    draft: string | null;
    isTagged: boolean;
    isLoved: boolean;
    stats: QuizDataStats;
    hasDraftVersion: boolean;
    hasPublishedVersion: boolean;
    updated: string | null;
    createdAt: string;
    info: QuizDataInfo;
    id: string;
    type: string;
    draftVersion: number | null;
    deleted: boolean;
    parentDetail: string | null;
    love: number;
    cloned: boolean;
    publishedVersion: string | null;
    createdBy: User;
    questions: Collection<string, Question>;

    /**
     * @constructor
     * @param {Data} raw
     */
    constructor(raw: Data) {
        this._raw = raw;
        this.draft = raw.draft;
        const { quiz }: { quiz: QuizData } = raw;

        this.isTagged = quiz.isTagged;
        this.isLoved = quiz.isLoved;
        this.stats = quiz.stats;
        this.love = quiz.love;
        this.cloned = quiz.cloned;
        this.parentDetail = quiz.parentDetail;
        this.deleted = quiz.deleted;
        this.draftVersion = quiz.draftVersion;
        this.publishedVersion = quiz.publishedVersion;
        this.type = quiz.type;
        this.id = quiz._id;
        this.info = quiz.info;
        this.createdBy = quiz.createdBy;
        this.createdAt = quiz.createdAt;
        this.updated = quiz.updated;
        this.hasPublishedVersion = quiz.hasPublishedVersion;
        this.hasDraftVersion = quiz.hasDraftVersion;
        this.createdBy = new User(quiz.createdBy);
        this.questions = new Collection();

        for (const question of quiz.info.questions) {
            this.questions.set(question._id, new Question(question));
        }
    }
}
