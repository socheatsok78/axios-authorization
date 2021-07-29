export declare type AuthorizationCreationType = 'Basic' | 'Bearer';
export declare type BasicTokenOptions = {
    username: string;
    password: string;
};
export declare type BearerTokenOptions = {
    token: string;
    prefix?: string;
};
export declare type AuthorizationTypeMap = {
    Basic: BasicTokenOptions;
    Bearer: BearerTokenOptions;
};
export declare type JSONTokenFormat<T> = {
    type: string;
    data: T;
};
export interface IToken {
    toJSON(): JSONTokenFormat<any>;
    toString(): string;
}
