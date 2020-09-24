import { QuizizzResponse } from "../typings/QuizizzResponse";

export default class Response {
    constructor(public response: QuizizzResponse, public status: number, public route: string) {}
}
