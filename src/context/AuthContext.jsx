// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) setCurrentUser(JSON.parse(saved));
  }, []);

  const signin = async (creds) => {
    // call your signin API, get back user object, token, etc.
    const user = response.data; 
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const signout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ currentUser, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
