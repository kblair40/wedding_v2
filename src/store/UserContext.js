import React, { createContext, useReducer } from "react";

const authReducer = (state, action) => {
  switch (action.type) {
    case "authenticate_passcode":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    authenticated: false,
    user: null,
  });

  return (
    <UserContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
