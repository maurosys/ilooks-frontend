import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputTextProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  errors?: any;
  maxlength?: any;
}

const InputText = (props: InputTextProps) => {
  const { label, placeholder, id, name, errors } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
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

export default InputText;
