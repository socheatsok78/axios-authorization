import { TokenType } from "../TokenType";
import { BasicToken } from "./BasicToken";
import { BearerToken } from "./BearerToken";
import { JSONTokenFormat } from "./Types/AuthorizationType";

const TokenTypeMapper = {
    [TokenType.Basic]: BasicToken,
    [TokenType.Bearer]: BearerToken
}

export class Token {
    public static fromJSON(json: string) {
        const meta: JSONTokenFormat<any> = JSON.parse(json)

        if (!(meta.type in TokenTypeMapper)) {
            throw new Error(`[Token] Invalid token type: ${meta.type}.`)
        }

        const Tken = TokenTypeMapper[meta.type]
        return new Tken(meta.data)
    }
}
