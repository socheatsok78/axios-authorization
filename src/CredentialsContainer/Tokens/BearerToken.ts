import { TokenType } from "../Enums";
import { IToken, BearerTokenOptions, JSONTokenFormat } from "../Types";

export class BearerToken implements IToken {
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
