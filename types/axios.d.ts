import { AxiosInstance } from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    setAuthorization(token: string, type: string): void,
    unsetAuthorization(): void,
  }
}
