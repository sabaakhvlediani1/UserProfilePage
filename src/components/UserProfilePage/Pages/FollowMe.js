import React from "react";
import image6 from "../../../assets/house6.png";
import { Row, Col, Image, Button } from "react-bootstrap";
import ShareAndDownload from "../ShareAndDownloadComp/ShareAndDownload";

const FollowMe = ({ card, onAddContact }) => {
  const socialMediaLinks = [
    "Facebook",
    "Twitter",
    "Pinterest",
    "Linkedin",
    "Whatsapp",
    "Skype",
  ];

  const socialLinks = card?.data?.cardItemInputs
    ?.filter((input) => socialMediaLinks.includes(input.name))
    ?.map((input) => ({
      name: input.name,
      url: input.value,
    }));

  return (
    <>
      {/* Video Embed */}
      <div style={{ padding: "10px" }}>
        {/* House Image */}
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <Image
            src={image6}
            fluid
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        {/* Social Links */}
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Row>
            {socialLinks?.map((link, index) => (
              <Col xs={6} key={index} style={{ marginBottom: "10px" }}>
                <Button
                  variant="outline-secondary"
                  style={{ width: "100%" }}
                  href={link.url}
                  target="_blank"
                >
                  {link.name}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <ShareAndDownload onAddContact={onAddContact}/>
    </>
  );
};

export default FollowMe;
