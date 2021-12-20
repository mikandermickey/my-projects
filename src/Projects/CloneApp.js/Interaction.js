/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostIcons from "./PostIcons";

const Interaction = () => {
  const wrapper = css`
    padding: 1em;
    color: #000;
    font-size: 14px;
    font-weight: bold;
  `;
  const interactionContainer = css`
    margin-top: 1em;
  `;
  const info = css`
    padding: 5px 0;
  `;

  const span = css`
    color: #8e8e8e;
    font-weight: normal;
    padding: 5px 0;
  `;

  const postDate = css`
    font-size: 10px;
    padding: 10px 0;
    color: #8e8e8e;
    font-weight: normal;
  `;
  return (
    <section css={wrapper}>
      <PostIcons />
      <div css={interactionContainer}>
        <p css={info}>2021 likes</p>
        <p css={info}>
          sportbible .... <span css={span}>more</span>
        </p>
        <span css={span}>View all 18 comments</span>
        <p css={postDate}>37 MINUTES AGO</p>
      </div>
    </section>
  );
};

export default Interaction;
