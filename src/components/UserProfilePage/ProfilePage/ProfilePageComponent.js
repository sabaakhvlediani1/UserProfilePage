import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button, Nav, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image6 from "../../../assets/house6.png";
import { useLazyGetCardQuery } from "../../../services/CardApi";
import { fetchQRs } from "../../../api/Api";
import Home from "../Pages/Home";
import FollowMe from "../Pages/FollowMe";
import Properties from "../Pages/Properties";
import Services from "../Pages/Services";
import ContactMe from "../Pages/ContactMe";

function ProfilePageComponent() {
  const [trigger, { data: card }] = useLazyGetCardQuery();
  const [vCardData, setVCardData] = useState(null);

  useEffect(() => {
    trigger();
    const getData = async () => {
      const result = await fetchQRs();
      setVCardData(result?.data?.vCard);
    };
    getData();
  }, [trigger]);

  const handleAddContact = () => {
    if (!vCardData) return;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        backgroundColor: "#FFBF00",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container
        style={{
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          maxWidth: "600px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "1rem",
          paddingBottom: "20px",
          paddingLeft: "0",
          paddingRight: "0",
        }}
      >
        <div style={{ position: "relative", marginBottom: "45px" }}>
          <Image
            src={image6}
            fluid
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
          <Image
            src={`https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg`}
            roundedCircle
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              position: "absolute",
              bottom: "-40px",
              left: "20px",
              border: "4px solid white",
            }}
            className="profile-image"
          />
        </div>

        <Row className="m-0">
          <Col xs={12} md={6}>
            <div style={{ marginTop: "10px", marginBottom: "20px", marginLeft:"15px" }}>
              <h2>
                John
              </h2>
              <p style={{ margin: "0 0 5px 0" }}>
                {
                  card?.data?.cardItemInputs?.find((x) => x.name === "Position")
                    ?.value
                }
              </p>
              <p style={{ margin: "0 0 5px 0" }}>
                New York
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <Button
                variant="warning"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  window.location.href = `tel:${
                    card?.data?.cardItemInputs?.find((x) => x.name === "Phone1")
                      ?.value
                  }`;
                }}
              >
                Call Me
              </Button>
              <Button
                variant="warning"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  window.location.href = `https://wa.me/${
                    card?.data?.cardItemInputs?.find(
                      (x) => x.name === "Whatsapp"
                    )?.value
                  }`;
                }}
              >
                WhatsApp
              </Button>
              <Button variant="outline-secondary" onClick={handleAddContact}>
                Save
              </Button>
            </div>
          </Col>
        </Row>

        {/* Navigation Tabs */}
        <Tab.Container defaultActiveKey="home">
          <Nav variant="tabs" style={{ marginBottom: "20px" }}>
            {["Home", "Follow Me", "Properties", "Services", "Contact Me"].map(
              (tab, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={tab.toLowerCase().replace(" ", "-")}>
                    {tab}
                  </Nav.Link>
                </Nav.Item>
              )
            )}
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="home">
              <Home card={card} onAddContact={handleAddContact} />
            </Tab.Pane>
            <Tab.Pane eventKey="follow-me">
              <FollowMe card={card} onAddContact={handleAddContact} />
            </Tab.Pane>
            <Tab.Pane eventKey="properties">
              <Properties />
            </Tab.Pane>
            <Tab.Pane eventKey="services">
              <Services onAddContact={handleAddContact}/>
            </Tab.Pane>
            <Tab.Pane eventKey="contact-me">
              <ContactMe onAddContact={handleAddContact} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default ProfilePageComponent;
