"use client";

import { createContext, useState } from "react";

const CounterContext: React.Context<{
  count: number;
  setCount: (number: number) => void;
}> = createContext({
  count: 0,
  setCount: (number: number) => {
    console.log(number);
  },
});

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const handleCount = (number: number) => {
    setCount(number);
  };

  return (
    <CounterContext.Provider value={{ count, setCount: handleCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
