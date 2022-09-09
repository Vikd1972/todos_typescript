import { createSelector } from "reselect";
import type { RootState } from './store'

const getShowFiltered = (state: RootState) => state.todo.showFiltered;
const getNotes = (state: RootState) => state.todo.notes

export const getShowNotes = createSelector(
  [getShowFiltered, getNotes],
  (showFiltered, notes) => {
    switch (showFiltered) {
      case "active":
        return notes.filter((note) => !note.isDone);
      case "completed":
        return notes.filter((note) => note.isDone);
      default:
        return notes;
    }
  }
);