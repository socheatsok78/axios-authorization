import { AxiosInstance } from 'axios'
import { AuthorizationType } from '../src/Authorization/Types/AuthorizationType'
declare module 'axios' {
  interface AxiosInstance {
    setAuthorization(token: AuthorizationType): void,
    unsetAuthorization(): void,
  }
}
