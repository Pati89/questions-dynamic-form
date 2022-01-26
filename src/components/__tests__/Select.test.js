import Select from "../Select";
import { render, screen } from "@testing-library/react";

const props = {
  field: {
    name: "test_field",
    label: "Test Select Field",
    type: "dropdown",
    options: ["Option1", "Option2", "Option3"],
  },
};

describe("Select", () => {
  test("should render a Select", () => {
    render(<Select {...props} />);
    const select = screen.getByTestId("select");
    expect(select).toBeTruthy();
    expect(select).toHaveTextContent("Test Select Field");
  });

  test("should pass name prop", () => {
    render(<Select {...props} />);
    const selectField = screen.getByTestId("select-field");
    expect(selectField).toBeTruthy();
    expect(selectField).toHaveProperty("name", "test_field");
  });

  test("should render options", () => {
    render(<Select {...props} />);
    const selectOption = screen.getAllByTestId("select-option");
    expect(selectOption).toHaveLength(4);
  });

  test("should render a Select match snapshot", () => {
    render(<Select {...props} />);
    const select = screen.getByTestId("select");
    expect(select).toMatchSnapshot();
  });
});
