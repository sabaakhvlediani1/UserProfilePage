import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import ShareAndDownload from "../ShareAndDownloadComp/ShareAndDownload";

const ContactMe = ({ onAddContact }) => {
  return (
    <>
      <div className="p-2">
        {" "}
        <Row>
          <Col md={10} className="mx-auto">
            {" "}
            <Form className="mt-3">
              <Form.Group controlId="formName">
                <Form.Label>Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Jane Smith"
                  className="mb-3"
                />{" "}
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="mail@example.com"
                  className="mb-3"
                />{" "}
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Mobile Number*</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  className="mb-3"
                />{" "}

              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>How can we help you?*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder=""
                  className="mb-3"
                />{" "}
                <Form.Text className="text-muted">0/1000</Form.Text>
              </Form.Group>
              <Button variant="warning" type="submit" className="mt-2">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <p className="mt-4">
          Make sure to avoid including any sensitive information you don't want
          to share with this page.
        </p>
      </div>
      <ShareAndDownload onAddContact={onAddContact}/>
    </>
  );
};

export default ContactMe;
