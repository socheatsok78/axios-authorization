import type { AxiosInstance } from 'axios'
import { CredentialsContainer } from './CredentialsContainer'
import { name } from '../package.json'

/**
 * useAuthorization
 * @param {AxiosInstance} axios
 */
export function useAuthorization(axios: AxiosInstance) {
    if (axios.credentials) {
        throw new Error(`[${name}] Failed to install plugin.`)
    }

    axios.credentials = new CredentialsContainer(axios)
}
