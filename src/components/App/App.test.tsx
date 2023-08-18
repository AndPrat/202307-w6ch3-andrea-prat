import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the headiny 'To Do list'", () => {
      const expectHeadingTitle = "To Do list";

      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      const headingTitle = screen.getByRole("heading", {
        name: expectHeadingTitle,
      });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
