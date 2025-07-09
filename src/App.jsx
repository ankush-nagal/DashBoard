import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { TaskDetail } from "./pages/TaskDetail";
import { Analytics } from "./pages/Analytics";
import { useAuth } from "./hooks/useAuth";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }
          />
          <Route
            path="/task/:id"
            element={
              <PrivateRoute>
                <TaskDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <PrivateRoute>
                <Analytics />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
