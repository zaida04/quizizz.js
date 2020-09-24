import { QuizCreatedByData } from "../typings/QuizCreatedByData";
import { QuizCreatedByGoogleData } from "../typings/QuizCreatedByGoogleData";
import { QuizCreatedByLocalData } from "../typings/QuizCreatedByLocalData";

/**
 * @class
 * @description Represents a User from the API
 */
export default class User {
    local: QuizCreatedByLocalData;
    google: QuizCreatedByGoogleData;
    student: string | null;
    deactivated: boolean;
    deleted: boolean;
    _id: string;
    firstName: string;
    lastName: string;
    media: string;
    occupation: string;
    country: string;
    id: string;

    /**
     * @constructor
     * @param {QuizCreatedByData}
     */
    constructor(data: QuizCreatedByData) {
        this.local = data.local;
        this.google = data.google;
        this.student = data.student;
        this.deactivated = data.deactivated;
        this.deleted = data.deleted;
        this._id = data._id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.media = data.media;
        this.occupation = data.occupation;
        this.country = data.country;
        this.id = data.id;
    }
}
