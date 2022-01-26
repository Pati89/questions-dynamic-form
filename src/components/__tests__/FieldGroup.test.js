import FieldGroup from "../FieldGroup";
import { render, screen } from "@testing-library/react";

const props = {
  values: {},
  title: "Test title",
  fields: [
    { name: "test1", label: "Test 1", type: "text" },
    { name: "test2", label: "Test 2", type: "text" },
    {
      name: "test3",
      label: "Test 3",
      type: "dropdown",
      options: ["Option 1", "Option 2"],
    },
  ],
};

describe("FieldGroup", () => {
  test("should render a FieldGroup", () => {
    render(<FieldGroup {...props} />);
    const fieldGroup = screen.getByTestId("field-group");
    expect(fieldGroup).toBeTruthy();
  });

  test("should render a title", () => {
    render(<FieldGroup {...props} />);
    const fieldGroup = screen.getByTestId("field-group");
    expect(fieldGroup).toHaveTextContent("Test title");
  });

  test("should render text fields", () => {
    render(<FieldGroup {...props} />);
    const input = screen.getAllByTestId("input");
    expect(input).toHaveLength(2);
  });

  test("should render select field", () => {
    render(<FieldGroup {...props} />);
    const select = screen.getAllByTestId("select");
    expect(select).toHaveLength(1);
  });

  test("should render select options", () => {
    render(<FieldGroup {...props} />);
    const selectOption = screen.getAllByTestId("select-option");
    expect(selectOption).toHaveLength(3);
  });

  test("should render a FieldGroup match snapshot", () => {
    render(<FieldGroup {...props} />);
    const fieldGroup = screen.getByTestId("field-group");
    expect(fieldGroup).toMatchSnapshot();
  });
});
