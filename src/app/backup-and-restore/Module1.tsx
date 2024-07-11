import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Reliable from "../../assets/images/backup/reliable.gif";
import Quick from "../../assets/images/backup/quick.gif";
import Secure from "../../assets/images/backup/secure.gif";

class Module1 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="py-3 backup-badge">
          <Container>
            <Row className="justify-content-around">
              <Col lg={3} md={4} className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    className="avatar avatar-large"
                    src={Quick}
                    alt="loading..."
                  />
                  <p
                    style={{ fontWeight: "700", fontSize: "20px" }}
                    className=""
                  >
                    Quick
                  </p>
                </div>
              </Col>
              <Col lg={3} md={4} className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    className="avatar avatar-large"
                    src={Reliable}
                    alt="loading..."
                  />
                  <p
                    style={{ fontWeight: "700", fontSize: "20px" }}
                    className=""
                  >
                    Reliable
                  </p>
                </div>
              </Col>
              <Col lg={3} md={4} className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    className="avatar avatar-large"
                    src={Secure}
                    alt="loading..."
                  />
                  <p
                    style={{ fontWeight: "700", fontSize: "20px" }}
                    className=""
                  >
                    Secure
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Module1;
