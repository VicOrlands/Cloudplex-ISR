import React from "react";
import { Col, Container, Row } from "reactstrap";
import image from "../../assets/images/backup/whitepaper.png";
import { FiArrowRight } from "react-icons/fi";

function Whitepaper(props) {
  return (
    <React.Fragment>
      <section className="whitepaper">
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <div className="whitepaper-card ">
                <div className="whitepaper-cardImage ">
                  <img
                    src={image}
                    alt="How Secure is Your Data"
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="whitepaper-cardContent style={{width:'100%}}">
                  <p>How Secure is Your Data?</p>
                </div>
              </div>
            </Col>
            <Col md={7} className="mt-5 mt-md-0">
              <p className="title">
                Get the latest insights and trends on Cloud Security and
                Recovery.{" "}
              </p>
              <a href="/whitepaper" className="btn-outline-primary">
                View Whitepaper{" "}
                <i className="ml-3">
                  <FiArrowRight />
                </i>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Whitepaper;
