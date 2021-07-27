import { JSONTokenFormat } from "./Types/AuthorizationType";
export declare type BearerTokenOptions = {
    token: string;
    prefix?: string;
};
export declare class BearerToken {
    private token;
    private prefix;
    constructor(options: BearerTokenOptions);
    toJSON(): JSONTokenFormat<BearerTokenOptions>;
    toString(): string;
}
