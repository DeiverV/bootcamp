"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Practice3: NextPage = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="w-full grid place-items-center gap-4">
      <h1 className="text-3xl">Bootcamp Timer {time}</h1>
    </div>
  );
};

export default Practice3;
