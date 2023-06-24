import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        title="Email"
        name="email"
        type="email"
        placeholder="example@com"
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
    </form>
  );
};

export default FormLogin;
