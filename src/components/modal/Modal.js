import React from 'react'
import { DiscussionEmbed } from 'disqus-react';
import { Card, Modal } from 'react-bootstrap';

function ModalCommentBox({show, selectedImg, setSelectedImg, setShow, item}) {
  
    const handleClose = (e) =>{ 
      setShow(false);
      setSelectedImg(null)
    }
    return (
        <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            click hear to close
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card><img src={selectedImg} alt="img.jpg"/></Card>
          <DiscussionEmbed
              shortname='unplush'
              config={
                  {
                      url: "https://unplush.herokuapp.com",
                      identifier: item.id,
                      title: item.title,
                  }
              }
          />

        </Modal.Body>
       
      </Modal>
    );
  }

  export default ModalCommentBox
