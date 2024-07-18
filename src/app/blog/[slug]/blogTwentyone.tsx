import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";
import bgimg from "../../../assets/images/1.jpg";

export default class BlogTwentyOne extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // eslint-disable-next-line
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-breadcrumb d-table w-100"
          style={{ background: `url(${bgimg}) center center` }}
        >
          <div className="bg-overlay" />
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level"></div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Row>
                  <Col md={2} className="d-none d-md-block">
                    <ul className="list-unstyled text-center sticky-bar social-icon mb-0">
                      <li className="mb-3 h6">Share</li>
                      <li>
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws"
                          target="blank"
                          className="rounded"
                        >
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws"
                          target="blank"
                          className="rounded"
                        >
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws"
                          target="blank"
                          className="rounded"
                        >
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </a>
                      </li>
                    </ul>
                  </Col>

                  <div className="col-md-10">
                    <h2>
                      Breaking Boundaries: CloudPlexo Ascends to Advanced Tier
                      Consulting and Technology Partner with AWS
                    </h2>
                    <p>
                      We are excited to announce a significant milestone in our
                      journey – CloudPlexo has achieved the prestigious status
                      of Advanced Tier Consulting and Technology Partner with
                      Amazon Web Services (AWS). This achievement not only
                      reaffirms our commitment to excellence but also opens a
                      new chapter of possibilities for our clients and partners.{" "}
                    </p>
                    <p>
                      This accolade stands as a testament to our unwavering
                      dedication to delivering cutting-edge cloud solutions and
                      technology services. We have long held the belief that
                      innovation knows no bounds, and this achievement
                      solidifies our position as a leader in cloud-native IT
                      consulting.
                    </p>

                    <h4>The Advanced Tier: A Symbol of Excellence</h4>
                    <p>
                      The Advanced Tier status is a recognition of our strong
                      team of trained and certified technical individuals who
                      have proven customer experience. It signifies our deep
                      technical expertise, our commitment to exceptional
                      customer experiences, and our ability to navigate the
                      ever-evolving landscape of AWS.
                      <br />
                      As we step into this new phase of our partnership with
                      AWS, we remain dedicated to pushing boundaries and driving
                      transformative outcomes.
                    </p>

                    <h4>Elevating Your Cloud Journey</h4>
                    <p>
                      What does this mean for you? As an Advanced Tier
                      Consulting and Technology Partner, we are uniquely
                      positioned to offer an even higher level of service,
                      innovation, and strategic guidance. Whether you're a
                      startup navigating the cloud landscape or an established
                      enterprise seeking to optimise your infrastructure,
                      CloudPlexo is equipped with the expertise and resources to
                      elevate your cloud journey.
                    </p>

                    <h4>Unleash the Potential</h4>
                    <p>
                      Join us in celebrating this milestone as we embark on a
                      new era of innovation and collaboration. We extend our
                      heartfelt gratitude to each of you who has been a part of
                      our journey so far. Together, let's embrace the
                      opportunities that lie ahead and harness the full
                      potential of cloud technology.
                    </p>
                    <p>
                      Stay tuned for more updates, insights, and success stories
                      as we continue to break boundaries and redefine what's
                      possible in the world of cloud computing.
                    </p>

                    <h5 className="mt-4">Comments :</h5>

                    <h5 className="mt-4">Leave A Comment :</h5>

                    <Form className="mt-3">
                      <Row>
                        <Col md={12}>
                          <FormGroup>
                            <Label>Your Comment</Label>
                            <div className="position-relative">
                              <textarea
                                id="message"
                                placeholder="Your Comment"
                                rows="5"
                                name="message"
                                className="form-control pl-5"
                                required=""
                              />
                            </div>
                          </FormGroup>
                        </Col>

                        <div className="col-lg-6">
                          <FormGroup>
                            <Label>
                              Name <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="form-control pl-5"
                                required=""
                              />
                            </div>
                          </FormGroup>
                        </div>

                        <div className="col-lg-6">
                          <FormGroup>
                            <Label>
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="form-control pl-5"
                                required=""
                              />
                            </div>
                          </FormGroup>
                        </div>

                        <Col md={12}>
                          <div className="send">
                            <Button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              Send Message
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
