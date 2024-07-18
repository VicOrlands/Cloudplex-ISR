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
//Import Icons
import FeatherIcon from "feather-icons-react";
//Import Images
import logolight from "../../../assets/images/logo-light.png";
import logodark from "../../../assets/images/logo-dark.png";
import bgimg from "../../../assets/images/1.jpg";
import blog1 from "../../../assets/images/blog/blog42/aws_login_screen.png";

export default class PageBlogFortyThree extends Component {
  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-primary";
      document.getElementById("brandLogo").src = logodark;
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
      document.getElementById("brandLogo").src = logolight;
    }
  };
  // eslint-disable-next-line
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-breadcrumb d-table w-100"
          style={{ background: `url(${bgimg}) center center` }}
        >
          <div className="bg-overlay"></div>
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
              ></path>
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/understanding-the-difference-between-aws-sns-and-sqs"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/understanding-the-difference-between-aws-sns-and-sqs"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/understanding-the-difference-between-aws-sns-and-sqs"
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
                      Understanding the Difference Between AWS SNS and SQS
                    </h2>

                    <img
                      src={blog1}
                      className="img-fluid rounded-md shadow"
                      alt="Leveraging Rightsizing Recommendations for Cost Optimization in Cloud Deployments"
                    />

                    <br />
                    <br />

                    <h4>Introduction:</h4>
                    <p>
                      Amazon Web Services (AWS) provides a plethora of services
                      to help businesses build scalable and reliable
                      applications in the cloud. Two essential components for
                      enabling communication and coordination between
                      distributed systems are Simple Notification Service (SNS)
                      and Simple Queue Service (SQS). Despite their
                      similar-sounding names, SNS and SQS serve distinct
                      purposes in the AWS ecosystem.
                    </p>

                    <h4>Simple Notification Service (SNS):</h4>
                    <hr />
                    <p>
                      SNS is a fully managed, publish-subscribe messaging
                      service designed to facilitate the communication of
                      messages between different components, systems, or
                      microservices. In simple terms, SNS acts as a broadcasting
                      system, where messages are sent to multiple subscribers
                      simultaneously.
                    </p>

                    <h5>Key Characteristics of SNS:</h5>
                    <ol>
                      <li>
                        <b>Publish-Subscribe Model: </b>
                        SNS follows a publish-subscribe model, where a message
                        (or "event") is published to a specific topic, and
                        multiple subscribers interested in that topic receive
                        the message.
                      </li>
                      <li>
                        <b>Push Mechanism: </b>SNS pushes messages to
                        subscribers in real-time. When a message is published to
                        a topic, all subscribed endpoints immediately receive
                        the message.
                      </li>
                      <li>
                        <b>Multiple Protocols: </b>SNS supports various
                        protocols, including HTTP/HTTPS, email, SMS, and more,
                        allowing developers to choose the most suitable method
                        for message delivery.
                      </li>
                      <li>
                        <b>Fanout Pattern: </b>
                        SNS excels in scenarios where the same message needs to
                        be delivered to multiple recipients simultaneously,
                        enabling the fanout pattern.
                      </li>
                    </ol>

                    <h4>Simple Queue Service (SQS):</h4>
                    <hr />
                    <p>
                      SQS, on the other hand, is a fully managed message queuing
                      service that acts as a buffer between producers and
                      consumers of messages. It helps decouple the components of
                      a distributed system, ensuring that messages are reliably
                      processed even if one part of the system is experiencing
                      high loads or is temporarily unavailable.
                    </p>

                    <h5>Key Characteristics of SQS:</h5>
                    <ol>
                      <li>
                        <b>Queue-Based Model: </b>
                        SQS operates on a queue-based model, where messages are
                        sent to a queue and retrieved by consumers in a
                        first-in, first-out (FIFO) manner.
                      </li>
                      <li>
                        <b>Pull Mechanism: </b>Unlike SNS, SQS follows a pull
                        mechanism. Consumers pull messages from the queue at
                        their own pace, allowing for better control over the
                        processing rate.
                      </li>
                      <li>
                        <b>Message Retention: </b>
                        SQS retains messages in the queue for a configurable
                        period, providing a safety net for delayed or
                        reprocessed tasks.
                      </li>
                      <li>
                        <b>Decoupling Components: </b>
                        SQS is ideal for decoupling the components of a system,
                        ensuring that each part can operate independently
                        without affecting others.
                      </li>
                    </ol>

                    <h4>Choosing Between SNS and SQS:</h4>
                    <p>
                      The choice between SNS and SQS depends on the specific
                      requirements of your application. If you need to broadcast
                      the same message to multiple subscribers simultaneously,
                      SNS is the preferred choice. On the other hand, if you
                      want to decouple components, ensure reliable message
                      processing, and manage message order, SQS is the better
                      option.
                    </p>

                    <h5>Conclusion:</h5>
                    <p>
                      In summary, while SNS and SQS both play crucial roles in
                      facilitating communication within distributed systems,
                      they serve different purposes. SNS is a publish-subscribe
                      service designed for broadcasting messages to multiple
                      subscribers, while SQS is a message queuing service that
                      enables decoupling and reliable, ordered message
                      processing. Understanding the distinctions between these
                      two services is key to architecting robust and scalable
                      AWS applications.
                    </p>

                    <h6>Continue Reading</h6>
                    <p>
                      <a href="https://cloudplexo.com/">
                        Top Cloud Services providers with CloudPlexo's
                        Innovative Solutions
                      </a>
                    </p>
                    <p>
                      <a href="https://cloudplexo.com/uploading-and-downloading-files-from-amazon-sw3-using-boto3">
                        Uploading and Downloading Files to/from Amazon S3 using
                        Boto3
                      </a>
                    </p>
                    <p>
                      <a href="https://cloudplexo.com/building-a-basic-web-application-on-aws">
                        Step-by-Step Guide: Building a Basic Web Application on
                        AWS
                      </a>
                    </p>

                    <h5 className="mt-4">Comments :</h5>

                    <h5 className="mt-4">Leave A Comment :</h5>

                    <Form className="mt-3">
                      <Row>
                        <Col md={12}>
                          <FormGroup>
                            <Label>Your Comment</Label>
                            <div className="position-relative">
                              <FeatherIcon
                                icon="message-circle"
                                className="fea icon-sm icons"
                              />
                              <textarea
                                id="message"
                                placeholder="Your Comment"
                                rows="5"
                                name="message"
                                className="form-control pl-5"
                                required=""
                              ></textarea>
                            </div>
                          </FormGroup>
                        </Col>

                        <div className="col-lg-6">
                          <FormGroup>
                            <Label>
                              Name <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
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
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                              />
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
