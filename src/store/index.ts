import { Redux } from '../dependencies'
import { notesReducer } from '../reducer'
import { Note } from '../types'

export type NotesStore = Redux.Store<Note[]>
export const Store: NotesStore = Redux.createStore(notesReducer)