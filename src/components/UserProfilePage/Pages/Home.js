import React from "react";
import image6 from "../../../assets/house6.png";
import { Row, Col, Image, Button } from "react-bootstrap";
import ShareAndDownload from "../ShareAndDownloadComp/ShareAndDownload";

const Home = ({ card, onAddContact }) => {
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
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src="https://www.youtube.com/embed/VIDEO_ID"
            frameBorder="0"
            allowFullScreen
            title="Real Estate Video"
          ></iframe>
        </div>
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
        {/* About Me Section */}
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <h5>About Me</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </p>
        </div>
        {/* Social Links */}
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <h5>My Social Links</h5>
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

export default Home;
