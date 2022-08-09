import { fireEvent, render, screen } from "@testing-library/react";
import CreateNewToDo from "./CreateNewToDo";
describe("test CreateNewToDo component", () => {
  test("should render CreateNewToDo component by default", () => {
    render(<CreateNewToDo />); //renders in screen
    // screen.debug() // prints dom for dubugging purpose
    const headingText = screen.getByText(/create new task/i);
    const btnText = screen.getByText(/save/i);
    const btn = screen.getByRole("button");
    expect(headingText).toBeInTheDocument();
    expect(btnText).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
    expect(
      screen.getByRole("textbox", { name: /enter the task/i })
    ).toBeInTheDocument();
  });

  test("should handle input change in CreateNewToDo component", () => {
    render(<CreateNewToDo />); //renders in screen
    const inputNode = screen.getByRole("textbox");
    expect(inputNode.value).toBe(""); // by default input text shold be empty

    fireEvent.change(inputNode, { target: { value: "sunil" } });
    expect(inputNode.value).toBe("sunil");

    const btnEle = screen.getByText(/save/i);
    expect(btnEle).toBeEnabled();
  });

  test("should handle onSave button event", () => {
    render(<CreateNewToDo />);
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
    });

    const btnEle = screen.getByText(/save/i);
    fireEvent.click(btnEle);

    const inputEle = screen.getByLabelText(/enter the task/i);
    expect(inputEle.value).toBe("");

    expect(btnEle).toBeDisabled();
  });
});
