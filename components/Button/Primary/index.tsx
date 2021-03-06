import { HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./buttonPrimary.module.css";

interface ButtonPrimaryProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button" | "reset";
  loading?: boolean;
  disabled?: boolean;
  classNameOptional?: any;
}

const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { children, type = "button", disabled, classNameOptional } = props;

  return (
    <button
      className={classnames(
        styles.button,
        "btn",
        "btn-primary",
        classNameOptional
      )}
      type={type}
      {...props}
      disabled={disabled || props.loading ? true : false}
    >
      {props.loading ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>{" "}
        </>
      ) : (
        <></>
      )}
      {children}
    </button>
  );
};

export default ButtonPrimary;
