import React, { createContext, useState } from "react";

// ✅ Create the context (DO NOT redefine this)
export const CaptainContext = createContext();

// ✅ Rename the component to "CaptainProvider"
export const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <CaptainContext.Provider value={{ captain, setCaptain, isLoading, setIsLoading, error, setError }}>
      {children}
    </CaptainContext.Provider>
  );
};
export default CaptainProvider;