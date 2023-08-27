import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const updateNumber = () => {
    setNumber(5);
  };
  const [number, setNumber] = useState(0);
  <button onClick={updateNumber} hidden>
    n
  </button>;
  return <AuthContext.Provider value={number}>{children}</AuthContext.Provider>;
}
