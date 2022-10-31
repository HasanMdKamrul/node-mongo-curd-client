import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const storedData = useLoaderData();
  const [user, setUser] = useState(storedData);

  const handleSubmit = (event) => {
    event.preventDefault();

    // *** update

    const dataUpdate = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/users/${storedData._id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );

        const data = await response.json();

        if (data.modifiedCount > 0) {
          alert("User data updated");
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    dataUpdate();
  };

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newUser = { ...user };
    newUser[field] = value;

    setUser(newUser);
  };

  return (
    <div>
      <h1>Update: {storedData.name} </h1>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={storedData.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          name="name"
        />
        <br />
        <input
          defaultValue={storedData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
        />
        <br />
        <input
          defaultValue={storedData.address}
          onChange={handleChange}
          type="text"
          placeholder="Address"
          name="address"
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
