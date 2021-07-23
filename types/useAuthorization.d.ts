import { AxiosInstance } from 'axios';
import { AuthorizationType } from './Authorization/AuthorizationType';
export declare function setAuthorization(this: AxiosInstance, token: AuthorizationType): void;
export declare function unsetAuthorization(this: AxiosInstance): void;
/**
 * useAuthorization
 * @param {AxiosInstance} axiosInstance
 */
export declare function useAuthorization(axiosInstance: AxiosInstance): void;
