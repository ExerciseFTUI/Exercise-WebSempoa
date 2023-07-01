import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [cabangId, setCabangId] = useState();

  const navigate = useNavigate();

  const value = {
    user,
    isLoggedIn,
    cabangId,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
