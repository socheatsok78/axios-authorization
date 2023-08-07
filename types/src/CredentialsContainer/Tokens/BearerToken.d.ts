import type { IToken, BearerTokenOptions, JSONTokenFormat } from "../Types";
export declare class BearerToken implements IToken {
    private token;
    private prefix;
    constructor(options: BearerTokenOptions);
    toJSON(): JSONTokenFormat<BearerTokenOptions>;
    toString(): string;
}
