import Input from "./Input";
import Labels from "./Label";

const InputForm = (props) => {
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Labels htmlFor={name}>{title}</Labels>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
