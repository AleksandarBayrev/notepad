import { IClient } from './typings'

declare global {
    interface Window {
        Client: IClient
    }
}