"use client";
import { CounterContext } from "lab6/context/counter.provider";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";

const Popup = () => {
  const { count, setCount } = useContext(CounterContext);

  console.log(count);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Context on a modal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{count}</p>
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            Add
          </Button>
          <Button variant="primary" onClick={() => setCount(count - 1)}>
            Substract
          </Button>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Popup;
