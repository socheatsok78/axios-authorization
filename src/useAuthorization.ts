import { AxiosInstance } from 'axios'
import { AuthorizationType } from './Authorization/AuthorizationType'

export function setAuthorization(this: AxiosInstance, token: AuthorizationType) {
    this.defaults.headers.common.Authorization = token.toString()
}

export function unsetAuthorization(this: AxiosInstance) {
    delete this.defaults.headers.common.Authorization
}

/**
 * useAuthorization
 * @param {AxiosInstance} axiosInstance
 */
export function useAuthorization(axiosInstance: AxiosInstance) {
    if (!axiosInstance.setAuthorization) {
        axiosInstance.setAuthorization = setAuthorization
    }

    if (!axiosInstance.unsetAuthorization) {
        axiosInstance.unsetAuthorization = unsetAuthorization
    }
}
