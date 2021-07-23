import Base64 from 'base-64'
import { TokenType } from "../TokenType";

export type BasicTokenOptions = {
    username: string
    password: string
}

export class BasicToken {
    private username: string;
    private password: string;

    constructor(options: BasicTokenOptions) {
        this.username = options.username
        this.password = options.password
    }

    toString() {
        const payload = `${this.username}:${this.password}`
        const token = Base64.encode(payload)
        return `${TokenType.Basic} ${token}`
    }
}
