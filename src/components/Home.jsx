import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agress = confirm(
      `Are you sure you want to delte this user ? ${user.name}`
    );

    if (agress) {
      console.log("user id: ", user._id);

      //   ** delete fetching

      const deleteData = async () => {
        try {
          const response = await fetch(
            `http://localhost:15000/users/${user._id}`,
            {
              method: "delete",
            }
          );
          alert("user deleted");
          const data = response.json();

          const remainingUsers = users.filter((usr) => usr._id !== user._id);

          setDisplayUsers(remainingUsers);
        } catch (error) {
          console.log(error);
        }
      };
      deleteData();
    }
  };

  return (
    <div>
      <h1>Users:{displayUsers.length} </h1>

      {displayUsers.map((user) => (
        <p key={user._id}>
          {user.name}
          {user.email}
          <button onClick={() => handleDelete(user)}>X</button>
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Home;
