import { Data } from "./typings";

export interface QuizizzResponse {
    success: boolean;
    message?: string;
    data?: Data;
    meta?: {
        service: string;
        version: string;
    };
}
