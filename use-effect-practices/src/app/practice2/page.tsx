"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IMockUser } from "./interfaces";
import { UsersList } from "./components/UsersList";

const Practice2: NextPage = () => {
  const [data, setData] = useState<IMockUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full grid place-items-center gap-4">
      <h1 className="text-3xl">Bootcamp Fetching Users :p</h1>

      <UsersList isLoading={isLoading} users={data} />
    </div>
  );
};

export default Practice2;
