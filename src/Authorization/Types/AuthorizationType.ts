import { BasicToken } from "../BasicToken";
import { BearerToken } from "../BearerToken";

export type AuthorizationType = BasicToken | BearerToken

export type JSONTokenFormat<T> = {
    type: string,
    data: T
}
