import { TokenType } from "../TokenType";

export type BearerTokenOptions = {
    token: string
}

export class BearerToken {
    private token: string;

    constructor(options: BearerTokenOptions) {
        this.token = options.token
    }

    toString() {
        return `${TokenType.Bearer} ${this.token}`
    }
}
