import { HTMLAttributes } from "react";

const ContainerCenterCol6 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <section className="login-area ptb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="login-content">{props.children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerCenterCol6;
