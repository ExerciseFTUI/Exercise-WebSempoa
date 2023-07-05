import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const URL = import.meta.env.VITE_API_URL;

  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [cabangId, setCabangId] = useState();
  const [namaCabang, setNamaCabang] = useState("Cabang Sempoa");

  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const { data } = await axios.post(`${URL}/auth/login`, {
        username: username,
        password: password,
      });
      const user = data;
      setUser(user);
      setIsLoggedIn(true);

      if (data.role === "IBO") {
        navigate("/cabang");
      } else {
        navigate("/dashboard/daftar-murid");
        setCabangId(data.cabangId);
      }
    } catch (error) {
      console.error("Error: ", error.response.data.message);
    }
  };

  const value = {
    user,
    isLoggedIn,
    cabangId,
    setCabangId,
    login,
    namaCabang,
    setNamaCabang,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
