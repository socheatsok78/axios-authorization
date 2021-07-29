import { BasicToken } from "./BasicToken";
import { BearerToken } from "./BearerToken";
export declare const TokenTypeMapper: {
    [x: string]: typeof BasicToken | typeof BearerToken;
};
export declare class Token {
    static fromJSON(json: string): BasicToken | BearerToken;
}
