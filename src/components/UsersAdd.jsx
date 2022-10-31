import React, { useState } from "react";

const UsersAdd = () => {
  const [users, setUsers] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // ** send data from client
    const dataSend = async () => {
      try {
        const response = await fetch(`http://localhost:15000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        });
        response.ok
          ? console.log("data send")
          : console.log("data sending failed");
        const data = response.json();
        if (data.acknowledged) {
          alert("User has been updated");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    dataSend();
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
