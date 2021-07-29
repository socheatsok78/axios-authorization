import { AxiosInstance } from "axios";
import { BasicToken } from "./Tokens/BasicToken";
import { BearerToken } from "./Tokens/BearerToken";
import { AuthorizationCreationType, AuthorizationTypeMap, IToken } from "./Types";
export declare class CredentialsContainer {
    private context;
    private httpHeaders;
    constructor(axios: AxiosInstance);
    create<T extends AuthorizationCreationType>(type: T, data: AuthorizationTypeMap[T]): BasicToken | BearerToken;
    store(token: IToken): void;
    clear(): void;
}
