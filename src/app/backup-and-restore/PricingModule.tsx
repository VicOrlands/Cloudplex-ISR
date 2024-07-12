import React from "react";
import { Container, Row, Col } from "reactstrap";

function PricingModule() {
  const tick = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
        fill="white"
      />
      <path
        d="M7.1167 13.8405L10.4785 17.2023L18.8831 8.79773"
        stroke="#516BEB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const tick2 = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
        fill="#344054"
      />
      <path
        d="M7.1167 13.8405L10.4785 17.2023L18.8831 8.79773"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const Business = (
    <svg
      width="62"
      height="62"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="72" height="72" rx="16" fill="white" />
      <rect x="17" y="17" width="18.4865" height="38" fill="#344054" />
      <rect x="35.4863" y="17" width="19.5135" height="38" fill="#B8B1FF" />
      <rect
        x="35.4863"
        y="35.4863"
        width="19.5135"
        height="19.5135"
        fill="#DCD8FF"
      />
    </svg>
  );

  const Enterprise = (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="72" height="72" rx="16" fill="#ECEBFF" />
      <path
        d="M57.1639 46.6464L57.1732 46.6413H57.1551L46.5288 40.8833L35.8849 35.1152L25.2405 40.8833L14.6143 46.6413H14.5962L14.6054 46.6464L14.5962 46.6515H14.6143L25.2405 52.4094L35.8849 58.1775L46.5288 52.4094L57.1551 46.6515H57.1732L57.1639 46.6464Z"
        fill="#DCD8FF"
      />
      <path
        d="M57.1639 24.5312L57.1732 24.5265H57.1551L46.5288 18.7681L35.8849 13L25.2405 18.7681L14.6143 24.5265H14.5962L14.6054 24.5312L14.5962 24.5362H14.6143L25.2405 30.2946L35.8849 36.0627L46.5288 30.2946L57.1551 24.5362H57.1732L57.1639 24.5312Z"
        fill="#344054"
      />
      <path
        d="M14.6143 24.0625V47.1151L35.8849 35.589L14.6143 24.0625Z"
        fill="#B8B1FF"
      />
      <path
        d="M57.155 24.0625V47.1151L35.8848 35.589L57.155 24.0625Z"
        fill="#B8B1FF"
      />
    </svg>
  );

  return (
    <React.Fragment>
      <section className="pricing-page">
        <h3 className="headings">Pricing</h3>
        <Container>
          <Row>
            {/* Business */}
            <Col lg={6} md={6} className="mb-5">
              <div className="pricing-tab1 p-4">
                <div>
                  <p className="mtitle mb-2">
                    <i className="mr-3">{Business}</i>Business Essential
                  </p>
                  <p className="desc" style={{ color: "#D9DBE9" }}>
                    Backup Desktops, laptops, think-clients, servers and more{" "}
                  </p>

                  <span className="subt">What's Included</span>
                  <ul
                    className="list-unstyled pt-3"
                    style={{ color: "#D9DBE9" }}
                  >
                    <li>
                      <span className="mr-2">
                        <i>{tick}</i>
                      </span>
                      License per user/machine
                    </li>
                    <li>
                      <span className="mr-2">
                        <i>{tick}</i>
                      </span>
                      Bank level security and encryption
                    </li>
                    <li>
                      <span className="mr-2">
                        <i className="align-middle">{tick}</i>
                      </span>
                      Backup to AWS, Azure or Google Cloud
                    </li>
                    <li>
                      <span className="mr-2">
                        <i className="align-middle">{tick}</i>
                      </span>
                      Restore from AWS, Azure or Google Cloud
                    </li>
                    <li>
                      <span className="mr-2">
                        <i>{tick}</i>
                      </span>
                      Premium Support
                    </li>
                    <li>
                      <span className="mr-2">
                        <i>{tick}</i>
                      </span>
                      <span>Cloud-Native</span>
                    </li>
                  </ul>
                  <div className="mt-5">
                    {/* eslint-disable-next-line*/}
                    <a href="/contact-us" className="btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            {/* Enterprise */}
            <Col lg={6} md={6} className="mb-5">
              <div className="pricingtab p-4">
                <div>
                  <p className="mtitle mb-2" style={{ color: "#170F49" }}>
                    <i className="mr-3">{Enterprise}</i>Enterprise
                  </p>
                  <p className="desc" style={{ color: "#170F49" }}>
                    Enterprise backup and restore{" "}
                  </p>
                  <span className="subt" style={{ color: "#170F49" }}>
                    What's Included
                  </span>
                  <ul
                    className="list-unstyled pt-3"
                    style={{ color: "#170F49" }}
                  >
                    <li>
                      <span className="mr-2">
                        <i>{tick2}</i>
                      </span>
                      All in Business Essential
                    </li>
                    <li>
                      <span className="mr-2">
                        <i className="align-middle">{tick2}</i>
                      </span>
                      Dedicated Backup Specialist
                    </li>
                    <li>
                      <span className="mr-2">
                        <i>{tick2}</i>
                      </span>
                      Dedicated Account Manager
                    </li>
                    <li>
                      <span className="mr-2">
                        <i>{tick2}</i>
                      </span>
                      <span>Storage Explorer</span>
                    </li>
                  </ul>
                  <div className="mt-5">
                    <a href="/contact-us" className="btn-outline-primary">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default PricingModule;
