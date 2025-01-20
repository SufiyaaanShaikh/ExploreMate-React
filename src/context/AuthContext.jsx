import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [following, setFollowing] = useState({}); // Track following state
  const [isFormDirty, setIsFormDirty] = useState(false); // Track form modification
  useEffect(() => {
    // Load user and following data from localStorage
    const storedUser = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    };
    const storedFollowing = JSON.parse(localStorage.getItem("following")) || {};

    if (storedUser.email) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
    setFollowing(storedFollowing);
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
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    setFollowing({});
  };

  const toggleFollow = (userId) => {
    const isFollowing = following[userId] || false;
    const updatedFollowing = { ...following, [userId]: !isFollowing };
    setFollowing(updatedFollowing);
    localStorage.setItem("following", JSON.stringify(updatedFollowing));
    return !isFollowing; // Return the updated follow state
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        signup,
        login,
        logout,
        following,
        toggleFollow,
        isFormDirty,
        setIsFormDirty,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
