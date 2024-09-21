import axios from "axios";
import React, { createContext, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

export const authContext = createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      setUser(userInfo);
    },
  });

  const logout = () => {
    googleLogout();
    setUser("");
  };

  return (
    <authContext.Provider value={{ login, logout, user }}>
      {children}
    </authContext.Provider>
  );
};
