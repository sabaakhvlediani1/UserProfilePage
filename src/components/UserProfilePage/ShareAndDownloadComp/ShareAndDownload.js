import React, { useState } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import { FaPaperPlane, FaDownload } from "react-icons/fa";
import ShareModal from './ShareModal';

const ShareAndDownload = ({onAddContact}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div
        style={{
          marginTop: "20px",
          padding: "5px",
          background: "#C0C0C0",
        }}
      >
        <Row>
          <Col>
            <div>
              <Button
                variant="outline-secondary"
                style={{
                  marginRight: "10px",
                  marginLeft: "10px",
                  borderRadius: "20px",
                  background: "#fff",
                  color: "black",
                }}
                onClick={handleShow}
              >
                <FaPaperPlane
                  style={{ marginRight: "5px", color: "#606060" }}
                />
                Share
              </Button>
              
              <Button
                variant="outline-secondary"
                style={{
                  marginRight: "10px",
                  borderRadius: "20px",
                  background: "#fff",
                  color: "black",
                }}
                onClick={onAddContact}
              >
                <FaDownload style={{ marginRight: "5px", color: "#606060" }} />
                Save Contacts
              </Button>
            </div>
          </Col>
        </Row>
        <ShareModal show={showModal} handleClose={handleClose} />
      </div>
  )
}

export default ShareAndDownload