import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface InputEmailProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string;
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
    <div className={classNames("form-group")}>
      <label>{label}</label>
      <input
        {...props}
        type="email"
        className={`form-control ${errors && styles["input-error"]}`}
        placeholder={placeholder}
        id={id}
        name={name}
      />

      {errors && errors.message ? (
        <p style={{ color: "red" }}>{errors.message}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputEmail;
