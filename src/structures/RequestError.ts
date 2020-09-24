export default class RequestError extends Error {
    errCode: number;
    route: string;

    constructor({ msg, errCode, route }: { msg?: string; errCode: number; route: string }) {
        super(`${msg || errCode}\nCode: ${errCode}\n\Route: ${route}`);
        this.errCode = errCode;
        this.route = route;
    }
}
