import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

export interface OptionSelectProps {
  label: string;
  value: string;
}

interface InputSelectProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  errors?: any;
  options: OptionSelectProps[];
}

const InputSelect = (props: InputSelectProps) => {
  const { label, placeholder, id, name, errors, options } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        {...props}
        className={`form-control ${errors && styles["input-error"]}`}
        id={id}
        name={name}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={`select${id}_${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors && errors.message ? (
        <p style={{ color: "red" }}>{errors.message}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputSelect;
