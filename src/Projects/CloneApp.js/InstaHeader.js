/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Snapshot from "./Snapshot";
import DM from "./DM";

const InstaHeader = () => {
  const header = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    grid-column: 1/-1;
    background-color: white;
    color: white;
    padding: 0 16px;
    padding-top: 10px;
    padding-bottom: 6px;
  `;
  const img = css`
    width: 25%;
  `;
  return (
    <header css={header}>
      <Snapshot />
      <div css={img}>
        <img src="/images/instagram.png" alt="" />
      </div>
      <DM />
    </header>
  );
};

export default InstaHeader;
