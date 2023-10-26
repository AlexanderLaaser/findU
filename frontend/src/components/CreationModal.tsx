import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@apollo/client";
//import ADD_ACTIVTY from "../graphql/addActivity.ts";
import { ADD_ACTIVITY } from "../constants/GraphQL";

function CreationModal() {
  const [show, setShow] = useState(false); //Das ist die funtion die das Modal anzeigt
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState(""); // State für den Namen
  const [description, setDescription] = useState(""); // State für die Beschreibung
  const [addActivityMutation] = useMutation(ADD_ACTIVITY);

  const createActivity = () => {
    const activityInput = {
      name: name,
      description: description,
      date: startDate,
    };

    addActivityMutation({ variables: { activityInput } });
    handleClose();
  };

  return (
    <>
      <div
        className="mb-2 d-flex justify-content-center align-items-center"
        style={{ height: "30vh" }}
      >
        <Button
          size="lg"
          className="company-button-green create-ticket-button"
          onClick={() => handleShow()}
        >
          Create activity ticket
        </Button>
      </div>

      <Modal
        className="company-font"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Example name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 date-form "
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Date</Form.Label>
              <br />
              <DatePicker
                className="date-picker company-font"
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date || new Date())}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="company-button-no-color"
            style={{ backgroundColor: "#81847F" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            id="createButton"
            className="company-button-green"
            onClick={createActivity}
          >
            Create activity
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreationModal;
