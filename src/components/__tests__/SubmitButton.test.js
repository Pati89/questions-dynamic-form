import SubmitButton from "../SubmitButton";
import { render, screen, fireEvent } from "@testing-library/react";

const props = {
  onClick: () => {},
};

describe("SubmitButton", () => {
  test("should render a SubmitButton", () => {
    render(<SubmitButton {...props} />);
    const button = screen.getByTestId("submit-button");
    expect(button).toBeTruthy();
  });

  test("should render default text", () => {
    render(<SubmitButton {...props} />);
    const buttonText = screen.getByText("Submit");
    expect(buttonText).toBeTruthy();
  });

  test("should render text", () => {
    render(<SubmitButton {...props} text="test" />);
    const buttonText = screen.getByText("test");
    expect(buttonText).toBeTruthy();
  });

  test("should disable the button", () => {
    render(<SubmitButton {...props} disabled />);
    const button = screen.getByTestId("submit-button");
    expect(button).toBeDisabled();
  });

  test("should trigger onClick function", () => {
    const spy = jest.fn();
    render(<SubmitButton onClick={spy} />);
    const button = screen.getByTestId("submit-button");
    fireEvent.click(button);
    expect(spy).toHaveBeenCalled();
  });

  test("should render a SubmitButton match snapshot", () => {
    render(<SubmitButton />);
    const button = screen.getByTestId("submit-button");
    expect(button).toMatchSnapshot();
  });
});
