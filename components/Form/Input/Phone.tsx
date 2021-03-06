import { HTMLAttributes } from "react";
import InputMasked from "react-input-mask";
import styles from "./styles.module.scss";

interface InputPhoneProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  errors?: any;
  maskFormat?: 8 | 9;
}

const InputPhone = (props: InputPhoneProps) => {
  const { label, placeholder, id, name, errors, maskFormat = 8 } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <InputMasked
        mask={maskFormat === 8 ? "(99) 9999-9999" : "(99) 99999-9999"}
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

export default InputPhone;
