import { BasicToken } from "../BasicToken";
import { BearerToken } from "../BearerToken";
export declare type AuthorizationType = BasicToken | BearerToken;
export declare type JSONTokenFormat<T> = {
    type: string;
    data: T;
};
