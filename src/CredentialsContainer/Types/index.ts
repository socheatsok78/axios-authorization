export type AuthorizationCreationType = 'Basic' | 'Bearer'

export type BasicTokenOptions = {
    username: string
    password: string
}

export type BearerTokenOptions = {
    token: string,
    prefix?: string
}

export type AuthorizationTypeMap = {
  Basic: BasicTokenOptions
  Bearer: BearerTokenOptions
}

export type JSONTokenFormat<T> = {
    type: string,
    data: T
}

export interface IToken {
    toJSON(): JSONTokenFormat<any>
    toString(): string
}
