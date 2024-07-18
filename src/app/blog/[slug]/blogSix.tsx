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
//Import Icons
import FeatherIcon from "feather-icons-react";
//Import Images
import logolight from "../../../assets/images/logo-light.png";
import logodark from "../../../assets/images/logo-dark.png";
import bgimg from "../../../assets/images/1.jpg";
import blog1 from "../../../assets/images/awswellarchitect.jpg";
import SEO from "../../../components/SEO";

export default class PageBlogDetailTwo extends Component {
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
          title="Aligning CloudPlexo with the AWS Well-Architected Framework"
          description="Discover how CloudPlexo aligns with the AWS Well-Architected Framework, offering users the ability to assess, monitor, and optimize their cloud workloads across multiple AWS cloud environments."
          keywords="AWS Well-Architected Framework, CloudPlexo, cloud management, cloud workloads, 5 pillars of best practices, cloud infrastructure management, AWS cloud environments, cloud workload assessment, cloud cost optimization"
        />
        <section
          className="bg-half-breadcrumb d-table w-100"
          style={{ background: `url(${bgimg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level">
                  <h4 className="title text-white title-dark">
                    {" "}
                    AWS Well-Architected Alignment using CloudPlexo Platform{" "}
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-well-architected-framework-alignment"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-well-architected-framework-alignment"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-well-architected-framework-alignment"
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
                          <i className="mdi mdi-account text-dark"></i>{" "}
                          Veronique MB
                        </Link>
                      </li>
                      <li className="list-inline-item date text-muted">
                        <i className="mdi mdi-calendar-check text-dark"></i>{" "}
                        25th May, 2021
                      </li>
                    </ul>

                    <img
                      src={blog1}
                      className="img-fluid rounded-md shadow"
                      alt="Aligning CloudPlexo with the AWS Well-Architected Framework"
                    />

                    <br />
                    <br />

                    <p>
                      <h4>
                        Are you using the AWS cloud? Are you confident that
                        you’ve designed secure, lean and reliable applications
                        in the cloud? Do you want to assess and monitor
                        infrastructure for technology risk, resilience and
                        agility, while Optimising cost?{" "}
                      </h4>
                      <br />
                      Focusing on supporting the efficient management of AWS
                      cloud, the AWS Well-Architected framework is provided to
                      help cloud architects build secure, high-performing,
                      resilient, and efficient infrastructure for their
                      applications and workloads based on best practices.
                      <br />
                      <br />
                      In line with this AWS Well-Architected framework,
                      CloudPlexo has built its cloud management platform to
                      enable our users to assess and monitor their cloud
                      workloads based on the 5 Pillars of AWS well-architected
                      framework and thereby enabling our customers to operate an
                      AWS Well- Architected cloud.
                      <br />
                      <br />
                      Furthermore, CloudPlexo CCMP extends best practices that
                      underlie the AWS Well-Architected Framework across
                      multiple AWS cloud environments, providing a consistent
                      approach and automated tool for customers and partners to
                      evaluate cloud applications and workloads against AWS
                      Well-Architected Framework best practices. Let’s take a
                      quick look at the AWS 5 pillars of best practices and
                      their significance in cloud operations which clearly
                      aligns with the offerings of CloudPlexo;
                    </p>
                    <h5>Operational excellence</h5>
                    <p>
                      The operational excellence pillar ensures that
                      organizations gets streamlined supports for their business
                      objectives, having the ability to run workloads
                      effectively, gaining insight into their operations, and
                      continuously improving supporting processes and procedures
                      to deliver business value.
                    </p>
                    <h5>Security</h5>
                    <p>
                      The security pillar focuses on taking advantage of cloud
                      technologies to protect data, systems, and assets in a way
                      that can improve the security posture of businesses,
                      organizations, and agencies. This pillar further features
                      in-depth, best-practice design principles for architecting
                      secure workloads on AWS.
                    </p>
                    <h5>Reliability</h5>
                    <p>
                      This pillar encompasses the ability of a workload to
                      perform its intended function correctly and consistently
                      when it’s expected to. This includes the ability to
                      operate and test the workload through its total lifecycle
                      with optimal implementation of distributed system design,
                      recovery planning, and change management.
                    </p>
                    <h5>Performance efficiency</h5>
                    <p>
                      The performance efficiency pillar focuses on the efficient
                      use of computing resources to meet requirements, and how
                      to maintain efficiency as demand changes and technologies
                      evolve. This involves optimized selection, review,
                      monitoring, and trade-off analysis.
                    </p>

                    <h5>Cost optimization</h5>

                    <p>
                      The cost optimization pillar lays emphasis on aligning
                      cost with the rate of resource consumption. This includes
                      configuring notifications on exceeding usage or cost
                      threshold, using the right pricing model for workload
                      resources, providing cost and usage analysis with visual
                      friendly representations, and offering a Cost and Usage
                      Report (CUR) which will allow users to answer the most
                      challenging questions on usage and cost.
                    </p>

                    <br />
                    <p>
                      CloudPlexo cloud management enables its users to monitor
                      and operate a well-architected cloud infrastructure with
                      full visibility and control over resources and
                      expenditures across multiple cloud environments.
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
