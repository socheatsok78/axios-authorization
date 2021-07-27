import { BasicToken } from "./BasicToken";
import { BearerToken } from "./BearerToken";
export declare class Token {
    static fromJSON(json: string): BasicToken | BearerToken;
}
