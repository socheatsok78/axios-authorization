import { AxiosInstance } from 'axios'

export const TokenType = {
    Basic: 'Basic',
    Bearer: 'Bearer'
}

/**
 * useAuthorization
 * @param {AxiosInstance} axiosInstance
 */
export default function useAuthorization(axiosInstance: AxiosInstance) {
    if (!axiosInstance.setAuthorization) {
        axiosInstance.setAuthorization = function (token, type = TokenType.Bearer) {
            this.defaults.headers.common.Authorization = `${type} ${token}`
        }
    }

    if (!axiosInstance.unsetAuthorization) {
        axiosInstance.unsetAuthorization = function () {
            delete this.defaults.headers.common.Authorization
        }
    }

}
