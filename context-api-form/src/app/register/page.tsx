"use client";
import { UserContext } from "context-practice/context/user.context";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Register: NextPage = () => {
  const {
    name,
    username,
    email,
    password,
    setName,
    setUsername,
    setEmail,
    setPassword,
  } = useContext(UserContext);

  const router = useRouter();

  return (
    <section className="px-[10%] py-10">
      <h1 className="text-3xl">Register</h1>
      <p>Register Form</p>

      <button className="p-4 border rounded-md" onClick={() => router.push("/profile")}>Go to Profile</button>
      <div className="grid gap-2">
        <input
          className="text-black p-1 border rounded-md"
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="text-black p-1 border rounded-md"
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="text-black p-1 border rounded-md"
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-black p-1 border rounded-md"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <hr />
      <div>
        <h2 className="text-2xl">FormValues</h2>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </section>
  );
};

export default Register;
