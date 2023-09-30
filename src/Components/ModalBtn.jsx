import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Open Custom Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="custom-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Custom Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "49%" }}>Child Div 1</div>
            <div style={{ width: "49%" }}>Child Div 2</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomModal;
