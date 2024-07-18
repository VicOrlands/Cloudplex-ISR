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
import lambdasearch from "../../../assets/images/blog/images/lambdasearch.png";
import createfunction from "../../../assets/images/blog/images/create-function.png";
import createfunctionpage from "../../../assets/images/blog/images/create-function-page.png";
import functionname from "../../../assets/images/blog/images/function-name.png";
import boilerplate from "../../../assets/images/blog/images/boilerplate-code.png";
import deploychanges from "../../../assets/images/blog/images/deploy-changes.png";
import configuretest from "../../../assets/images/blog/images/configure-test.png";
import edittest from "../../../assets/images/blog/images/edit-test.png";
import selecttest from "../../../assets/images/blog/images/select-test.png";
import deletefunction from "../../../assets/images/blog/images/delete-function.png";
import SEO from "../../../components/SEO";

export default class BlogFifteen extends Component {
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
          title="AWS Lambda - Your Guide to Serverless Application Development"
          description="Learn about AWS Lambda and how to create serverless applications with this comprehensive guide. Get started with your first function, testing, and cleanup."
          keywords="AWS Lambda Introduction, Serverless Application Development, AWS Lambda Basics, Writing Serverless Functions, AWS Lambda Cleanup"
        />

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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-lambda-introduction-to-writing-serverless-applications"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-lambda-introduction-to-writing-serverless-applications"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-lambda-introduction-to-writing-serverless-applications"
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
                    <article className="markdown-body">
                      <h1
                        className="atx"
                        id="aws-lambda---introduction-to-writing-serverless-applications"
                      >
                        AWS lambda - Introduction to writing serverless
                        applications
                      </h1>
                      <h3 className="atx" id="what-is-serverless">
                        What is serverless
                      </h3>
                      <p>
                        Serverless is a cloud native development model that
                        allows developers to build and run applications without
                        having to manage servers.
                      </p>
                      <p>
                        In a serverless model, a cloud provider( such as AWS,
                        Microsoft Azure, and Google Cloud) automatically
                        allocates resources, takes care of servers, operating
                        systems and scaling if needed. This way developers can
                        focus on what really matters - i.e "INNOVATION".
                      </p>
                      <h3 className="atx" id="what-is-AWS-lambda">
                        What is AWS lambda?
                      </h3>
                      <p>
                        AWS lambda is or lambda is a serverless service provided
                        by Amazon web services. It allows developers to write
                        code without having to worry about servers.
                      </p>
                      <p>
                        In lambda, you can write code in any preferred language,
                        such as python, nodejs, ruby, go, and more. The code can
                        then be uploaded to lambda and automatically executed
                        based on event triggers from sources such as S3 bucket,
                        and other configured triggers.
                      </p>
                      <h3 className="atx" id="write-your-first-lambda-function">
                        Write your first lambda function
                      </h3>
                      <p>
                        I will walk you through the basics of lambda and how to
                        create and write your first serverless function with
                        lambda, and also how to test your function by manually
                        invoking your function with sample event data.
                      </p>
                      <h4 className="atx" id="signing-up-for-aws">
                        Signing up for AWS
                      </h4>
                      <p>
                        Before getting started, you need to create an AWS
                        account using the following link
                      </p>
                      <p>
                        <a href="https://aws.amazon.com/resources/create-account">
                          https://aws.amazon.com/resources/create-account
                        </a>
                      </p>
                      <h4 className="atx" id="locating-lambda">
                        Locating lambda
                      </h4>
                      <p>
                        Once you’ve signed into your console, search for
                        ‘lambda’ in the search box. Select lambda from the
                        search result.
                      </p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={lambdasearch}
                        className="img-fluid"
                      />
                      <h4 className="atx" id="create-your-first-function">
                        Create your first function
                      </h4>
                      <p>
                        In the lambda page, click on{" "}
                        <strong>create function</strong>.
                      </p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={createfunction}
                        className="img-fluid"
                      />
                      <p>
                        Once you click on the create function, it takes you to a
                        page, the page contains a lot of information and options
                        you don’t have to worry about for now.
                      </p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={createfunctionpage}
                        className="img-fluid"
                      />
                      <p>
                        The only fields we will be filling out are the function{" "}
                        <strong>name</strong>, and select a{" "}
                        <strong>runtime</strong> language you wish to use. We
                        will be using <strong>python3.9</strong> for this demo.
                      </p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={functionname}
                        className="img-fluid"
                      />
                      <p>
                        Click <strong>Create function</strong> at the bottom of
                        the page.
                      </p>
                      <p>
                        On the page you are redirected to, you see more details,
                        settings and features of the function you just created.
                        The only section we will worry about is the code
                        section.
                      </p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={boilerplate}
                        className="img-fluid"
                      />
                      <h4 className="atx" id="whats-happening-in-the-code">
                        What’s happening in the code?
                      </h4>
                      <p>
                        We already have a boilerplate hello world code, to give
                        you an overview of what is happening. The lambda_handler
                        function is the entry point i.e the function that gets
                        executed once the lambda has been invoked. The body of
                        the function is super straightforward, you can modify
                        and throw in your own code as well.
                      </p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={deploychanges}
                        className="img-fluid"
                      />
                      <p>
                        We have modified the code to some calculations, and
                        we’ve replaced the hello world in the body of the json
                        with the <strong>multiplication result</strong>, just to
                        simulate what we will be getting back in a real world
                        scenario.
                      </p>
                      <strong>Note</strong>: click the <strong>deploy</strong>{" "}
                      button to any changes you make to the code
                      <h4 className="atx" id="creating-tests">
                        Creating Tests
                      </h4>
                      <p>
                        Expand the <strong>dropdown</strong> in the{" "}
                        <strong>Test</strong> button, and click configure test.
                      </p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={configuretest}
                        className="img-fluid"
                      />
                      <p>A dialog box that looks like this will appear.</p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={edittest}
                        className="img-fluid"
                      />
                      <p>
                        Enter a <strong>name</strong> for your test event, make
                        sure to select <strong>hello-world</strong> from the
                        templates and click <strong>Save</strong>.
                      </p>
                      <p>
                        Select the test event you just created, then click{" "}
                        <strong>Test</strong>.
                      </p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={selecttest}
                        className="img-fluid"
                      />
                      <p>
                        Congratulations, you have successfully created and
                        tested your first serverless function.
                      </p>
                      <h4 className="atx" id="cleaning-up">
                        Cleaning up
                      </h4>
                      <p>To delete the created function.</p>
                      <img
                        alt="AWS Lambda - Your Guide to Serverless Application Development"
                        src={deletefunction}
                        className="img-fluid"
                      />
                    </article>

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
