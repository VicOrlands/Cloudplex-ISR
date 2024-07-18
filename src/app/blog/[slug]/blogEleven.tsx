import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import logolight from "../../../assets/images/logo-light.png";
import logodark from "../../../assets/images/logo-dark.png";
import bgimg from "../../../assets/images/1.jpg";
import blog1 from "../../../assets/images/blog/blog5.png";
import SEO from "../../../components/SEO";

export default class PageBlogDetailEleven extends Component {
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
        <SEO
          title="Cloud Computing - Revolutionizing the Global Village with CloudPlexo and AWS"
          description="Discover how cloud computing, powered by AWS and managed by CloudPlexo, is revolutionizing the global exchange of data and enabling businesses to thrive in the digital age"
          keywords="Cloud Computing, AWS, Global Village, CloudPlexo, Data Globalization, Cloud Technology, Cloud Services, Data Exchange, Digital Age Transformation"
        />

        <section
          className="bg-half-breadcrumb d-table w-100"
          style={{ background: `url(${bgimg}) center center` }}
        >
          <div className="bg-overlay" />
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level">
                  <h4 className="title text-white title-dark">
                    Will Cloud Computing Ever Rule the World?{" "}
                  </h4>
                </div>
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://wendu.io/will-cloud-computing-rule-the-world"
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
                          href="https://twitter.com/intent/tweet?url=https://wendu.io/will-cloud-computing-rule-the-world"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://wendu.io/will-cloud-computing-rule-the-world"
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
                    <ul className="list-unstyled d-flex justify-content-between mt-4">
                      <li className="list-inline-item user mr-2">
                        <Link to="#">
                          <i className="mdi mdi-account text-dark" /> David
                        </Link>
                      </li>
                      <li className="list-inline-item date text-muted">
                        <i className="mdi mdi-calendar-check text-dark" /> 24th
                        September, 2022
                      </li>
                    </ul>

                    <img
                      src={blog1}
                      className="img-fluid rounded-md shadow"
                      alt="Cloud Computing - Revolutionizing the Global Village with CloudPlexo and AWS"
                      style={{ width: "1000px" }}
                    />

                    <br />
                    <br />

