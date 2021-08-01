import { HTMLAttributes } from "react";

interface InputPasswordProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  errors?: any;
}

const InputPassword = (props: InputPasswordProps) => {
  const {
    label = "Senha",
    placeholder = "Digite sua senha",
    id = "password",
    name = "password",
    errors,
  } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...props}
        type="password"
        className="form-control"
        placeholder={placeholder}
        id={id}
        name={name}
      />

      {errors && errors.message ? <p>{errors.message}</p> : <></>}
    </div>
  );
};

export default InputPassword;
