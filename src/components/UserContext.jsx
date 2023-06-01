import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const { data } = await axios.post(`http://localhost:5000/auth/login`, {
        username: username,
        password: password,
      });
      const user = data.data;
      setUser(user);
      setIsLoggedIn(true);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error: ", error.response.data.message);
    }
  };

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    login,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
