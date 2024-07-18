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
import bgimg from "../../../assets/images/1.jpg";
import FeatherIcon from "feather-icons-react";
import badge from "../../../assets/images/blog/awspartnerbadge.png";

export default class BlogTwentySix extends Component {
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/amazon-api-gateway-service-delivery-enhancing-efficiency-and-connectivity"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/amazon-api-gateway-service-delivery-enhancing-efficiency-and-connectivity"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/amazon-api-gateway-service-delivery-enhancing-efficiency-and-connectivity"
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
                      Approved: Amazon API Gateway Service Delivery Enhancing
                      Efficiency and Connectivity
                    </h2>
                    <br />
                    <img src={badge} alt="awspartnerbadge" width="200px" />
                    <br />
                    <br />
                    <p>
                      In the dynamic landscape of technology, connectivity and
                      efficiency stand as pillars of success. We are excited to
                      announce a significant achievement that promises to
                      elevate our customers' experiences. We're glad to share
                      that CloudPlexo has now been approved as a provider of
                      Amazon API Gateway Service Delivery. This opens new
                      avenues for seamless integration, enhanced scalability,
                      and fortified security. In this blog post, we delve into
                      the value this approval brings to our customers and the
                      remarkable opportunities it unlocks.
                    </p>
                    <p>
                      At the heart of modern business operations lies the Amazon
                      API Gateway, a fully managed service that simplifies the
                      creation, deployment, and management of APIs. This
                      versatile tool empowers businesses to build APIs that
                      bridge gaps between applications and services,
                      revolutionising the way we connect and interact. A good
                      example is payment gateway APIs which enable fintech
                      applications to process online payments securely.
                    </p>
                    <p>
                      To obtain this approval our dedicated team embraced
                      challenges head-on, ensuring that every criterion was met
                      with precision. This approval stands as a testament to our
                      commitment to our unwavering dedication to delivering
                      top-tier solutions. It also goes to validate AWS Partners
                      that have deep technical knowledge, experience, and proven
                      success in delivering specific AWS services to customers.
                    </p>
                    <p>
                      Amazon API Gateway is a managed service that allows you to
                      create, publish, maintain, monitor, and secure APIs at any
                      scale. This offers many benefits to businesses including:
                    </p>
                    <p>
                      <strong>Scalability and Flexibility:</strong>
                      Scaling applications to meet user demand is now a breeze
                      with the AWS API Gateway. Our customers gain the ability
                      to effortlessly adapt to fluctuations in traffic, ensuring
                      optimal performance and minimal downtime.
                    </p>
                    <p>
                      <strong>Seamless Integration:</strong> Imagine a world
                      where different systems collaborate harmoniously. The API
                      Gateway turns this into a reality by facilitating the
                      integration of diverse services, resulting in streamlined
                      workflows that boost productivity and efficiency.
                    </p>
                    <p>
                      <strong>Enhanced Security:</strong>
                      Security is paramount, and the API Gateway takes it to new
                      heights. Built-in authentication and authorization
                      mechanisms safeguard data and ensure that our customers'
                      information remains in safe hands.
                    </p>
                    <p>
                      <strong>Cost Savings:</strong>We understand the
                      significance of cost efficiency. With the API Gateway's
                      pay-as-you-go pricing model, our customers pay only for
                      the resources they utilise, leading to potential cost
                      savings without compromising on quality.
                    </p>
                    <br />
                    <p>
                      Are you ready to unlock the full potential of connectivity
                      and efficiency? Contact our expert team to learn more
                      about integrating the API Gateway into your projects.
                      Email{" "}
                      <a href="mailto:contact@cloudplexo.com">
                        contact@cloudplexo.com
                      </a>{" "}
                      to get more insight about this service and the ways it can
                      transform your business operations.
                    </p>
                    <p>
                      As we celebrate this feat, we invite you to embark on a
                      journey of innovation and transformation. The power to
                      seamlessly integrate, securely connect, and efficiently
                      scale awaits at your business.
                      <br />
                      CloudPlexo is committed to bringing you solutions that
                      redefine possibilities of connectivity and efficiency.
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
