"use client";
import { UserContext } from "context-practice/context/user.context";
import { NextPage } from "next";
import { useContext } from "react";

const Profile: NextPage = () => {
  const { email, name, password, username } = useContext(UserContext);

  return (
    <div>
      <h2 className="text-2xl">FormValues</h2>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Profile;
