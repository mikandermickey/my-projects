/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Posts = () => {
  const wrapper = css`
    color: black;
  `;
  const container = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 115px;
  `;
  const postsHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 12px;
  `;
  const accountName = css`
    font-size: 14px;
    font-weight: 500;
  `;
  const imageContainer = css`
    width: 42px;
    height: 42px;
    position: relative;
    border-radius: 50%;
    border: 2px solid #e7025a;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const image = css`
    object-fit: cover;
    width: 34px;
    height: 34px;
    border-radius: 50%;
  `;
  const icon = css`
    font-size: 14px;
  `;
  const postImage = css`
    display: block;
  `;

  return (
    <article css={wrapper}>
      <div css={postsHeader}>
        <div css={container}>
          <div css={imageContainer}>
            <img css={image} src="/images/selfportrait.jpeg" alt="Mig" />
          </div>
          <h2 css={accountName}>sportbible</h2>
        </div>
        <i css={icon} className="fas fa-ellipsis-h"></i>
      </div>
      <div css={postImage}>
        <img src="/images/post1.webp" alt="Eggs and honey" />
      </div>
    </article>
  );
};

export default Posts;
