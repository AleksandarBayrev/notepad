import { IClient, UITools } from './typings'
import { NotesActions } from '../actions'
import { NotesStore } from '../store'

declare global {
    interface Window {
        Client: IClient
        Store: NotesStore
        Actions: typeof NotesActions
        UI: UITools
    }
}