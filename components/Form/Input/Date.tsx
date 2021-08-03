import { HTMLAttributes } from "react";
import InputMasked from "react-input-mask";

interface InputDateProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  errors?: any;
}

const InputDate = (props: InputDateProps) => {
  const { label, placeholder, id, name, errors } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <InputMasked
        mask="99/99/9999"
        {...props}
        type="text"
        className="form-control"
        placeholder={placeholder}
        id={id}
        name={name}
      />

      {errors && errors.message ? <p>{errors.message}</p> : <></>}
    </div>
  );
};

export default InputDate;
