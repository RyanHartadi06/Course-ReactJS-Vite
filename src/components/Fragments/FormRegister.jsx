import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <form>
      <InputForm
        title="Fullname"
        name="fullname"
        type="text"
        placeholder="Ryan Hartadi"
        ref={nameRef}
      />
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
      <InputForm
        title="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="*****"
      />
      <Button classname="bg-blue-700  w-full">Register Now</Button>
    </form>
  );
};

export default FormRegister;
