import { QuizCreatedByGoogleData } from "./QuizCreatedByGoogleData";
import { QuizCreatedByLocalData } from "./QuizCreatedByLocalData";

export interface QuizCreatedByData {
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
}
