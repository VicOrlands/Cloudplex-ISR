import React, { Component } from "react";
import {
  Col,
  Row,
  Input,
  Form,
  Label,
  Button,
  Container,
  FormGroup,
} from "reactstrap";
import bgimg from "../../../assets/images/1.jpg";
import FeatherIcon from "feather-icons-react";
import badge from "../../../assets/images/blog/blog45/searchAWSamplify.png";
import badge2 from "../../../assets/images/blog/Aws amplify.webp";
import Img1 from "../../../assets/images/blog/blog45/HostAWEBapp.png";
import Img2 from "../../../assets/images/blog/blog45/chooseAmplifyPlatfom.png";
import Img3 from "../../../assets/images/blog/blog45/authorizeGithubAmplify.png";
import Img4 from "../../../assets/images/blog/blog45/amplifySelectRepo.png";
import Img5 from "../../../assets/images/blog/blog45/amplifySelectBranch.png";
import Img6 from "../../../assets/images/blog/blog45/amplifyReview.png";
import Img7 from "../../../assets/images/blog/blog45/amplifyPomodoroApp.png";
import { CopyBlock, a11yDark } from "react-code-blocks";

const code1 = `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
`;

export default class BlogFortyFive extends Component {
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/how-to-deploy-and-host-your-web-app-on-aws-amplify"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/how-to-deploy-and-host-your-web-app-on-aws-amplify"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/how-to-deploy-and-host-your-web-app-on-aws-amplify"
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
                    <h2>How to Deploy and Host Your Web App on AWS Amplify</h2>
                    <br />
                    <img src={badge2} alt="awspartnerbadge" width="200px" />
                    <br />
                    <br />
                    <p>
                      AWS Amplify is a powerful service that simplifies the
                      process of deploying and hosting web applications. With
                      its ease of use and integration with various frontend
                      frameworks, deploying your app becomes straightforward. In
                      this tutorial, we'll walk through the steps required to
                      deploy a web app using AWS Amplify.
                    </p>
                    <p>Step 1: Sign in to the AWS Management Console</p>
                    <p>
                      Navigate to the{" "}
                      <a href="https://console.aws.amazon.com">
                        AWS Management Console
                      </a>{" "}
                      and sign in to your AWS account. If you don’t have an
                      account, you'll need to sign up.
                    </p>
                    <p>Step 2: Access AWS Amplify Console</p>
                    <p>
                      Once logged in, search for "Amplify" in the AWS services
                      search bar.
                      <img
                        src={badge}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </p>
                    <p>
                      Step 2: Click "New app" button and choose host a web app
                      <img
                        src={Img1}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </p>
                    <p>Step 3: Choose the platform your code is hosted</p>
                    <p>
                      Select your preferred Git provider (GitHub, Bitbucket,
                      GitLab, or AWS CodeCommit). In our case, we will be using
                      Github. Choose and click continue.
                      <img
                        src={Img2}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </p>
                    <p>Step 4: Authorize Amplify</p>
                    <p>
                      Authorize AWS Amplify to access your repository.
                      <img
                        src={Img3}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </p>

                    <p>
                      Choose the repository and branch that contains your web
                      app code.
                      <img
                        src={Img4}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                      <br />
                      <br />
                      <img
                        src={Img5}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </p>

                    <p>Click "Next."</p>

                    <ol>
                      <li>
                        Define your build settings:
                        <ul>
                          <li>
                            Select the framework or environment of your app
                            (React, Angular, Vue.js, etc.).
                          </li>
                          <li>
                            Configure the build settings like build commands,
                            output directory, etc.
                          </li>
                        </ul>
                      </li>
                      <li>Click "Next."</li>
                    </ol>

                    <p>
                      Framework and build settings can be auto detected, this
                      steps can be skipped if it does.
                    </p>

                    <p>
                      Also, if you require a custom build setting, In your
                      project root, you can add a amplify.yml where your can
                      have something like this:
                    </p>
                    <CopyBlock
                      text={code1}
                      language="javascript"
                      showLineNumbers={false}
                      theme={a11yDark}
                      codeBlock={{
                        lineNumbers: false,
                        wrapLines: true,
                      }}
                    />
                    <br />
                    <br />

                    <p>
                      Step 5: Review and Deploy
                      <img
                        src={Img6}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </p>

                    <ol>
                      <li>Review the settings to ensure they're correct.</li>
                      <li>
                        Click "Save and deploy" to trigger the deployment
                        process.
                      </li>
                    </ol>

                    <p>Step 6: Monitor the Deployment</p>
                    <p>
                      AWS Amplify will start the deployment process. You can
                      monitor the deployment progress in the Amplify Console. It
                      will automatically build and deploy your app based on the
                      configuration you provided.
                    </p>

                    <p>Step 7: View Your Deployed App</p>
                    <p>
                      Once the deployment is completed successfully: <br /> Here
                      is our pomodoro site built with nextjs
                      <img
                        src={Img7}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </p>

                    <ol>
                      <li>
                        Click on the link provided in the Amplify Console to
                        view your live web app.
                      </li>
                      <li>Ensure everything looks and works as expected.</li>
                    </ol>

                    <p>Step 8: Set Up Custom Domains (Optional)</p>
                    <p>If you want to use a custom domain for your app:</p>

                    <ol>
                      <li>
                        In the Amplify Console, go to "Domain management."
                      </li>
                      <li>
                        Follow the instructions to add and configure your custom
                        domain.
                      </li>
                    </ol>

                    <p>Step 9: Continuous Deployment (Optional)</p>
                    <p>
                      AWS Amplify supports continuous deployment, allowing
                      automatic updates whenever you push changes to your
                      repository:
                    </p>
                    <ol>
                      <li>
                        Enable the "Continuous deployment" option in the Amplify
                        Console.
                      </li>
                      <li>Choose the branch to monitor for changes.</li>
                      <li>
                        Any new commits to that branch will trigger automatic
                        redeployment.
                      </li>
                    </ol>

                    <p>
                      Congratulations! You've successfully deployed and hosted
                      your web app on AWS Amplify. Remember to manage your app
                      settings and monitor its performance regularly through the
                      Amplify Console.
                    </p>
                    <p>
                      Customize your deployment settings further based on your
                      app’s specific requirements. AWS Amplify offers a variety
                      of features for scaling, monitoring, and managing your
                      applications, making it a robust choice for hosting web
                      apps.
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
