"use client";
import { CounterContext } from "lab6/context/counter.provider";
import { NextPage } from "next";
import { useContext } from "react";
import { Alert, Button } from "react-bootstrap";

const Warning: NextPage = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <Alert variant="success">Alert with a counter!: {count}</Alert>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Add
      </Button>
      <Button variant="primary" onClick={() => setCount(count - 1)}>
        Substract
      </Button>
    </>
  );
};

export default Warning;
