// /pages/TaskDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Task Detail</h2>
      <p className="text-gray-700">Viewing task ID: {id}</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Go Back
      </button>
    </div>
  );
};
