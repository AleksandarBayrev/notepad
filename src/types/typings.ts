import { NotesStore } from "../store"

export interface IClient {
    add: () => void
}

export type Note = {
    id: string
    note: string
    date: Date
}

export type NoteAddAction<IAction> = {
    type: IAction
    payload: Pick<Note, 'note'>
}

export type NoteRemoveAction<IAction> = {
    type: IAction
    payload: Pick<Note, 'id'>
}

export type UITools = {
    AddNote: (message: string, store: NotesStore) => void
    RemoveNote: (id: string, store: NotesStore) => void
    UpdateNotes: (id: string, store: NotesStore) => void
}