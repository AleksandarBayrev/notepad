import { NotesActions } from '../actions';
import { Redux, uuidV4 } from '../dependencies';
import { Note, NoteAddAction, NoteRemoveAction } from '../types';

export const notesReducer: Redux.Reducer<Note[], NoteAddAction<NotesActions> | NoteRemoveAction<NotesActions>> = (state = [], action) => {
    if (action.type === NotesActions.Add && 'note' in action.payload) {
        state.push({
            id: uuidV4(),
            note: action.payload.note,
            date: new Date()
        })
    }

    if (action.type === NotesActions.Remove && 'id' in action.payload) {
        const index = state.findIndex((note: Note) => 'id' in action.payload && note.id === action.payload.id)

        if (index !== -1) {
            state.splice(index, 1)
        }
    }

    if (action.type === NotesActions.Init) {
        state.splice(0)
    }

    return state
}