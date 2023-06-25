import { useEffect, useState } from "react";
import { getUsername } from "../services/login.service";

const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/";
    setUsername(getUsername(token));
  }, []);

  return username;
};

export default useLogin;
