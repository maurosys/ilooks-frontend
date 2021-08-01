import { HTMLAttributes } from "react";

const Form = (props: HTMLAttributes<HTMLFormElement>) => {
  return (
    <form className="login-form" {...props}>
      {props.children}
    </form>
  );
};

export default Form;
