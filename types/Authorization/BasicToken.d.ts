import { JSONTokenFormat } from './Types/AuthorizationType';
export declare type BasicTokenOptions = {
    username: string;
    password: string;
};
export declare class BasicToken {
    private username;
    private password;
    constructor(options: BasicTokenOptions);
    toJSON(): JSONTokenFormat<BasicTokenOptions>;
    toString(): string;
}
