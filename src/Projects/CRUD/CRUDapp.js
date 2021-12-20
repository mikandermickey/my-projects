/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

const CRUDapp = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];
  // TILFOJ REGEL ----------------------------------
  const [users, setUsers] = useState(usersData);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  // SLET REGEL ------------------------------------
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // REDIGER REGEL ---------------------------------
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  const headline = css`
    text-align: center;
    margin: 1.5em 0;
  `;

  return (
    <div>
      <h1 css={headline}>CRUD App</h1>

      <div>
        {editing ? (
          <div>
            <h2>Rediger Regel</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2 css={headline}>Tilføj regel</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
        <div>
          <h2 css={headline}>Vis regler</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default CRUDapp;
