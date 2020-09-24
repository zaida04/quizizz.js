import Response from "./rest/Response";
import RestManager from "./rest/RestManager";
import Quiz from "./structures/Quiz";
import RequestError from "./structures/RequestError";
import { QuizID } from "./typings/typings";

/**
 * @description The Client object with API interaction methods
 * @class
 */
export default class QuizizzClient {
    private apiURL: string;

    /**
     * @constructor
     */
    constructor(options?: QuizizzClientOptions) {
        this.apiURL = options?.apiURL || "https://quizizz.com";
    }

    /**
     * @description Fetch a Quiz from the API
     * @param {QuizID} id ID of the quiz to fetch
     * @returns {Promise<Quiz>}
     */
    async fetchQuiz(id: QuizID): Promise<Quiz> {
        const route = `${this.apiURL}/quiz/${id}`;
        const APIResponse: Response = await RestManager.GET(route);

        if (!APIResponse.response || !APIResponse.response.data || APIResponse.status !== 200)
            throw new RequestError({ msg: APIResponse.response?.message, errCode: APIResponse.status, route: route });

        return new Quiz(APIResponse.response.data);
    }
}

export interface QuizizzClientOptions {
    apiURL?: string | null;
}
