import React from "react";
import { Col, Container, Row } from "reactstrap";
import image from "../../assets/images/backup/note.png";
function Modules2(props) {
  return (
    <React.Fragment>
      <section className="modules">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mt-4 mt-sm-5 pt-2 pt-sm-0 pl-5">
              <div>
                <h3 className="title">Remote Backup of Your Data</h3>
                <p style={{ fontSize: "18px" }}>
                  All data are remotely backed up using our secured Backup and
                  Recovery Solution. A remote backup is a dedicated failsafe
                  solution for backing up on premise and cloud data. Remote
                  backup prevents data loss that can happen either as a result
                  of logical damage to software or physical damage to hardware.
                  Physical damage could be as a result of a manmade or natural
                  disaster.
                </p>
              </div>
            </Col>
            <Col md={6} className="backup-image">
              <img
                src={image}
                alt="Remote Backup of Your Data"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Modules2;
