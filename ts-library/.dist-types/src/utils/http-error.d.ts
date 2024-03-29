export declare enum HTTPErrorKind {
    Information = 100,
    Success = 200,
    Redirect = 300,
    Client = 400,
    Server = 500
}
/** @param {HTTPErrorKind} kind */
export default class HTTPError extends Error {
    kind: HTTPErrorKind;
    /**
     *
     * @param info
     * @param message
     */
    constructor(info: Response, message: string);
}
