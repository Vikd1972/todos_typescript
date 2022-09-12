import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import type { RootState } from './store'

export interface Notes {
  id: string,
  text: string,
  isDone: boolean
}
type FilterTypes = 'all' | 'completed' | 'active';
interface TodoState {
  notes: Notes[],
  isDoneAll: boolean,
  showFiltered: FilterTypes
}

const initialState: TodoState = {
    notes: [],
    isDoneAll: false,
    showFiltered: 'all',
} 

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewNote: (state, action: PayloadAction<Notes>) => {     
      state.notes.push(action.payload)
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload
      );
      state.notes.splice(index, 1);
    },

    noteIsDone: (state, action: PayloadAction<string>) => {
      for (let note of state.notes) {
        if (note.id === action.payload) {
          note.isDone = !note.isDone;
        }
      }      
    },

    allIsDone: state => {
      for (let note of state.notes) {        
        note.isDone = !state.isDoneAll;        
      }       
      state.isDoneAll = !state.isDoneAll
    },

    changeNote: (state, action: PayloadAction<{ id: string;  text: string}>) => {
      for (let note of state.notes) {
        if (note.id === action.payload.id) {
          note.text = action.payload.text;
        }
      }  
    },

    clearCompleted: state => {
      return {
        ...state,
        notes: state.notes.filter((note) => note.isDone === false)
      }
    },

    selectShowFiltered: (state, action: PayloadAction<FilterTypes>) => {
      state.showFiltered = action.payload
    }
  }
})

export const {
  addNewNote,
  deleteNote,
  noteIsDone,
  allIsDone,
  changeNote,
  clearCompleted,
  selectShowFiltered
} = todoSlice.actions

export default todoSlice.reducer