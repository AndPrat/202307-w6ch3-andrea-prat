import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { toDosListMock } from "../../mocks/dataMock";
import { setupStore } from "../../store";
import ToDosList from "./ToDosList";

describe("Given a ToDosList component", () => {
  describe("When it is rendered with the to do 'Walking the dog', 'Iron the clothes', 'Sweeping the floor', 'Collect the tuppers with the food of the week' and 'Go to pass the ITV of the car the floor', '", () => {
    test("Then it should show the to do  'Walking the dog', 'Iron the clothes', 'Sweeping the floor', 'Collect the tuppers with the food of the week' and 'Go to pass the ITV of the car the floor' inside heading  ", () => {
      const store = setupStore({
        toDoState: {
          toDos: toDosListMock,
        },
      });
      render(
        <Provider store={store}>
          <ToDosList />
        </Provider>,
      );

      toDosListMock.forEach((toDo) => {
        const expectToDoHeadings = screen.getByRole("heading", {
          name: toDo.name,
        });
        expect(expectToDoHeadings).toBeInTheDocument();
      });
    });
  });
});
