"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Practice4: NextPage = () => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isFetching) {
      setTimeout(() => {
        console.log("API FETCHED");
        setIsFetching(false);
      }, 2000);
    }
  }, [isFetching]);

  const startFetch = () => {
    setIsFetching(true);
  };

  return (
    <div className="w-full grid place-items-center gap-4">
      <h1 className="text-3xl">Bootcamp conditional fetching</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <button className="w-[120px] border rounded-md" onClick={startFetch}>
          Fetch
        </button>
      )}
    </div>
  );
};

export default Practice4;
