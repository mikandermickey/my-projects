/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const UserTable = (props) => {
  const wrapper = css`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(auto, 100px);
    justify-content: center;
  `;

  const container = css`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(auto, 100px);
  `;
  const btn = css`
    border-radius: 0.75rem;
    background-color: #3b3a51;
    padding: 10px 12px;
    margin: 0 auto;
    margin-top: 1em;
    width: 100%;
    font-size: 1em;
    border: none;
    color: #fff7f2;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    text-decoration: none;
  `;
  const info = css`
    grid-column: span 1;
    place-self: center start;
  `;
  const align = css`
    text-align: center;
    font-size: 1.5em;
  `;
  const size = css`
    font-size: 1.5em;
  `;
  return (
    <div css={wrapper}>
      <p css={size}>NAVN</p>
      <p css={size}>REGEL</p>
      <p css={align}>ACTIONS</p>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <div css={container} key={user.id}>
            <p css={info}>{user.name}</p>
            <p css={info}>{user.username}</p>
            <div>
              <button css={btn} onClick={() => props.deleteUser(user.id)}>
                Slet
              </button>
              <button
                css={btn}
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Rediger
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Ingen Regler</p>
      )}
    </div>
  );
};

export default UserTable;
