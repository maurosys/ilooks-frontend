import { HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./buttonSecondary.module.css";

interface ButtonSecondaryProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button" | "reset";
  loading?: boolean;
  disabled?: boolean;
  classNameOptional?: any;
}

const ButtonSecondary = (props: ButtonSecondaryProps) => {
  const { children, type = "button", disabled, classNameOptional } = props;

  return (
    <button
      className={classnames(styles.button, "btn", classNameOptional)}
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

export default ButtonSecondary;
