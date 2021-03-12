import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default ({
  handleSubmit,
  handleAmount,
  handleDate,
  handleDescription,
  handleType,
}) => {
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            onChange={handleAmount}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Date" onChange={handleDate} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Enter description"
            as="textarea"
            rows={3}
            onChange={handleDescription}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select" onChange={handleType}>
            <option>Ingress</option>
            <option>Egress</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
