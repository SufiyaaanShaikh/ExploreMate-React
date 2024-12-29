import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage on initial load
    const storedUser = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    };
    if (storedUser.email) {
      setUser(storedUser);
      setIsLoggedIn(true); // Set logged-in status
    }
  }, []);

  const signup = (name, email, password) => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setUser({ name, email, password });
  };

  const login = (email, password) => {
    if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      setUser({ name: localStorage.getItem("name"), email, password });
      setIsLoggedIn(true); // User is logged in after successful login
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.clear(); // User is logged out
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
