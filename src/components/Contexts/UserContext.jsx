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
      //Session Storage Property
      sessionStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("isLoggedIn", true);

      if (data.role === "IBO") {
        navigate("/cabang");
      } else {
        navigate("/dashboard/daftar-civitas/murid");
        setCabangId(data.cabangId);
        setNamaCabang(data.cabangName);

        sessionStorage.setItem("cabangId", data.cabangId);
        sessionStorage.setItem("cabangName", data.cabangName);
      }
    } catch (error) {
      console.error("Error: ", error.response.data.message);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem(user)) {
      setUser(JSON.parse(sessionStorage.getItem(user)));
    }
  }, []);

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
