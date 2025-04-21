import React, { createContext, useState } from "react";

// ✅ Create the context
export const UserContext = createContext();

// ✅ Ensure UserProvider is defined and exported
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, error, setError }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
