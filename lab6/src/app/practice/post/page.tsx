"use client";
import { CounterContext } from "lab6/context/counter.provider";
import { NextPage } from "next";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";

const Post: NextPage = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <Card>
      <Card.Body>
        <Card.Title>Card With a Counter Context</Card.Title>
        <Card.Text>Count: {count}</Card.Text>
        <Button variant="primary" onClick={() => setCount(count + 1)}>
          Add
        </Button>
        <Button variant="primary" onClick={() => setCount(count - 1)}>
          Substract
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
