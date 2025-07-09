// /pages/Analytics.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Counter } from "../components/Counter";

export const Analytics = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 border-4 mt-45 bg-blue-400">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <p className="text-gray-700">Example counter component below (tested):</p>
      <Counter />

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Dashboard
      </button>
    </div>
  );
};
