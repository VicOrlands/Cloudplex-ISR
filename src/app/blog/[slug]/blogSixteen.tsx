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
import awsconfigure from "../../../assets/images/blog/images/aws-configure.png";
import choosetemplate from "../../../assets/images/blog/images/choose-template.png";
import selecttemplate from "../../../assets/images/blog/images/select-template.png";
import selectno from "../../../assets/images/blog/images/select-no.png";
import selectpython from "../../../assets/images/blog/images/select-python.png";
import selectzip from "../../../assets/images/blog/images/select-zip.png";
import ignoreno from "../../../assets/images/blog/images/ignore-nnnn.png";
import completedsam from "../../../assets/images/blog/images/completed-sam-init.png";
import projectstructure from "../../../assets/images/blog/images/project-structure.png";
import global from "../../../assets/images/blog/images/globals.png";
import resources from "../../../assets/images/blog/images/resources.png";
import code from "../../../assets/images/blog/images/code.png";
import testhandler from "../../../assets/images/blog/images/test-handler.png";
import samrun from "../../../assets/images/blog/images/sam-run.png";
import outputbrowser from "../../../assets/images/blog/images/output-browser.png";
import deployguide from "../../../assets/images/blog/images/deploy-guide.png";
import deployoutput from "../../../assets/images/blog/images/deploy-output.png";
import curl from "../../../assets/images/blog/images/curl.png";
import SEO from "../../../components/SEO";

