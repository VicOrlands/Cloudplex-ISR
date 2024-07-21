"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import badge from "@/assets/blog/awslambda.webp";

{/* <SEO
  title="AWS Lambda Service Delivery: Focus on Innovation, Not Infrastructure"
  description="Experience serverless computing with CloudPlexo's AWS Lambda service delivery. Let us handle infrastructure management while you focus on innovation."
  keywords="AWS Lambda Service Delivery, Serverless Computing, Infrastructure Management, Expert Support, Monitoring, Innovation in AWS Lambda"
/> */}

export default class BlogTwentySeven extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/cloudplexo-receives-aws-lambda-service-delivery-designation"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/cloudplexo-receives-aws-lambda-service-delivery-designation"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/cloudplexo-receives-aws-lambda-service-delivery-designation"
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
            CloudPlexo Receives AWS Lambda Service Delivery
            Designation
          </h1>
          <Image src={badge} alt="CloudPlexo Receives AWS Lambda Service Delivery Designation" />
          <br />
          <br />
          <p>
            CloudPlexo has received AWS Lambda Service Delivery
            Designation. This designation recognizes that the company
            follows best practices with AWS Lambda and has
            demonstrated proven customer success.
          </p>
          <p>
            AWS Lambda Service Delivery designation validates AWS
            Partners that have deep technical knowledge, experience,
            and proven success in delivering specific AWS services to
            customers. From helping customers run serverless code with
            AWS Lambda to deploying managed, secure, reliable, and
            high-performing Windows-based solutions on Amazon EC2
            Windows, AWS Service Delivery Partners follow best
            practices to support customers' unique use cases.
          </p>
          <p>
            Achieving the Lambda Service Delivery Designation
            differentiates CloudPlexo as an AWS Partner Network (APN)
            member that is well-equipped to assist customers' design.
            It also equips us with a powerful tool to craft tailored,
            high-performing applications that meet your specific
            needs. Whether you're seeking to streamline your
            workflows, enhance user experiences, or optimise resource
            utilisation, our new capabilities in AWS Lambda empower us
            to turn your ideas into reality more effectively than
            ever.
          </p>
          <p>
            At CloudPlexo, innovation and excellence are at the heart
            of everything we do. Achieving AWS Lambda approval
            underscores our dedication to staying at the forefront of
            technology trends and ensuring that we provide you with
            the best solutions available. We remain committed to
            delivering top-notch products and services that drive your
            success and help you stay competitive in today's rapidly
            evolving business landscape.
          </p>
          <p>
            With AWS Lambda in our toolkit, we're eager to collaborate
            with you on exciting new projects that harness the power
            of serverless computing. Our team is already hard at work,
            exploring innovative ways to leverage this technology and
            create solutions that push boundaries and set new industry
            standards.
          </p>
          <p>
            We look forward to showcasing the transformative potential
            of AWS Lambda and delivering solutions that exceed your
            expectations. The future is brighter than ever, and we
            can't wait to take these bold steps forward together. Stay
            tuned for more updates, and as always, feel free to reach
            out at{" "}
            <Link href="mailto:contact@cloudplexo.com">
              contact@cloudplexo.com
            </Link>{" "}
            with any questions or ideas. We're here to make your
            visions come to life.
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
