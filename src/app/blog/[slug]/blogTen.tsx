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
import blog1 from "../../../assets/images/blog/10.png";
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
          title="Accelerating Digital Transformation with CloudPlexo"
          description="Discover how CloudPlexo, in partnership with AWS, accelerates digital transformation by providing insights, cost optimization, and efficient cloud management"
          keywords="Digital Transformation, CloudPlexo, AWS, Cloud Adoption, Cost Optimization, Cloud-based Transformation, Cloud Management, Cloud Optimization, AWS Partnership, Digitalization Strategy"
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
                    {" "}
                    Digitization - How Does The Cloud Enable Agile Digital
                    Transformations?{" "}
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network"
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
                          <i className="mdi mdi-account text-dark" /> Omotola
                          Dorcas
                        </Link>
                      </li>
                      <li className="list-inline-item date text-muted">
                        <i className="mdi mdi-calendar-check text-dark" /> 15th
                        July, 2022
                      </li>
                    </ul>

                    <img
                      src={blog1}
                      className="img-fluid rounded-md shadow"
                      alt="img"
                      style={{ width: "1000px" }}
                    />

                    <br />
                    <br />

                    <p>
                      <span style={{ fontWeight: "800" }}>
                        Digital Transformation
                      </span>
                      <br />A successful digital transformation implementation
                      should result in the organization having a clear vision
                      and purpose - one that serves their customers, partners,
                      and employees. Digital transformation is different to
                      Digitization or digitalization. They all leverage on
                      people and technology but are independent concept.
                    </p>

                    <p>
                      In lay term, Digital transformation means using technology
                      to optimize the ways of doing business to drive growth in
                      new and existing markets, of course this could mean
                      something different for other organization, but the core
                      factor to consider in digital transformation are:
                    </p>

                    <p>
                      Re-invention, Re-alignment, Renewal of business models/
                      operation through leveraging technology (tools,
                      application, methodology or concept), people skills and
                      competencies to drive better business result and
                      performance that will benefit the organization, the
                      customer and the market.
                    </p>

                    <p>
                      <span style={{ fontWeight: "800" }}>Digitization</span>,
                      basically, is the process of conversion of information
                      embedded in physical documents, from analog to digital. It
                      ensures such information can have wider reach, readily
                      accessible, compatibility and easily shared.
                    </p>
                    <p>
                      <span style={{ fontWeight: "800" }}>Digitalization</span>{" "}
                      is the process of using digitized information to work more
                      simply, efficiently, and stay agile.
                    </p>

                    <p>
                      <span style={{ fontWeight: "800" }}>Cloud Computing</span>{" "}
                      is an internet-based computing where central remote
                      servers maintain all the data and applications. It allows
                      Consumers to rent physical infrastructure from a third
                      party provider (cloud service provider, like AWS). As a
                      result, with internet access Consumers and Businesses use
                      Applications and Infrastructure and access their personal
                      files from any computer. It provides a number of IT
                      services like networking, software, server among the
                      others.
                    </p>

                    <p>
                      You have to pay only for your usage instead of paying
                      upfront ( pay-per –use basis). Your all data is stored in
                      your servers and all the servers are located at the place
                      called Data Center which can be owned and maintained by a
                      third party or you.
                    </p>
                    <h5>Why Cloud ?</h5>
                    <p>
                      Most organizations want to survive, they want to stay at
                      the edge of competition and as a result embrace digital
                      transformation through digitalization and technology.
                    </p>
                    <p>
                      The pursuit for survival by organizations and the desire
                      to have a blueprint for innovation and growth in the
                      future paves the way for cloud adoption by businesses.
                      Aside this, Agility, and cost effectiveness comes at the
                      top.
                    </p>

                    <h5>
                      Other ways that cloud enable digital transformation are
                      highlighted below:
                    </h5>
                    <ol>
                      <li>
                        Save Cost: It enables organisations to scale
                        infrastructure as needed to support changing business
                        priorities, while lowering the risks of wasted IT
                        resources, which have previously hampered investments in
                        new digital services. We help you identify, eliminate,
                        and avoid unneeded costs and underutilized resources
                        such as Low Utilization Amazon EC2 Instances,Idle Load
                        Balancers, Underutilized EBS Volumes, RDS idle DB
                        Instances—save 15-40% or more.
                      </li>
                      <li>
                        Security: Cloud offers better protection from data
                        breaches and system shutdowns. It has advanced features
                        dedicated for security purpose ensuring that data are
                        secured. We help our clients get security risks
                        assessment and non-compliance, to avoid breaches and
                        achieve compliance with industry standards. Scans to
                        identify accessible resources, ports, and protocols to
                        reduce your attack surface area.
                      </li>
                      <li>
                        Collaboration: Cloud provides amazing tools and
                        applications for collaborative practices and to keep
                        business processes, operations and management activities
                        efficient. It allows for quick deployment of effective
                        solutions to solving business problems and sharing of
                        ideas and solution across multiple departments and
                        organization. It offers a way to store, process, and
                        share information with anyone around the world.
                      </li>
                      <li>
                        Reliability: CloudPlexo monitoring and alerts can
                        mitigate infrastructure or service
                        disruptions.Monitoring the encryption of data at rest,
                        Amazon RDS Backups, Amazon RDS Multi-AZ,Amazon S3 Bucket
                        Logging, EBS volumes snapshots and more.
                      </li>
                      <li>
                        Performance Efficiency: Monitor your service limits and
                        how close you are to them to efficiently manage your AWS
                        Workloads enables you to request limit increases before
                        the limit is reached. Monitoring and alerts for resource
                        limits reached across multiple AWS products.
                      </li>
                      <li>
                        Big Data Analytics: The cloud provides with immunity to
                        store and analyze data of any size on the World Wide
                        Web. It empowers service providers to often utilize a
                        “software as a service” model to allow customers to
                        easily access and process data on the cloud.
                      </li>
                      <li>
                        Accessibility to cloud services: Cloud helps to
                        accelerate Big Data and business intelligence computing
                        operations by enabling software modernization through
                        micro services. It ensures streamlining and simplifying
                        business applications, fastening time to market, and
                        meeting customer demands effectively.
                      </li>
                      <li>
                        {" "}
                        Operational Excellence: With our help, you can gain
                        insights into your cloud operations, and continuously
                        improve processes and procedures to deliver business
                        value to your customers
                      </li>
                    </ol>
                    <h5>Case Study :</h5>
                    <p>
                      Geria is a company based in the United Kingdom. They
                      connect talented software engineers, developers,
                      designers, and project managers from Africa to UK
                      technology companies. They had a really huge problem;
                      their team at Geria was unable to manage the process of
                      their cloud environment and infrastructure in order to
                      discover areas cloud optimization can be applied to reduce
                      spend. This set them on a search for a high-level
                      management tool to help manage their cloud environment.
                      Thankfully, they found CloudPlexo. We provided them CMP,
                      and through continuous monitoring, total visibility of
                      operations spending, identifying underutilized and idle
                      resources. As a result Geria was able to make significant
                      cost savings of up to 28% in record time.
                    </p>
                    <h4>Conclusion</h4>
                    <p>
                      The major challenge often encountered in the journey
                      toward cloud adoption for Digital transformation, is that
                      to most decision makers, cloud represents a new way of
                      working and mindset, which some are not ready to navigate
                      because of fear and uncertainty. To help overcome this
                      fear is why this blog post was created among others.
                      <br />
                      And in partnership with AWS, we are positioned at
                      CloudPlexo to provide developers and management with
                      insight needed to run a secured, efficient, lean,
                      cost-optimized and reliable cloud environment, enabling
                      your cloud transformation goals It is to serve as a
                      blueprint to understanding the role of cloud in fostering
                      your business transformation.
                      <br />
                      We provide services that helps modernize your applications
                      in the cloud and fulfill the need to continuously monitor
                      your workloads against best practices and control cost.
                      Wendu enables you to monitor and operate a
                      well-architected infrastructure that is secure, efficient,
                      reliable, operationally excellent, and cost-optimized with
                      full visibility and control over your cloud spend and
                      operations in multiple cloud environments on one platform.
                      <br />
                      <br />
                      What You will be able to do?
                      <ul>
                        <li>
                          {" "}
                          Gain continuous insights into your AWS workloads and
                          infrastructure
                        </li>
                        <li>
                          Receive reports on the health of infrastructure based
                          on AWS best practices
                        </li>
                        <li>
                          Engineer well-architected cloud environments using
                          Wendu
                        </li>
                      </ul>
                      <br />
                      To learn more about how to begin your journey towards
                      Cloud Adoption, contact CloudPlexo at
                      support@cloudplexo.com.
                    </p>

                    <h5 className="mt-4">Comments :</h5>

                    {/* <ul className="media-list list-unstyled mb-0">
                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="media align-items-center">
                            <Link to="pr-3" href="#">
                              <img
                                src={client1}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="text-dark media-heading"
                                >
                                  Lorenzo Peterson
                                </Link>
                              </h6>
                              <small >
                                15th August, 2019 at 01:25 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" >
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted font-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </li>

                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="media align-items-center">
                            <Link to="pr-3" href="#">
                              <img
                                src={client2}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="media-heading text-dark"
                                >
                                  Tammy Camacho
                                </Link>
                              </h6>
                              <small >
                                15th August, 2019 at 05:44 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" >
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted font-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </li>

                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="media align-items-center">
                            <Link to="pr-3" href="#">
                              <img
                                src={client3}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="media-heading text-dark"
                                >
                                  Tammy Camacho
                                </Link>
                              </h6>
                              <small >
                                16th August, 2019 at 03:44 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" >
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted font-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>

                        <ul className="list-unstyled pl-4 pl-md-5 sub-comment">
                          <li className="mt-4">
                            <div className="d-flex justify-content-between">
                              <div className="media align-items-center">
                                <Link to="pr-3" href="#">
                                  <img
                                    src={client1}
                                    className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                    alt="img"
                                  />
                                </Link>
                                <div className="commentor-detail">
                                  <h6 className="mb-0">
                                    <Link
                                      to="#"
                                      className="text-dark media-heading"
                                    >
                                      Lorenzo Peterson
                                    </Link>
                                  </h6>
                                  <small >
                                    17th August, 2019 at 01:25 pm
                                  </small>
                                </div>
                              </div>
                              <Link to="#" >
                                <i className="mdi mdi-reply"></i> Reply
                              </Link>
                            </div>
                            <div className="mt-3">
                              <p className="text-muted font-italic p-3 bg-light rounded">
                                " There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour "
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul> */}

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
