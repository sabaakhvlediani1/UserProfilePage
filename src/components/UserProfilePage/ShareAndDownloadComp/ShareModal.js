import React from "react";
import { Modal, Button, Tabs, Tab, InputGroup, Form } from "react-bootstrap";
import facebook from "../../../assets/icons8-facebook.svg"
import twitter from "../../../assets/icons8-twitter.svg"
import linkedin from "../../../assets/icons8-linkedin.svg"
import pinterest from "../../../assets/icons8-pinterest.svg"

const ShareModal = ({ show, handleClose }) => {
  const copyToClipboard = () => {
    const input = document.getElementById("shareInput");
    input.select();
    document.execCommand("copy");
  };

  const handleSend = () => {
    // Handle the send action here
    alert("Message sent!");
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Share</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ minHeight: '600px' }}>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <input
            id="shareInput"
            type="text"
            value="https://business.wcard.me"
            readOnly
            style={{ width: "100%", paddingRight: "80px" }}
          />
          <Button
            variant="link"
            onClick={copyToClipboard}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              textDecoration: "none",
            }}
          >
            Copy
          </Button>
        </div>
        <Tabs defaultActiveKey="qr-code">
          <Tab eventKey="qr-code" title="QR Code">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <p>Scan QR code</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9QAAAPUAQAAAABkr0wpAAAEVUlEQVR4nO3YwZHbMAwFUHbA/rtUB8qMVzZAkPJG8iY55PGgEUUQ7/uGcdv/2doam81ms9lsNpvNZrPZbDabzWaz2Ww2m81ms9lsNpvNZrPZ+97q6l8V7fFYbUtxLtmP7bopm81ms9lsNvuWHd/3qVPEe11tpS4HeN+UzWaz2Ww2m33Xfj/5xayYp8aWS47tamDsbDabzWaz2eyftkuKaBx1k9PHfmw2m81ms9nsP2gfB8MqE+KqAZvNZrPZbDb7T9lTp1WA/nW1RikNTpuy2Ww2m81ms2/aZfUc4PZjbspms9lsNpvNvmWv1qP8mAb714V2fNvzNp/217X3i81ms9lsNpt91Q5iP0a9x7ecYijOp31sUFJsiyhsNpvNZrPZ7Gt2lEWATDwO2tlpbONntPG3THfZbDabzWaz2VfskiJGvSPUnm4NeWI4fNZNb9urH5vNZrPZbDb7rp2b9PwtUkynbeo5RV4FZbPZbDabzWbftfPVocnR6bg1vG25eB1gtdhsNpvNZrPZ1+zjVlvMdidEpMgz4NAq+pWZks1ms9lsNpt93R46lcfUuJSEU+yMNTabzWaz2Wz2J/bphbaY92J+bOPBnqPE3Sk+m81ms9lsNvuqXWbFlv/Cy9/Kdh/zDNsSlM1ms9lsNpt9384XghgC5Lp9ihLE1CDSdjabzWaz2Wz2bftZlmtj9ZE9CbpKkVux2Ww2m81ms+/apWfelpI2nm7r7eqNzWaz2Ww2m/2JXQa8MjqWUe95o6zvurDZbDabzWaz79rRPS7E+Hd8C3Gum0qKvZ/Pimw2m81ms9ns37RXKXKA59t7MUpyis5ms9lsNpvN/szO32uKKGnjyimie6SIfltuxWaz2Ww2m82+age2YqdZMb61cTvYuUFZbDabzWaz2eyr9mrAi7dhflwHGN6O4p4bnM+KbDabzWaz2ezv7Dzl9RfxPDi69rdYecy/is1ms9lsNpv9oZ1nu3lFSaurr0/Dzr+PzWaz2Ww2m33DzhVzz2lC7GPakiwC9Cyw2Ww2m81msz+xy+Ezz9QkJsktH0x54nTLkdlsNpvNZrPZt+wgjkeb2Mcmv23jYzjIbz23Z7PZbDabzWbfsl+fWmk8ifsrXsyFcbev6yIem81ms9lsNvuWPV1oOUUZIstwmAMMv6Ccns2KbDabzWaz2ezv7dXKV7eFOKwyDU7illOw2Ww2m81ms6/aU69BzLNieQzFsT19sNlsNpvNZrNv2vE9tsNwWKbBwNaTZF+3YrPZbDabzWbft+PWdCEGxvYihnEyokyr5wZsNpvNZrPZ7B+093FM3MZOcXASr3xjs9lsNpvNZv+sXR4hlmQlXrCrzmw2m81ms9ns+/YqShbbq91JxmCjOOfZUwmbzWaz2Ww2+5pdVokypJiuvZsp82B5Niuy2Ww2m81ms7+z//Zis9lsNpvNZrPZbDabzWaz2Ww2m81ms9lsNpvNZrPZbPZ/bP8CRYNwRxV/YwQAAAAASUVORK5CYII="
                alt="QR Code"
                style={{ width: "228px", height: "228px" }}
              />
              <Button variant="link" style={{ textDecoration: "none" }}>
                Download QR Code
              </Button>
            </div>
          </Tab>
          <Tab eventKey="whatsapp" title="WhatsApp">
            <div style={{ marginTop: "10px" }}>
              <p>Enter any WhatsApp mobile number with country code:</p>
              <InputGroup className="mb-3">
                <Form.Control />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </div>
          </Tab>
          <Tab eventKey="email" title="Email">
          <div style={{ marginTop: "10px" }}>
              <p>Enter an Email Address</p>
              <InputGroup className="mb-3">
                <Form.Control />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </div>
          </Tab>
          <Tab eventKey="social" title="Social">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
              <img src={facebook} style={{ fontSize: '24px', borderRadius: '50%',  padding: '5px', color: '#4267B2' }} alt="" />
              <img src={twitter} style={{ fontSize: '24px', borderRadius: '50%', padding: '5px', color: '#1DA1F2' }} alt="" />
              <img src={linkedin} style={{ fontSize: '24px', borderRadius: '50%', padding: '5px', color: '#C13584' }} alt="" />
              <img src={pinterest} style={{ fontSize: '24px', borderRadius: '50%',  padding: '5px', color: '#0077B5' }} alt="" />
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default ShareModal;
