export declare type BearerTokenOptions = {
    token: string;
};
export declare class BearerToken {
    private token;
    constructor(options: BearerTokenOptions);
    toString(): string;
}
