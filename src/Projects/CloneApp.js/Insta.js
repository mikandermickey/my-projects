/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import InstaHeader from "./InstaHeader";
import Stories from "./Stories";
import Posts from "./Posts";
import Interaction from "./Interaction";

const Insta = () => {
  const wrapper = css`
    width: 425px;
    margin: 0 auto;
    margin-top: 5%;
    background-color: #fff;
  `;

  return (
    <div css={wrapper}>
      <InstaHeader />
      <Stories />
      <Posts />
      <Interaction />
    </div>
  );
};

export default Insta;
