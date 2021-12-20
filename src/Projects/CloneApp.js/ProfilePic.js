/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ProfilePic = () => {
  const imageContainer = css`
    width: 66px;
    height: 66px;
    position: relative;
    border-radius: 50%;
    border: 2px solid #e7025a;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const image = css`
    object-fit: cover;
    width: 58px;
    height: 58px;
    border-radius: 50%;
  `;
  return (
    <div css={imageContainer}>
      <img css={image} src="/images/selfportrait.jpeg" alt="Mig" />
    </div>
  );
};

export default ProfilePic;
