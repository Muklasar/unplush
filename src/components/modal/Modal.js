import React from 'react'
import { DiscussionEmbed } from 'disqus-react';
import { Card, Modal } from 'react-bootstrap';

function ModalCommentBox({show, selectedImg, setShow, item}) {
  
    const handleClose = (e) =>{ 
      setShow(false);
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
          <Card><img src={selectedImg}/></Card>
          <DiscussionEmbed
              shortname='unplush'
              config={
                  {
                      url: "http://localhost:3000", 
                      identifier: item,
                      title: 'wallpaper',
                  }
              }
          />
        </Modal.Body>
       
      </Modal>
    );
  }

  export default ModalCommentBox