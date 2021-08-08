import { NotesActions } from "../actions";
import { NotesStore } from "../store";
import { Note, UITools } from "../types";

const noteMapper = (note: Note) => `ID: ${note.id}, Note: ${note.note}, Date: ${note.date}`

const AddNote = (note: string, Store: NotesStore) => {
    Store.dispatch({
        type: NotesActions.Add, payload: {
            note
        }
    })
}
const RemoveNote = (id: string, Store: NotesStore) => {
    Store.dispatch({
        type: NotesActions.Remove, payload: {
            id
        }
    })
}

const UpdateNotes = (id: string, Store: NotesStore) => {
    const element = document.getElementById(id)
    element && (element.innerHTML = Store.getState().map(noteMapper).join('<br />'))
}

export const UI: UITools = {
    AddNote,
    RemoveNote,
    UpdateNotes
}