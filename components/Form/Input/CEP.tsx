import { HTMLAttributes } from "react";
import InputMasked from "react-input-mask";

import styles from "./styles.module.scss";

interface InputCEPProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  errors?: any;
}

const InputCEP = (props: InputCEPProps) => {
  const { label, placeholder, id, name, errors } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <InputMasked
        mask="99999-999"
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

export default InputCEP;
