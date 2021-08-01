import { HTMLAttributes } from "react";

interface InputEmailProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  errors?: any;
}

const InputEmail = (props: InputEmailProps) => {
  const {
    label = "E-mail",
    placeholder = "Digite seu e-mail",
    id = "email",
    name = "email",
    errors,
  } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...props}
        type="email"
        className="form-control"
        placeholder={placeholder}
        id={id}
        name={name}
      />

      {errors && errors.message ? <p>{errors.message}</p> : <></>}
    </div>
  );
};

export default InputEmail;
