import { HTMLAttributes } from "react";
import InputMasked from "react-input-mask";

import styles from "./styles.module.scss";

interface InputCPFProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  errors?: any;
}

const InputCPF = (props: InputCPFProps) => {
  const { label, placeholder, id, name, errors } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <InputMasked
        mask="999.999.999-99"
        {...props}
        type="text"
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

export default InputCPF;
