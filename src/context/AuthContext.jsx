import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check local storage on initial load
    const storedUser = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    };
    if (storedUser.email) {
      setUser(storedUser);
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
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
