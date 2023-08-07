import type { IToken, BasicTokenOptions, JSONTokenFormat } from "../Types";
export declare class BasicToken implements IToken {
    private username;
    private password;
    constructor(options: BasicTokenOptions);
    toJSON(): JSONTokenFormat<BasicTokenOptions>;
    toString(): string;
}
