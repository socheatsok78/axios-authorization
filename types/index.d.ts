import { AxiosInstance } from 'axios';
import './axios'

export declare const TokenType: {
    Basic: string;
    Bearer: string;
};
/**
 * useAuthorization
 * @param {AxiosInstance} axiosInstance
 */
export default function useAuthorization(axiosInstance: AxiosInstance): void;
