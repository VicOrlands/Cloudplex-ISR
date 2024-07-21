"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import blog1 from "@/assets/blog/aws-lambda.webp";
import image1 from "@/assets/blog/locating_lambda.webp";
import image2 from "@/assets/blog/create_function.webp";
import image3 from "@/assets/blog/create_function2.webp";
import image4 from "@/assets/blog/create_function3.webp";
import image5 from "@/assets/blog/create_function4.webp";
import image6 from "@/assets/blog/lambda.webp";
import image7 from "@/assets/blog/create_test.webp";
import image8 from "@/assets/blog/create_test2.webp";
import image9 from "@/assets/blog/create_test3.webp";
import image10 from "@/assets/blog/clean_up.webp";
import FeatherIcon from "feather-icons-react";

{/* <SEO
  title="Getting Started with Serverless - AWS Lambda Tutorial for Beginners"
  description="Learn the basics of serverless computing and AWS Lambda with this step-by-step tutorial. Create your first serverless function and test it with ease"
  keywords="Serverless AWS Lambda Tutorial, Serverless Computing, AWS Lambda Basics, Serverless Function Creation"
/> */}

export default class BlogFourteen extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/introduction-to-writing-serverless-application"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/introduction-to-writing-serverless-application"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/introduction-to-writing-serverless-application"
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
            AWS lambda - Introduction to writing serverless applications
          </h1>
          <Image
            src={blog1}
            alt="img"
          />

          <br />
          <br />
          <p>
            <span style={{ fontWeight: "800" }}>
              What is serverless?
            </span>
            <br />
            Serverless is a cloud native development model that allows
            developers to build and run applications without having to
            manage servers.
            <br />
            In a serverless model, a cloud provider( such as AWS,
            Microsoft Azure, and Google Cloud) automatically allocates
            resources, takes care of servers, operating systems and
            scaling if needed. This way developers can focus on what
            really matters - i.e “INNOVATION”.
          </p>

          <p>
            <span style={{ fontWeight: "800" }}>
              What is AWS lambda?
            </span>
            <br />
            AWS lambda is or lambda is a serverless service provided
            by Amazon web services. It allows developers to write code
            without having to worry about servers.
            <br />
            In lambda, you can write code in any preferred language,
            such as python, nodejs, ruby, go, and more. The code can
            then be uploaded to lambda and automatically executed
            based on event triggers from sources such as S3 bucket,
            and other configured triggers.
          </p>

          <p>
            <span style={{ fontWeight: "800" }}>
              Write your first lambda function
            </span>
            I will walk you through the basics of lambda and how to
            create and write your first serverless function with
            lambda, and also how to test your function by manually
            invoking your function with sample event data.
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "500" }}>
              Signing up for aws
            </span>
            <br />
            Before getting started, you need to create an aws account
            using the following{" "}
            <Link href="https://aws.amazon.com/resources/create-account">
              link
            </Link>
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "500" }}>Locating lambda</span>
            <br />
            Once you’ve signed into your console, search for ‘lambda’
            in the search box. Select <strong>lambda</strong> from the
            search result.
            <Image
              src={image1}
              alt={"blog"}
            />
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "500" }}>
              Create your first function
            </span>
            <br />
            In the lambda page, click on create function.
            <Image
              src={image2}
              alt={"blog"}
            />
            <br />
            Once you click on the create function, it takes you to a
            page, the page contains a lot of information and options
            you don’t have to worry about for now.
            <Image
              src={image3}
              alt={"blog"}
            />
            <br />
            The only fields we will be filling out are the{" "}
            <strong>function name</strong>, and select a runtime
            language you wish to use. We will be using{" "}
            <strong>python3.9</strong> for this demo.
            <Image
              src={image4}
              alt={"blog"}
            />
            <br />
            Click <strong>Create function</strong> at the bottom of
            the page.
            <br />
            On the page you are redirected to, you see more details,
            settings and features of the function you just created.
            The only section we will worry about is the code section.
            <Image
              src={image5}
              alt={"blog"}
            />
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "500" }}>
              What’s happening in the code?
            </span>
            We already have a boilerplate hello world code, to give
            you an overview of what is happening. The{" "}
            <strong>lambda_handler</strong> function is the entry
            point i.e the function that gets executed once the lambda
            has been invoked. The body of the function is super
            straightforward, you can modify and throw in your own code
            as well.
            <Image
              src={image6}
              alt={"blog"}
            />
            <br />
            We have modified the code to some calculations, and we’ve
            replaced the hello world in the body of the json with the{" "}
            <strong>multiplication result</strong>, just to simulate
            what we will be getting back in a real world scenario.
            <br />
            <br />
            <strong>Note</strong>: click the{" "}
            <strong>deploy button</strong> button to any changes you
            make to the code
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "500" }}>Creating Test</span>
            <br />
            Expand the dropdown in the <strong>Test</strong> button,
            and click <strong>configure test</strong>.
            <br />
            <Image
              src={image7}
              alt={"blog"}
            />
            A dialog box that looks like this will appear.
            <Image
              src={image8}
              alt={"blog"}
            />
            <br />
            Enter a <strong>name</strong> for your test event, make
            sure to select <strong>hello_world</strong> from the
            templates and click <strong>Save</strong>.
            <br />
            Now, select the test event you just created, then click{" "}
            <strong>Test</strong>.
            <br />
            <Image
              src={image9}
              alt={"blog"}
            />
            Congratulations, you have successfully created and tested
            your first serverless function.
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "500" }}>Cleaning up</span>
            <br />
            To delete the created function.
            <Image
              src={image10}
              alt={"blog"}
            />
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
