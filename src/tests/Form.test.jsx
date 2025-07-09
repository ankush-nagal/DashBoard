// /tests/Form.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskForm } from "../components/TaskForm";

test("submits a new task with title and description", () => {
  const mockAdd = jest.fn();
  render(<TaskForm onAdd={mockAdd} />);

  fireEvent.change(screen.getByPlaceholderText(/task title/i), {
    target: { value: "Test Task" },
  });
  fireEvent.change(screen.getByPlaceholderText(/description/i), {
    target: { value: "Test Description" },
  });
  fireEvent.click(screen.getByText(/add task/i));

  expect(mockAdd).toHaveBeenCalledWith({
    title: "Test Task",
    description: "Test Description",
  });
});
