import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { AuthorizationCreationType, AuthorizationTypeMap, IToken } from "./Types";
import { BasicToken } from "./Tokens/BasicToken";
import { BearerToken } from "./Tokens/BearerToken";
import { Token } from "./Tokens/Token";

export class CredentialsContainer {
    private context: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.context = axios
    }

    private get httpHeaders(): Pick<AxiosRequestConfig, 'headers'> | any {
        return this.context.defaults.headers
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
