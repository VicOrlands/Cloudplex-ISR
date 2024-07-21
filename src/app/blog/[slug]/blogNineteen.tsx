"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import actionexample from "@/assets/blog/github_actions/actions-example.webp";
import actiontab from "@/assets/blog/github_actions/action-tab.webp";
import helloworkflow from "@/assets/blog/github_actions/hello-workflow.webp";
import githubactions from "@/assets/blog/github_actions/github_actions.webp";
import inspectworkflow from "@/assets/blog/github_actions/inspect-workflow.webp";
import newproject from "@/assets/blog/github_actions/new-project.webp";
import cover from "@/assets/blog/githubactions.webp"

{/* <SEO
  title="Getting Started with CI/CD Using GitHub Actions - A Step-by-Step Guide"
  description="Learn the basics of CI/CD using GitHub Actions. Discover how to automate your software development pipeline for continuous integration and continuous delivery"
  keywords="CI/CD with GitHub Actions, GitHub Actions, Continuous Integration, Continuous Delivery, Automate Software Development, GitHub CI/CD"
/> */}

export default class BlogNineteen extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/continuous-deployment-using-github-actions"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/continuous-deployment-using-github-actions"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/continuous-deployment-using-github-actions"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </Link>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h1>
            Getting started with CI/CD using GitHub Actions
          </h1>
          <br />
          <Image src={cover} alt="Getting started with CI/CD using GitHub Actions" />
          <br />
          <br />
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

          <Image
            src={newproject}
            alt="New project"
          />

          <p>
            To create a Workflow, go to the <strong>Actions</strong>{" "}
            tabs.
          </p>

          <Image
            src={actiontab}
            alt="Action tab"
          />

          <p>
            Select the simple workflow and click{" "}
            <strong>Configure</strong>
          </p>

          <Image
            src={actionexample}
            alt="Actions example"
          />

          <p>
            Click <strong>Commit changes</strong> and Congratulations
            for successfully configured actions in your repository.
          </p>

          <h4>Breaking down the workflow file</h4>

          <Image
            src={githubactions}
            alt="github-actions"
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

          <Image
            src={helloworkflow}
            alt="Hello workflow"
          />

          <p>
            Click on the <strong>job</strong> you've created to
            further inspect.
          </p>

          <Image
            src={inspectworkflow}
            alt="Inspect workflow"
          />

          <h5>Comments :</h5>
          <h5>Leave A Comment :</h5>

          {/* <Form className="mt-3">
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
          </Form> */}
        </div>
      </section >
    );
  }
}
