// /components/TaskForm.jsx
import React, { useState } from "react";

export const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-green-300 p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Add New Task</h2>
      <input
        className="w-full p-2 border rounded"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded">Add Task</button>
    </form>
  );
};
