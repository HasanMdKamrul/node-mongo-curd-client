import React, { useState } from "react";

const UsersAdd = () => {
  const [users, setUsers] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(users);
  };

  const handleBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newUsers = { ...users };
    newUsers[field] = value;

    setUsers(newUsers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onBlur={handleBlur} type="text" placeholder="Name" name="name" />
      <br />
      <input
        onBlur={handleBlur}
        type="email"
        placeholder="Email"
        name="email"
      />
      <br />
      <input
        onBlur={handleBlur}
        type="text"
        placeholder="Address"
        name="address"
      />
      <br />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UsersAdd;
