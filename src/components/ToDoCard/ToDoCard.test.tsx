import { render, screen } from "@testing-library/react";
import { toDoMock } from "../../mocks/dataMock";
import ToDoCard from "./ToDoCard";

describe("Given ToDoCard component", () => {
  describe("When it receives a 'Walking the dog' to do list", () => {
    test("Then it should show 'Walking the dog' inside a heading ", () => {
      const expectHeadingTitle = "Walking the dog";

      render(<ToDoCard toDo={toDoMock} />);

      const toDoHeading = screen.getByRole("heading", {
        name: expectHeadingTitle,
      });

      expect(toDoHeading).toBeInTheDocument();
    });
  });
});
