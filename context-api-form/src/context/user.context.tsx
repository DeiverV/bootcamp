/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { createContext, useState } from "react";

interface UserContextProps {
  name: string;
  username: string;
  email: string;
  password: string;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  name: "",
  username: "",
  email: "",
  password: "",
  setName: (name) => {},
  setUsername: (username) => {},
  setEmail: (email) => {},
  setPassword: (password) => {},
});

export const UserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        username,
        email,
        password,
        setName,
        setUsername,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
