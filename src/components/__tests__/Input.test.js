import Input from "../Input";
import { render, screen } from "@testing-library/react";

const props = {
  field: { name: "test_field", label: "Test Field", type: "text" },
};

describe("Input", () => {
  test("should render a Input", () => {
    render(<Input {...props} />);
    const input = screen.getByTestId("input");
    expect(input).toBeTruthy();
    expect(input).toHaveTextContent("Test Field");
  });

  test("should pass name prop", () => {
    render(<Input {...props} />);
    const inputField = screen.getByTestId("input-field");
    expect(inputField).toBeTruthy();
    expect(inputField).toHaveProperty("name", "test_field");
  });

  test("should render a Input match snapshot", () => {
    render(<Input {...props} />);
    const input = screen.getByTestId("input");
    expect(input).toMatchSnapshot();
  });
});
