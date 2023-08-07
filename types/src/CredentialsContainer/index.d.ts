import type { AxiosInstance } from "axios";
import type { AuthorizationCreationType, AuthorizationTypeMap, IToken } from "./Types";
import { BasicToken } from "./Tokens/BasicToken";
import { BearerToken } from "./Tokens/BearerToken";
export declare class CredentialsContainer {
    private context;
    constructor(axios: AxiosInstance);
    private get httpHeaders();
    create<T extends AuthorizationCreationType>(type: T, data: AuthorizationTypeMap[T]): BasicToken | BearerToken;
    store(token: IToken): void;
    clear(): void;
}
