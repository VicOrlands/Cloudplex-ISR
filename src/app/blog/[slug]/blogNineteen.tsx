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
import actionexample from "../../../assets/images/blog/github_actions/actions-example.png";
import actiontab from "../../../assets/images/blog/github_actions/action-tab.png";
import helloworkflow from "../../../assets/images/blog/github_actions/hello-workflow.png";
import githubactions from "../../../assets/images/blog/github_actions/github_actions.png";
import inspectworkflow from "../../../assets/images/blog/github_actions/inspect-workflow.png";
import newproject from "../../../assets/images/blog/github_actions/new-project.png";
import SEO from "../../../components/SEO";

export default class BlogNineteen extends Component {
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
          title="Getting Started with CI/CD Using GitHub Actions - A Step-by-Step Guide"
          description="Learn the basics of CI/CD using GitHub Actions. Discover how to automate your software development pipeline for continuous integration and continuous delivery"
          keywords="CI/CD with GitHub Actions, GitHub Actions, Continuous Integration, Continuous Delivery, Automate Software Development, GitHub CI/CD"
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/continuous-deployment-using-github-actions"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/continuous-deployment-using-github-actions"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/continuous-deployment-using-github-actions"
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
                    <h2 className="text-center mb-3">
                      Getting started with CI/CD using GitHub Actions
                    </h2>

                    <h4>What is CI/CD?</h4>

                    <p>
                      <strong>Continuous integration</strong> (CI) is a
                      development practice that requires frequently committing
                      code to a shared repository. Each commit is then
                      automatically verified and tested to detect integration
                      errors and failed tests as quickly as possible.
                    </p>

                    <p>
                      <strong>Continuous Delivery</strong> (CD) is an extension
                      of continuous integration. It allows developers to{" "}
                      <strong>safely</strong> experiment, fix bugs or include
                      new features in production.
                    </p>

                    <p>
                      The goal is to ensure code is always in a deployable
                      state, ready to go live.
                    </p>

                    <h4>What is GitHub Actions?</h4>

                    <p>
                      GitHub Actions is a CI/CD platform that allows you to
                      automate your test, build, and deployment pipeline. It
                      allows the creation of workflows based on a vast range of
                      events, such as pull requests, commits, issues, and more.
                    </p>

                    <h4>Workflows</h4>

                    <p>
                      A workflow is an orchestrated and automated process that
                      will run one or more <strong>jobs</strong> based on a
                      defined event.
                    </p>

                    <p>
                      Workflows are defined by a YAML file and should be placed
                      in the <code>.github/workflows</code> folder in your
                      repository.
                    </p>

                    <p>
                      Multiple workflows can be configured in a repository each
                      with a designed set of tasks to carry out based on what
                      event.
                    </p>

                    <h4>Events, Jobs &amp; Runners</h4>

                    <p>
                      An event is a specific activity in a repository that
                      triggers a workflow. Events can be commits, pull requests,
                      and issues among others.
                    </p>

                    <p>
                      Jobs are a series of steps in a workflow that will be
                      executed sequentially by the same runner.
                    </p>

                    <p>
                      A runner is a server that executes your workflows. Each
                      workflow is executed in a newly provided virtual machine
                      and can be configured with the desired operating system,
                      such as Linux, Windows, and macOS.
                    </p>

                    <h4>Workflow demo project</h4>

                    <p>
                      You can set up actions on a <strong>new</strong> or{" "}
                      <strong>existing</strong> Github project.
                    </p>

                    <img
                      src={newproject}
                      className="img-fluid mb-3"
                      alt="New project"
                    />

                    <p>
                      To create a Workflow, go to the <strong>Actions</strong>{" "}
                      tabs.
                    </p>

                    <img
                      src={actiontab}
                      className="img-fluid mb-3"
                      alt="Action tab"
                    />

                    <p>
                      Select the simple workflow and click{" "}
                      <strong>Configure</strong>
                    </p>

                    <img
                      src={actionexample}
                      alt="Actions example"
                      className="img-fluid mb-3"
                    />

                    <p>
                      Click <strong>Commit changes</strong> and Congratulations
                      for successfully configured actions in your repository.
                    </p>

                    <h4>Breaking down the workflow file</h4>

                    <img
                      src={githubactions}
                      alt="github-actions"
                      className="img-fluid mb-3"
                    />

                    <p>
                      <code>name</code> - The name of the workflow.
                    </p>

                    <p>
                      <code>on</code> - Events and Event rules that will trigger
                      the workflows.
                    </p>

                    <p>
                      <code>push</code> - action should be triggered on any push
                      action in the repository.
                    </p>

                    <p>
                      <code>branches: ['main']</code> - push and pull requests
                      only on the main branch.
                    </p>

                    <p>
                      <code>jobs</code> - Jobs that will be executed in the
                      workflow.
                    </p>

                    <p>
                      <code>hello</code> - the name of a job to be executed.
                    </p>

                    <p>
                      <code>runs-on: ubuntu-latest</code> - the name of the
                      operating system to carry out the job
                    </p>

                    <p>
                      <code>steps</code> - sequence of tasks to be executed.
                    </p>

                    <p>
                      <code>uses</code> - important for every action, if fetches
                      your latest commit or the specific branch, tag, or pull
                      request code for use within the workflow.
                    </p>

                    <p>
                      <code>name</code> - the name of the task.
                    </p>

                    <p>
                      <code>run</code> - This can be a single or series of
                      commands to execute.
                    </p>

                    <p>
                      You can inspect your workflow, in the{" "}
                      <strong>Action tab</strong>.
                    </p>

                    <img
                      src={helloworkflow}
                      className="img-fluid mb-3"
                      alt="Hello workflow"
                    />

                    <p>
                      Click on the <strong>job</strong> you've created to
                      further inspect.
                    </p>

                    <img
                      src={inspectworkflow}
                      className="img-fluid mb-3"
                      alt="Inspect workflow"
                    />

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
