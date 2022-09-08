import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from './store'

interface Notes {
  id: string,
  text: string,
  isDone: boolean
}

interface TodoState {
  notes: Array<Notes>,
  isDoneAll: boolean,
  showFiltered: string
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
    addNewNote: (state, action) => {     
      state.notes.push(action.payload)
    },

    deleteNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload
      );
      state.notes.splice(index, 1);
    },

    noteIsDone: (state, action) => {
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

    changeNote: (state, action) => {
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

    selectShowFiltered: (state, action) => {
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

export const selectTodo = (state: RootState) => state.todo

export default todoSlice.reducer