import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const handleAuthenticated = (userObject) => {
    // console.log("USER OBJECT:", userObject);
    setUser(userObject);
  };

  return (
    <UserContext.Provider value={{ user, handleAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
