const ButtonPrimary = (props) => {
  const { children } = props;

  return (
    <button
      className="btn btn-primary"
      {...props}
      disabled={props.loading ? true : false}
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
