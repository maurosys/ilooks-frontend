import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #222;
`;

interface SpinnerProps {
  loading?: boolean;
}
const Spinner = ({ loading = false }: SpinnerProps) => {
  return (
    <ClipLoader color={"#222"} loading={loading} css={override} size={150} />
  );
};

export default Spinner;
