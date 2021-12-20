/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const form = css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `;
  const input = css`
    padding: 0.5em;
    background-color: #fff;
    width: 100%;
  `;
  const btn = css`
    border-radius: 0.75rem;
    background-color: #3b3a51;
    padding: 10px 12px;
    margin: 0 auto;
    margin-top: 1em;
    width: 35%;
    font-size: 1em;
    border: none;
    color: #fff7f2;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    text-decoration: none;
    &:hover {
      transform: translate(0, -4px);
      transition: all 0.2s ease-out;
    }
  `;
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      css={form}
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        css={input}
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        css={input}
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button css={btn}>Update user</button>
      <button
        css={btn}
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
