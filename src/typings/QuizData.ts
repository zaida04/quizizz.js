import { QuizCreatedByData } from "./QuizCreatedByData";
import { QuizDataInfo } from "./QuizDataInfo";
import { QuizDataStats } from "./QuizDataStats";

export interface QuizData {
    isTagged: boolean;
    isLoved: boolean;
    stats: QuizDataStats;
    love: number;
    cloned: boolean;
    parentDetail: string | null;
    deleted: boolean;
    draftVersion: number | null;
    publishedVersion: string | null;
    type: string;
    _id: string;
    info: QuizDataInfo;
    createdBy: QuizCreatedByData;
    createdAt: string;
    updated: string | null;
    hasPublishedVersion: boolean;
    hasDraftVersion: boolean;
}
