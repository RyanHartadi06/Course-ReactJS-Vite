import { forwardRef } from "react";
import Input from "./Input";
import Labels from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Labels htmlFor={name}>{title}</Labels>
      <Input type={type} name={name} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
