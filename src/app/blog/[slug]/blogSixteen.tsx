"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import awsconfigure from "@/assets/blog/images/aws-configure.webp";
import choosetemplate from "@/assets/blog/images/choose-template.webp";
import selecttemplate from "@/assets/blog/images/select-template.webp";
import selectno from "@/assets/blog/images/select-no.webp";
import selectpython from "@/assets/blog/images/select-python.webp";
import selectzip from "@/assets/blog/images/select-zip.webp";
import ignoreno from "@/assets/blog/images/ignore-nnnn.webp";
import completedsam from "@/assets/blog/images/completed-sam-init.webp";
import projectstructure from "@/assets/blog/images/project-structure.webp";
import global from "@/assets/blog/images/globals.webp";
import resources from "@/assets/blog/images/resources.webp";
import code from "@/assets/blog/images/code.webp";
import testhandler from "@/assets/blog/images/test-handler.webp";
import samrun from "@/assets/blog/images/sam-run.webp";
import outputbrowser from "@/assets/blog/images/output-browser.webp";
import deployguide from "@/assets/blog/images/deploy-guide.webp";
import deployoutput from "@/assets/blog/images/deploy-output.webp";
import curl from "@/assets/blog/images/curl.webp";

{/* <SEO
  title="AWS SAM: Build, Test, and Deploy Serverless Applications - A Comprehensive Guide"
  description="Learn how to use AWS SAM (Serverless Application Model) to build, test, and deploy serverless applications with this step-by-step guide. Set up your environment, create a SAM project, and deploy your serverless functions."
  keywords="AWS SAM Guide, AWS Serverless Application Model, SAM Setup, Serverless App Deployment, AWS SAM Cleanup"
/> */}

export default class BlogSixteen extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-sam-build-test-and-deploy-serveless-applications"
              target="blank"
              className="rounded"
            >
              <FeatherIcon
                icon="facebook"
                className="fea icon-sm fea-social"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-sam-build-test-and-deploy-serveless-applications"
              target="blank"
              className="rounded"
            >
              <FeatherIcon
                icon="twitter"
                className="fea icon-sm fea-social"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-sam-build-test-and-deploy-serveless-applications"
              target="blank"
              className="rounded"
            >
              <FeatherIcon
                icon="linkedin"
                className="fea icon-sm fea-social"
              />
            </Link>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h1>
            AWS SAM - Build, Test and Deploy Serveless Applications.
          </h1>
          <br />
          <h3 id="what-is-sam">
            What is SAM?
          </h3>
          <p>
            Serverless Application Model (SAM) is a tool that
            enables you to build, test, and deploy serverless
            applications.
          </p>
          <h3 id="why-sam">
            Why SAM?
          </h3>
          <p>
            With SAM, you can define the resources you need in a
            YAML or JSON file, and AWS CloudFormation takes care of
            creating those resources for you. SAM extends AWS
            CloudFormation to provide a simplified way of defining
            and utilizing AWS serverless application resources.
          </p>
          <h3 id="setting-up-your-environment">
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
                <Link href="https://www.docker.com/products/docker-desktop">
                  here
                </Link>{" "}
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
                <Link href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html">
                  here
                </Link>{" "}
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
                <Link href="https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html">
                  here
                </Link>{" "}
                to download.
              </p>
            </li>
            <li>
              <p>Git - For versioning and tracking.</p>
              <p>
                Visit{" "}
                <Link href="https://git-scm.com/downloads">here</Link> to
                download.
              </p>
            </li>
          </ul>
          <p>
            You can proceed to the next step after completing the
            installations.
          </p>
          <h4 id="configure-your-aws-cli">
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
          <Image
            src={awsconfigure}
            alt="awsconfigure"
          />
          <p>
            You can continue to the next step if you have
            successfully completed the previous steps.
          </p>
          <h3 id="create-a-sam-project">
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
          <Image
            src={choosetemplate}
            alt="choosetemplate"
          />
          <p>
            Enter <code>1</code> to select the Hello World Example.
          </p>
          <Image
            src={selecttemplate}
            alt="selecttemplate"
          />
          <p>
            Enter <code>N</code> to select NO.
          </p>
          <Image
            src={selectno}
            alt="selectno"
          />
          <p>
            Select the package you would like to use, in my case, I
            will be using Python 3.8.
          </p>
          <Image
            src={selectpython}
            alt="selectpython"
          />
          <p>Select Zip as the required package.</p>
          <Image
            src={selectzip}
            alt={"selectzip"}
          />
          <p>Ignore the following.</p>
          <Image
            src={ignoreno}
            alt="ignoreno"
          />
          <p>
            Enter a project name. A default name is already
            provided, you can overwrite it with yours or click Enter
            to continue.
          </p>
          <Image
            src={completedsam}
            className="completedsam"
            alt="completedsam"
          />
          <p>
            Once completed, you can open the created folder in your
            favorite code editor.
          </p>
          <Image
            src={projectstructure}
            alt="projectstructure"
          />
          <h3 id="the-project-structure">
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
          <h3 id="what-in-the-template">
            What's in the template?
          </h3>
          <h4 id="globals">
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
          <Image src={global} className="img-fluid" alt="global" />
          <h4 id="resources">
            Resources
          </h4>
          <p>
            The resources contain all created functions and function
            resources.
          </p>
          <Image
            src={resources}
            alt="resources"
          />
          <p>
            In this Resource, we have a function called
            HelloWorldFunction.
          </p>
          <p>Let's break down some properties:</p>
          <h3 id="the-code">
            The Code
          </h3>
          <p>
            In the app.py file, the default code should look
            something like this:
          </p>
          <p>
            <Image alt="code" className="img-fluid" src={code} />
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
          <h3 id="test">
            Test
          </h3>
          <p>
            <Image
              alt="test"
              src={testhandler}
            />
          </p>
          <h4 id="run-the-code">
            Run the code
          </h4>
          <pre>
            <code className="fenced-code-block language-bash">
              sam local start-api --port 8080
            </code>
          </pre>
          <p>
            <Image
              alt="AWS SAM: Build, Test, and Deploy Serverless Applications - A Comprehensive Guide"
              src={samrun}
            />
          </p>
          <p>
            Open the URL in your browser and you will see "hello
            world" on your browser screen.
          </p>
          <p>
            <Image
              alt="AWS SAM: Build, Test, and Deploy Serverless Applications - A Comprehensive Guide"
              src={outputbrowser}
            />
          </p>
          <p>
            You can update the message and code without restarting
            the server; it will automatically update.
          </p>
          <h4 id="run-tests">
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
          <h3 id="deploy">
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
            <Image
              alt="deployguide"
              src={deployguide}
            />
          </p>
          <p>
            Once completed, the output will look something like
            this:
          </p>
          <p>
            <Image
              alt="deploy-output"
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
            <Image alt="curl" src={curl} className="img-fluid" />
          </p>
          <p>
            There you go! You have successfully built, tested, and
            deployed a serverless application using AWS SAM.
          </p>
          <p>
            You can inspect your build in CloudFormation in your AWS
            console.
          </p>
          <h3 id="clean-up">
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
      </section>
    );
  }
}
