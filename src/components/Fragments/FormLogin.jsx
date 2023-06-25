import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/login.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        title="Username"
        name="username"
        type="username"
        placeholder="Jhoe Doe"
        ref={usernameRef}
      />
      <InputForm
        title="Password"
        name="password"
        type="password"
        placeholder="*****"
      />
      <Button classname="bg-blue-700  w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-center text-red-600 mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
