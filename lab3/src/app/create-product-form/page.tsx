"use client";
import { useInput } from "lab3/hooks";
import { Button, Card, Form } from "react-bootstrap";

const CreateProductForm = () => {
  const { bind: bindName, value: nameValue } = useInput("");
  const { bind: bindDescription, value: descriptionValue } = useInput("");
  const { bind: bindPrice, value: priceValue } = useInput("");
  const { bind: bindCategory, value: categoryValue } = useInput("");

  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <Form>
        <h1>Product Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" {...bindName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            {...bindDescription}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            {...bindPrice}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={bindCategory.value}
            onChange={bindCategory.onChange}
          >
            <option>Categories</option>
            <option value="Tech">Tech</option>
            <option value="Food">Food</option>
            <option value="Fitness">Fitness</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Card>
        <h4>Form Values</h4>
        <hr />
        <p>
          <span style={{ fontWeight: "bold" }}>Name: </span>
          {nameValue}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Description: </span>
          {descriptionValue}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Price: </span>
          {priceValue}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Category: </span>
          {categoryValue}
        </p>
      </Card>
    </div>
  );
};

export default CreateProductForm;
