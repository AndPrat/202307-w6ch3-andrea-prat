import { toDosListMock } from "../../mocks/dataMock";
import {
  deleteToDoActionCreator,
  loadToDosActionCreator,
  toDosReducer,
} from "./toDosSlice";
import { ToDoState } from "./types";

describe("Given a toDosReducer", () => {
  describe("When it receives a loadToDos reducer", () => {
    test("Then it should return a new state with the received two toDos", () => {
      const currentToDosState: ToDoState = { toDos: [] };

      const loadToDosAction = loadToDosActionCreator(toDosListMock);

      const newToDosState = toDosReducer(currentToDosState, loadToDosAction);

      expect(newToDosState).toHaveProperty("toDos", toDosListMock);
    });
  });

  describe("When it recives a deleteToDo reducer", () => {
    test("Then it should return a new state without the toDo task with number id 3 ", () => {
      const currentToDosState: ToDoState = { toDos: toDosListMock };
      const toDoToDeleteId = 3;

      const deleteToDoAction = deleteToDoActionCreator(toDoToDeleteId);

      const newToDosState = toDosReducer(currentToDosState, deleteToDoAction);

      const toDoToDelete = currentToDosState.toDos.find(
        ({ id }) => id === toDoToDeleteId,
      );

      expect(newToDosState).not.toContain(toDoToDelete);
    });
  });
});
