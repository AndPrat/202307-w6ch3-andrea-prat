import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../../types";
import { ToDosState } from "./types";

const initialToDosState: ToDosState = {
  toDos: [],
};

const toDosSlice = createSlice({
  name: "toDos",
  initialState: initialToDosState,
  reducers: {
    loadToDos: (
      _currentToDosState,
      action: PayloadAction<ToDo[]>,
    ): ToDosState => ({
      toDos: action.payload,
    }),
    deleteToDo: (
      currentToDosState,
      action: PayloadAction<number>,
    ): ToDosState => ({
      toDos: currentToDosState.toDos.filter(
        (toDo) => toDo.id !== action.payload,
      ),
    }),
    addToDo: (currentToDosState, action: PayloadAction<ToDo>): ToDosState => ({
      ...currentToDosState,
      toDos: [...currentToDosState.toDos, action.payload],
    }),
  },
});

export const toDosReducer = toDosSlice.reducer;
export const {
  loadToDos: loadToDosActionCreator,
  deleteToDo: deleteToDoActionCreator,
  addToDo: addToDosActionCreator,
} = toDosSlice.actions;
