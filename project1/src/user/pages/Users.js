import React from "react";
import UserList from "../components/UsersList";
import Image from "../../images/pr.jpg";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Tedi",
      image: Image,
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
