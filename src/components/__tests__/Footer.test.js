import Footer from "../Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  test("should render a Footer", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeTruthy();
    expect(screen.getByText("Developed by")).toBeTruthy();
    expect(screen.getByText("Patrycja Banaszczyk")).toBeTruthy();
  });

  test("should render a Footer match snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
