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
import blog1 from "../../../assets/images/work/cloudnative.jpeg";
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
          title="The Benefits of Building a Cloud-Native Company"
          description="Discover the advantages of creating a cloud-native company, including micro-scalability, faster product delivery, optimized security, cost efficiency, and more."
          keywords="Cloud-native company, benefits of cloud-native architecture, micro-scalability, cloud security, cost optimization, Cloud-native business advantages, cloud-native organization benefits, cloud-native company features"
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
                    The Benefits of Building a Cloud-Native Company{" "}
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/the-benefits-of-building-a-cloud-native-company"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/the-benefits-of-building-a-cloud-native-company"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/the-benefits-of-building-a-cloud-native-company"
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
                          <i className="mdi mdi-account text-dark" /> Veronique
                          MB
                        </Link>
                      </li>
                      <li className="list-inline-item date text-muted">
                        <i className="mdi mdi-calendar-check text-dark" /> 12th
                        May, 2021
                      </li>
                    </ul>

                    <img
                      src={blog1}
                      className="img-fluid rounded-md shadow"
                      alt="The Benefits of Building a Cloud-Native Company"
                    />

                    <br />
                    <br />

                    <p>
                      <span style={{ fontWeight: "800" }}> </span>
                      Building a cloud-native company, firm, business or
                      organization implies leveraging the full potential of the
                      cloud to build and run loosely coupled systems that are
                      resilient, manageable, and observable.
                      <br />
                      <br />
                      Migrating digital operations and resources from
                      traditional servers or hosting services to a cloud
                      infrastructure can directly translate to changing
                      environments but not changing behaviors or practices.
                      Therefore, cloud users with non-cloud-native digital
                      operations and resources such as softwares are only
                      capable of accessing the most basic and generic offerings
                      of the cloud which is not far from what a traditional data
                      infrastructure offers.
                      <br />
                      <br />
                      The need to build a cloud-native company, firm, business
                      or organization is as important as the choice of migrating
                      to the cloud, as this provides first-hand access to
                      broader and operation-aligned capabilities within private,
                      public or hybrid cloud environments. Here are some of the
                      underlying benefits or potentials of building a company
                      whose operations are significantly cloud-native
                    </p>
                    <h5>Micro-Scalability</h5>
                    <p>
                      Developing and running loosely coupled systems are typical
                      techniques that enable quasi-independent life-cycle of
                      each system component through the use of cloud containers,
                      a process also known as containerization. With this
                      capability, a cloud-native company can scale specific
                      system components based on demands or operational
                      requirements without the need to scale the entire system,
                      thereby optimizing the dynamic resource allocation
                      potential of the cloud to benefit the company and its
                      customers as well as increase the efficiency rate of the
                      cloud infrastructure. For example, CloudPlexo cost
                      management platform incorporates right-sizing
                      recommendations to reduce inefficient usage of oversized
                      cloud resources.
                    </p>
                    <h5>Faster Release/Delivery of Product and Services</h5>
                    <p>
                      The ability to modify or develop only selected components
                      of a system or subsystems based on demands or requirements
                      gives a cloud-native company the power to enviably
                      implement or deliver new products and services in a
                      shorter time as only the component or subsystem will be
                      developed or modified with no fear of breaking the entire
                      system.
                    </p>
                    <h5>Smart/Responsive Experience</h5>
                    <p>
                      The word “smart” now has market places and if a company is
                      built with a cloud-native architecture, its products and
                      services can easily get a significant share of such
                      markets. As seen with the outbreak COVID 19, the needs of
                      digital services and products users became concentrated on
                      certain offerings such as ecommerce, news, health,
                      teleconferencing, and remote work application services. In
                      a case where any of these services are parts of a
                      cloud-native company system, resource allocation can be
                      automatically modified for the particular service to meet
                      the spike in traffic and efficiently manage emergencies.
                      Smart solutions are not just expected to meet the dynamic
                      needs of users but also to meet the dynamic
                      infrastructural and financial strength of the provider as
                      well as the ever-changing managerial operations of the
                      firm.
                    </p>
                    <h5>Optimized Security</h5>
                    <p>
                      There are specific attack techniques for specific digital
                      operations and as such, there is a need to provide
                      specialised security for each service to enable
                      reliability and advanced resiliency in cyberspace.
                      Companies with cloud-native systems can achieve this level
                      of security more efficiently and faster.
                    </p>

                    <h5>Distributed Disaster Management</h5>

                    <p>
                      Disaster management is significantly easier and precise on
                      cloud-native applications due to its distributed nature
                      enabled by containerization.
                    </p>

                    <h5>Easy Automation</h5>
                    <p>
                      With the recent breakthroughs in AIOps, cloud users are
                      eager to hop on advanced automation solutions. However,
                      only cloud-native companies are exposed to the ultimate
                      offerings of these automation technologies.
                    </p>

                    <h5>Cost Optimization</h5>

                    <p>
                      The first opportunity the cloud provides is cost-efficient
                      scalability and of what use is migrating to the cloud and
                      still spending more than other cloud users? Hence,
                      transform your company to a cloud-native one and enjoy the
                      extra savings on cost of operations. Cloud management
                      platforms such as CloudPlexo’s give users insight into
                      current cloud spend as well as forecasted spending and
                      cost reduction strategies. Overall, cloud-native companies
                      have the potential to provide a faster, more secure and
                      more efficient service for both users and developers.
                      Businesses can leverage this opportunity to deliver the
                      best to customers and clients and maintain the ability to
                      be scalable, adaptable and agile.
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
