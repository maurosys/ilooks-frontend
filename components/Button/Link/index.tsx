import { HTMLAttributes } from "react";
import styles from "./buttonLink.module.css";

interface ButtonPrimaryProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const ButtonLink = (props: ButtonPrimaryProps) => {
  const { children } = props;
  return (
    <button type="button" className={styles.button} {...props}>
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

export default ButtonLink;
