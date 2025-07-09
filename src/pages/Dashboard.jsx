// /pages/Dashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { TaskForm } from "../components/TaskForm";

export const Dashboard = () => {
  const { logout, user } = useAuth();
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now() }]);
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editData, setEditData] = useState({ title: "", description: "" });



  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto bg-blue-400 mt-30 border-4 ">
      <header className="flex justify-between items-center bg-green-400">
        <h1 className="text-3xl font-bold p-2">Welcome, {user.username}</h1>
        <button onClick={logout} className="bg-red-500 px-4 py-2  text-white rounded m-2">
          Logout
        </button>
      </header>

      <TaskForm onAdd={addTask} />

      <div className="grid gap-4">
       {tasks.map((task) => (
  <div key={task.id} className="bg-white p-4 rounded shadow">
    {editingTaskId === task.id ? (
      <div>
        <input
          className="w-full border p-2 mb-2"
          value={editData.title}
          onChange={(e) =>
            setEditData({ ...editData, title: e.target.value })
          }
        />
        <textarea
          className="w-full border p-2"
          value={editData.description}
          onChange={(e) =>
            setEditData({ ...editData, description: e.target.value })
          }
        />
        <div className="mt-2 space-x-2">
          <button
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={() => {
              const updatedTasks = tasks.map((t) =>
                t.id === task.id ? { ...t, ...editData } : t
              );
              setTasks(updatedTasks);
              setEditingTaskId(null);
            }}
          >
            Save
          </button>
          <button
            className="bg-gray-400 text-white px-3 py-1 rounded"
            onClick={() => setEditingTaskId(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    ) : (
      <div>
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p className="text-gray-700">{task.description}</p>
        <div className="mt-2 space-x-2">
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={() => navigate(`/task/${task.id}`)}
          >
            View
          </button>
          <button
            className="bg-yellow-500 text-white px-3 py-1 rounded"
            onClick={() => {
              setEditingTaskId(task.id);
              setEditData({
                title: task.title,
                description: task.description,
              });
            }}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white px-3 py-1 rounded"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    )}
  </div>
))}

      </div>
      <span><Link to="/analytics" className="block text-center mt-6 text-white underline ">
        Go to Analytics
      </Link></span>

    </div>
  );
};
