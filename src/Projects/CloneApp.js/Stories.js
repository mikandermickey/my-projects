/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CreateStory from "./CreateStory";
import ProfilePic from "./ProfilePic";

const Stories = () => {
  const wrapper = css`
    height: 105px;
    overflow-y: hidden;
    border-top: 1px solid rgba(219, 219, 219, 1);
    border-bottom: 1px solid rgba(219, 219, 219, 1);
    width: 100%;
  `;
  const scrolling = css`
    display: grid;
    grid-template-columns: repeat(9, 50px);
    place-items: center start;
    width: 100%;
    height: calc(100% + 20px);
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;
    gap: 0px 2.2em;
    background-color: #fafafa;
    padding-top: 8px;
    overflow-y: hidden;
    padding-left: 1em;
    padding-bottom: 14px;
    padding-right: 2em;
  `;

  const account = css`
    color: #000;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    padding-top: 6px;
  `;
  const story = css`
    width: 66px;
    height: 84px;
  `;

  const myAccountImage = css`
    object-fit: cover;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  `;

  const imageContainer = css`
    width: 66px;
    height: 66px;
    position: relative;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div css={wrapper}>
      <div css={scrolling}>
        <div css={story}>
          <div css={imageContainer}>
            <img
              css={myAccountImage}
              src="/images/selfportrait.jpeg"
              alt="Mig"
            />
            <CreateStory />
          </div>
          <p css={account}>Mickey</p>
        </div>
        {/* Bruge array metoden "Map" ved rigtig data */}
        <div css={story}>
          <ProfilePic />
          <p css={account}>sportbible</p>
        </div>
        <div css={story}>
          <ProfilePic />
          <p css={account}>random1</p>
        </div>
        <div css={story}>
          <ProfilePic />
          <p css={account}>random2</p>
        </div>
        <div css={story}>
          <ProfilePic />
          <p css={account}>random3</p>
        </div>
        <div css={story}>
          <ProfilePic />
          <p css={account}>Mickey</p>
        </div>
        <div css={story}>
          <ProfilePic />
          <p css={account}>Mickey</p>
        </div>
        <div css={story}>
          <ProfilePic />
          <p css={account}>Mickey</p>
        </div>
        <div css={story}>
          <ProfilePic />
          <p css={account}>Mickey</p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
