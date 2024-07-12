import React from "react";
import { Col, Container, Row } from "reactstrap";
import image from "../../assets/images/backup/file.png";
function Modules3(props) {
  return (
    <React.Fragment>
      <section className="modules">
        <Container className="module2">
          <Row className="align-items-center">
            <Col md={6} className="backup-image">
              <img
                src={image}
                alt="Prevent Data Loss Due to Failed Storage Drives"
                className="img-fluid"
              />
            </Col>
            <Col md={6} className="mt-4 mt-sm-5 pt-2 pt-sm-0 pr-5">
              <div>
                <h3 className="title">
                  Prevent Data Loss Due to Failed Storage Drives
                </h3>
                <p style={{ fontSize: "18px" }}>
                  In the case of a data loss due to manmade or natural disasters
                  that can result to a failure of a storage drive. Our secured
                  and reliable Backup and Recovery tool can help prevent storage
                  drive failure data loss.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Modules3;
