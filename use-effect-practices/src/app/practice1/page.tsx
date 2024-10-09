'use client'
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Practice1: NextPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title Counter ${count}`;
  }, [count]);

  const addToCounter = () => {
    setCount(count + 1);
  };
  const removeToCounter = () => {
    setCount(count - 1);
  };
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="w-full grid place-items-center gap-4">
      <h1 className="text-3xl">
        Bootcamp Title Counter: <span className="text-red-500">{count}</span>
      </h1>

      <div className="flex gap-2 items-center">
        <button className="border rounded-md text-white bg-blue-900 w-[120px]" onClick={addToCounter}>{"+"}</button>
        <button className="border rounded-md text-white bg-blue-900 w-[120px]" onClick={resetCounter}>Reset</button>
        <button className="border rounded-md text-white bg-blue-900 w-[120px]" onClick={removeToCounter}>{"-"}</button>
      </div>
    </div>
  );
};

export default Practice1;
