import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function ModalCommentBox() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>CommentBox</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalCommentBox