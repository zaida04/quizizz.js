import fetch from "node-fetch";
import Response from "./Response";

export default class RestManager {
    constructor() {
        throw new Error("This class is not instantiable");
    }
    static GET(url: string): Promise<Response> {
        return fetch(url).then(async (res) => {
            return new Response(await res.json(), res.status, url);
        });
    }
    static POST(url: string, data: Record<string, any>): Promise<Response> {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        }).then(async (res) => {
            return new Response(await res.json(), res.status, url);
        });
    }
}
