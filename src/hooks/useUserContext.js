import React, { useContext } from "react";
import UserContext from "store/Usercontext";

const useUserContext = () => {
  // get the context
  const context = useContext(UserContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }

  return context;
};

export default useUserContext;
