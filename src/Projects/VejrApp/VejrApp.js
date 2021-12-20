/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Vejret from "./Vejret";

const wrapper = css`
  margin: 0 auto;
  width: 100%;
  margin-top: 15%;
`;
const VejrApp = () => {
  return (
    <div css={wrapper}>
      <Vejret />
    </div>
  );
};

export default VejrApp;