                    <p>
                      <span style={{ fontWeight: "800" }}> </span>
                      Before we dive into the topic for today’s blog post, let
                      us, first, have a recap into what cloud computing is. I
                      like to define cloud computing as simple as computing, but
                      on the cloud. So, it’s every bit of computing you can do
                      with a physical computer, operating system, application,
                      database or server on a grander, larger and faster
                      scale.That is management, processing and communication of
                      information in a grander, larger and faster scale than
                      ever imagined.
                      <br />
                      <br />
                      Not to get into why cloud computing is important in
                      today’s world–be it in our everyday lives with IoT, or in
                      business with the analytics power, or even in sports with
                      the ability to get and analyse real time data, space
                      technology, health and life sciences, the list goes on;
                      cloud computing has proven to be the bedrock of innovation
                      in today’s society.
                    </p>
                    <p>
                      <h5>Cloud Computing vs Cloud Storage</h5>
                      Now, so we’re on the same page here and we have a defined
                      scope for this blog post, we’ll clearly define and give
                      the difference between what cloud storage is and what
                      cloud computing is.
                      <br />
                      <br />
                      <h6>Cloud Storage</h6>
                      In a nutshell, cloud storage is the ability to store data
                      on servers running on data centres, which is mostly owned
                      and managed by Cloud Storage Providers and is accessible
                      to you, the owner of this data, anywhere in the world, and
                      at any time of the day. For example, Amazon Drive, Google
                      Drive, Dropbox, OneDrive.
                      <h6 className="mt-4">Cloud computing</h6>
                      Cloud computing, on the other hand, can be defined simply
                      as the ability to process this data stored in the cloud
                      for analytics, innovation or work collaboration. For
                      example, Amazon Workspace, Google Docs, Photo Viewer App,
                      Outlook Outline.
                    </p>
                    <br />
                    <p>
                      <h5 style={{ fontWeight: "600" }}>
                        The World Wide Web and the Global Village
                      </h5>
                      Remember the revolution caused by the introduction of the
                      World Wide Web in the early 90s, and how we still reap
                      from the benefits the technology offers to our world. Of
                      all the benefits that came with the launch of the World
                      Wide Web, Globalisation was one effect that not many
                      experts predicted will have the most impact on us.
                      Globalisation of cultures which means beliefs, lifestyles,
                      ideas all of a sudden was being exchanged at a grander,
                      larger and faster scale that has brought about immense
                      opportunities in business, education and lifestyle with
                      fewer cultural and distance barriers–a global village
                      indeed!
                    </p>
                    <br />
                    <p>
                      <h5 style={{ fontWeight: "600" }}>
                        Cloud Computing–the Globalisation of Data!
                      </h5>
                      Now, take everything the internet has achieved through the
                      World Wide Web technology, with the ability to send and
                      receive information from anywhere in the world to make
                      decisions and exchange that with the ability to compute
                      using both real time and historical data from anywhere in
                      the world to make decisions. The team scientist working on
                      a life changing drug can work in real time, with real time
                      data being managed, processed and communicated from
                      different parts of the world! The team in China does not
                      need to wait for the team in Africa to be done with
                      computing and then send the results over to them for a
                      next step of the process.
                    </p>
                    <br />
                    <p>
                      <h5 style={{ fontWeight: "600" }}>
                        Cloud Computing with Amazon Web Services
                      </h5>
                      With analytic services like{" "}
                      <a href="https://aws.amazon.com/emr/?c=a&sec=srv">
                        Amazon EMR
                      </a>{" "}
                      for big data processing,{" "}
                      <a href="https://aws.amazon.com/kinesis/?c=a&sec=srv">
                        Amazon Kinetics
                      </a>{" "}
                      for interactive analysis and{" "}
                      <a href="https://aws.amazon.com/opensearch-service/?c=a&sec=srv">
                        Amazon OpenSearch Service
                      </a>{" "}
                      for operational analysis; and with predictive analytics
                      and machine learning cloud services like{" "}
                      <a href="https://aws.amazon.com/sagemaker/?c=a&sec=srv">
                        Amazon SageMaker
                      </a>
                      , cloud computing really will rule the world as the
                      globalisation of data and powerful cloud computing
                      services such as these ones mentioned here become more and
                      more important to the development of our society in every
                      field of life that we can think of!
                    </p>
                    <br />
                    <p>
                      <h5 style={{ fontWeight: "600" }}>CloudPlexo and AWS</h5>
                      Whether you’re saving lives via remote surgery operations
                      or analysing the performance of your favourite sport team;
                      whether you’re predicting your company’s best selling
                      product on a global scale via big data analytics or your
                      pitching your million dollar idea to a VC; it doesn’t
                      matter the scale or purpose of your business operations
                      and / or needs, you can get it done on the cloud, and{" "}
                      <a href="http://cloudplexo.com">CloudPlexo</a> is here to
                      ensure that the management of your cloud environment is
                      the most cost effective, scalable, secure and efficient
                      while you focus on your core business processes.
                      <br />
                      <br />
                      CloudPlexo is an official{" "}
                      <a href="https://partners.amazonaws.com/partners/0010h00001jBnbSAAS/">
                        AWS Global Partner
                      </a>{" "}
                      that proactively assesses and monitors your cloud
                      environments based on operational excellence, security,
                      reliability, performance efficiency and cost optimization.
                      CloudPlexo provides both developers and management with
                      the insights needed to run an efficient, cost optimised,
                      lean and reliable cloud environment. Services: Cloud
                      Migration, Data Analytics.
                      <br />
                      <br />
                      You can{" "}
                      <a href="https://cloudplexo.com/professional-services">
                        learn more
                      </a>{" "}
                      about CloudPlexo and also{" "}
                      <a href="https://cloudplexo.com/contact-us">contact us</a>{" "}
                      for your Cloud Management and Consultancy services. With
                      over 20 years of combined experience, you’re sure to rule
                      your world with cloud computing services necessary to
                      accelerate your core business processes!
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