export default class BlogSixteen extends Component {
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
          title="AWS SAM: Build, Test, and Deploy Serverless Applications - A Comprehensive Guide"
          description="Learn how to use AWS SAM (Serverless Application Model) to build, test, and deploy serverless applications with this step-by-step guide. Set up your environment, create a SAM project, and deploy your serverless functions."
          keywords="AWS SAM Guide, AWS Serverless Application Model, SAM Setup, Serverless App Deployment, AWS SAM Cleanup"
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-sam-build-test-and-deploy-serveless-applications"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-sam-build-test-and-deploy-serveless-applications"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-sam-build-test-and-deploy-serveless-applications"
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
                      <h1 className="atx">
                        AWS SAM - Build, Test and Deploy Serveless Applications.
                      </h1>
                      <h3 className="atx" id="what-is-sam">
                        What is SAM?
                      </h3>
                      <p>
                        Serverless Application Model (SAM) is a tool that
                        enables you to build, test, and deploy serverless
                        applications.
                      </p>
                      <h3 className="atx" id="why-sam">
                        Why SAM?
                      </h3>
                      <p>
                        With SAM, you can define the resources you need in a
                        YAML or JSON file, and AWS CloudFormation takes care of
                        creating those resources for you. SAM extends AWS
                        CloudFormation to provide a simplified way of defining
                        and utilizing AWS serverless application resources.
                      </p>
                      <h3 className="atx" id="setting-up-your-environment">
                        Setting up your environment
                      </h3>
                      <p>
                        In order to use SAM locally on your computer, you need
                        to have the following installed on your machine:
                      </p>
                      <ul>
                        <li>
                          <p>
                            Docker - It simulates the running environment of
                            Lambda on your local machine.
                          </p>
                          <p>
                            Visit{" "}
                            <a href="https://www.docker.com/products/docker-desktop">
                              here
                            </a>{" "}
                            to download.
                          </p>
                        </li>
                        <li>
                          <p>
                            AWS CLI - Allows you to authenticate and communicate
                            with your AWS account.
                          </p>
                          <p>
                            Visit{" "}
                            <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html">
                              here
                            </a>{" "}
                            to download.
                          </p>
                        </li>
                        <li>
                          <p>
                            SAM CLI - Enables you to create, test, and deploy
                            serverless applications.
                          </p>
                          <p>
                            Visit{" "}
                            <a href="https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html">
                              here
                            </a>{" "}
                            to download.
                          </p>
                        </li>
                        <li>
                          <p>Git - For versioning and tracking.</p>
                          <p>
                            Visit{" "}
                            <a href="https://git-scm.com/downloads">here</a> to
                            download.
                          </p>
                        </li>
                      </ul>
                      <p>
                        You can proceed to the next step after completing the
                        installations.
                      </p>
                      <h4 className="atx" id="configure-your-aws-cli">
                        Configure your AWS CLI
                      </h4>
                      <p>To authenticate with your AWS account:</p>
                      <ul>
                        <li>
                          <p>Navigate to your IAM management console.</p>
                        </li>
                        <li>
                          <p>Select your USER.</p>
                        </li>
                        <li>
                          <p>In the Security tab, locate Access keys.</p>
                        </li>
                        <li>
                          <p>
                            Generate a new Access Key and download the provided
                            CSV.
                          </p>
                        </li>
                      </ul>
                      <p>Run the following command:</p>
                      <pre>
                        <code className="fenced-code-block language-bash">
                          aws configure
                        </code>
                      </pre>
                      <p>Provide the requested information. Example:</p>
                      <img
                        src={awsconfigure}
                        alt="awsconfigure"
                        className="img-fluid"
                      />
                      <p>
                        You can continue to the next step if you have
                        successfully completed the previous steps.
                      </p>
                      <h3 className="atx" id="create-a-sam-project">
                        Create a SAM Project
                      </h3>
                      <p>
                        Run the following command to create a new SAM project:
                      </p>
                      <pre>
                        <code className="fenced-code-block language-bash">
                          sam init
                        </code>
                      </pre>
                      <p>
                        Enter <code>1</code> for the template.
                      </p>
                      <img
                        src={choosetemplate}
                        className="img-fluid"
                        alt="choosetemplate"
                      />
                      <p>
                        Enter <code>1</code> to select the Hello World Example.
                      </p>
                      <img
                        src={selecttemplate}
                        className="img-fluid"
                        alt="selecttemplate"
                      />
                      <p>
                        Enter <code>N</code> to select NO.
                      </p>
                      <img
                        src={selectno}
                        className="img-fluid"
                        alt="selectno"
                      />
                      <p>
                        Select the package you would like to use, in my case, I
                        will be using Python 3.8.
                      </p>
                      <img
                        src={selectpython}
                        className="img-fluid"
                        alt="selectpython"
                      />
                      <p>Select Zip as the required package.</p>
                      <img
                        src={selectzip}
                        className="img-fluid"
                        alt={"selectzip"}
                      />
                      <p>Ignore the following.</p>
                      <img
                        src={ignoreno}
                        className="img-fluid"
                        alt="ignoreno"
                      />
                      <p>
                        Enter a project name. A default name is already
                        provided, you can overwrite it with yours or click Enter
                        to continue.
                      </p>
                      <img
                        src={completedsam}
                        className="completedsam"
                        alt="completedsam"
                      />
                      <p>
                        Once completed, you can open the created folder in your
                        favorite code editor.
                      </p>
                      <img
                        src={projectstructure}
                        className="img-fluid"
                        alt="projectstructure"
                      />
                      <h3 className="atx" id="the-project-structure">
                        The project Structure
                      </h3>
                      <ul>
                        <li>
                          <p>
                            events folder - Contains event templates that you
                            can use to invoke the function.
                          </p>
                        </li>
                        <li>
                          <p>
                            hello_world folder - Contains code for the lambda
                            function.
                          </p>
                        </li>
                        <li>
                          <p>
                            tests folder - Contains tests for the application
                            code.
                          </p>
                        </li>
                        <li>
                          <p>
                            template.yml - Template that defines the application
                            resources, functions, and others.
                          </p>
                        </li>
                      </ul>
                      <h3 className="atx" id="what-in-the-template">
                        What's in the template?
                      </h3>
                      <h4 className="atx" id="globals">
                        Globals
                      </h4>
                      <p>
                        The Globals contain all configurations for every created
                        function using this template.
                      </p>
                      <p>
                        In this case, we have a timeout and memory size of 128MB
                        maximum.
                      </p>
                      <img src={global} className="img-fluid" alt="global" />
                      <h4 className="atx" id="resources">
                        Resources
                      </h4>
                      <p>
                        The resources contain all created functions and function
                        resources.
                      </p>
                      <img
                        src={resources}
                        className="img-fluid"
                        alt="resources"
                      />
                      <p>
                        In this Resource, we have a function called
                        HelloWorldFunction.
                      </p>
                      <p>Let's break down some properties:</p>
                      <h3 className="atx" id="the-code">
                        The Code
                      </h3>
                      <p>
                        In the app.py file, the default code should look
                        something like this:
                      </p>
                      <p>
                        <img alt="code" className="img-fluid" src={code} />
                      </p>
                      <p>
                        We can see that there is a function called{" "}
                        <code>lambda_handler</code>, which basically just
                        returns a JSON.
                      </p>
                      <p>
                        So when we test this function, we expect to see "hello
                        world" in the output!
                      </p>
                      <h3 className="atx" id="test">
                        Test
                      </h3>
                      <p>
                        <img
                          alt="test"
                          className="img-fluid"
                          src={testhandler}
                        />
                      </p>
                      <h4 className="atx" id="run-the-code">
                        Run the code
                      </h4>
                      <pre>
                        <code className="fenced-code-block language-bash">
                          sam local start-api --port 8080
                        </code>
                      </pre>
                      <p>
                        <img
                          alt="AWS SAM: Build, Test, and Deploy Serverless Applications - A Comprehensive Guide"
                          className="img-fluid"
                          src={samrun}
                        />
                      </p>
                      <p>
                        Open the URL in your browser and you will see "hello
                        world" on your browser screen.
                      </p>
                      <p>
                        <img
                          alt="AWS SAM: Build, Test, and Deploy Serverless Applications - A Comprehensive Guide"
                          className="img-fluid"
                          src={outputbrowser}
                        />
                      </p>
                      <p>
                        You can update the message and code without restarting
                        the server; it will automatically update.
                      </p>
                      <h4 className="atx" id="run-tests">
                        Run Tests
                      </h4>
                      <p>
                        The tests are created with pytest, so you need to
                        install it before running the tests.
                      </p>
                      <pre>
                        <code className="fenced-code-block language-bash">
                          pip3 install pytest pytest-mock python3 -m pytest
                          tests/unit
                        </code>
                      </pre>
                      <p>
                        Don't forget to update the test if you have made any
                        changes to the code.
                      </p>
                      <h3 className="atx" id="deploy">
                        Deploy
                      </h3>
                      <p>
                        In order to deploy our lambda function to AWS, we need
                        to first build it. This will tweak some things and
                        compress the project, including external dependencies
                        and packages, into a zip file.
                      </p>
                      <p>To build your project, run:</p>
                      <pre>
                        <code className="fenced-code-block language-bash">
                          sam build
                        </code>
                      </pre>
                      <p>You can now deploy your function to AWS with:</p>
                      <pre>
                        <code className="fenced-code-block language-bash">
                          sam deploy --guided
                        </code>
                      </pre>
                      <p>
                        Fill out the questions like the example in the picture,
                        and press Enter to skip.
                      </p>
                      <p>
                        <img
                          alt="deployguide"
                          className="img-fluid"
                          src={deployguide}
                        />
                      </p>
                      <p>
                        Once completed, the output will look something like
                        this:
                      </p>
                      <p>
                        <img
                          alt="deploy-output"
                          className="img-fluid"
                          src={deployoutput}
                        />
                      </p>
                      <p>
                        You can visit the URL provided in the{" "}
                        <strong>HelloWorldFunction</strong>
                      </p>
                      <p>
                        or use <strong>curl</strong>
                      </p>
                      <p>
                        <img alt="curl" src={curl} className="img-fluid" />
                      </p>
                      <p>
                        There you go! You have successfully built, tested, and
                        deployed a serverless application using AWS SAM.
                      </p>
                      <p>
                        You can inspect your build in CloudFormation in your AWS
                        console.
                      </p>
                      <h3 className="atx" id="clean-up">
                        Clean up
                      </h3>
                      <p>Run</p>
                      <pre>
                        <code className="fenced-code-block language-bash">
                          sam delete
                        </code>
                      </pre>
                      <p>
                        This will delete all resources and functions created on
                        AWS for this project.
                      </p>
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
