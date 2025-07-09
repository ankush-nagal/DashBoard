import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // ✅ Load from localStorage if exists
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = ({ username, lastname }) => {
    const userData = { username, lastname };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ Save to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // ✅ Remove from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
