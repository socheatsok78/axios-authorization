import { JSONTokenFormat } from "./Types/AuthorizationType";
import { TokenType } from "../TokenType";

export type BearerTokenOptions = {
    token: string,
    prefix?: string
}

export class BearerToken {
    private token: string;
    private prefix: string = TokenType.Bearer;

    constructor(options: BearerTokenOptions) {
        this.token = options.token
    }

    toJSON(): JSONTokenFormat<BearerTokenOptions> {
        return {
            type: TokenType.Basic,
            data: {
                token: this.token,
                prefix: this.prefix
            }
        }
    }

    toString() {
        return `${this.prefix} ${this.token}`
    }
}
