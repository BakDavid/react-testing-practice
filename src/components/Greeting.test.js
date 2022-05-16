import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act  here is nothing

    // Assert
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders it's good to see you without button click", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed if button was clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("check if it's good to see you is not visible when button clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.queryByText("good to see you!", {exact:false});
    expect(outputElement).toBeNull();
  });
});
