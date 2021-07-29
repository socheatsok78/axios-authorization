import { AxiosInstance, AxiosRequestConfig } from "axios";
import { BasicToken } from "./Tokens/BasicToken";
import { BearerToken } from "./Tokens/BearerToken";
import { Token } from "./Tokens/Token";
import { AuthorizationCreationType, AuthorizationTypeMap, IToken } from "./Types";

export class CredentialsContainer {
    private context: AxiosInstance
    private httpHeaders: Pick<AxiosRequestConfig, 'headers'> | any

    constructor(axios: AxiosInstance) {
        this.context = axios
        this.httpHeaders = this.context.defaults.headers
    }

    public create<T extends AuthorizationCreationType>(type: T, data: AuthorizationTypeMap[T]) {
        const payload = JSON.stringify({ type, data })
        return Token.fromJSON(payload)
    }

    public store(token: IToken) {
        this.httpHeaders.common.Authorization = String(token)
    }

    public clear() {
        if ('Authorization' in this.httpHeaders.common) {
            delete this.httpHeaders.common.Authorization
        }
    }
}
