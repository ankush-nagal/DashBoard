// /tests/Counter.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "../components/Counter";

test("increments and decrements the counter", () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  const decrementButton = screen.getByText(/decrement/i);

  fireEvent.click(incrementButton);
  expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();

  fireEvent.click(decrementButton);
  expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
});
