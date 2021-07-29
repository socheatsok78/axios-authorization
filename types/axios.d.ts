import { AxiosInstance } from 'axios'
import { CredentialsContainer } from '../src/CredentialsContainer'

declare module 'axios' {
  interface AxiosInstance {
    credentials: CredentialsContainer
  }
}
