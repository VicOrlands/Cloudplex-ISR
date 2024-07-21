"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import blog1 from "@/assets/blog/blog12.webp";

{/* <SEO
  title="Building Cloud Native Applications - Benefits and Modernization with CloudPlexo"
  description="Discover the benefits of building cloud native applications and how CloudPlexo can help you modernize your apps for scalability, agility, and cost-efficiency"
  keywords="Cloud Native Applications, Modernization, CloudPlexo, Building Modern Applications, Cloud App Development, App Modernization"
/> */}

export default class BlogTwelve extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://wendu.io/why-build-on-the-cloud"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://wendu.io/why-build-on-the-cloud"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://wendu.io/why-build-on-the-cloud"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </Link>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h4>Why build on the Cloud?</h4>
          <br />
          <Image
            src={blog1}
            alt="Why build on the Cloud?"
          />
          <br />
          <br />
          <p>
            <span style={{ fontWeight: "800" }}> </span>
            Building applications, either mobile or web-based, is an
            amazing way of testing your business ideas in a very
            scalable and flexible way, as mobile applications have the
            potential to take that business idea from a sheet of paper
            into the hands of millions of users worldwide that need
            the products / service that your business idea offers.
          </p>
          <p>
            Before you get into building that application, there are
            several items that you need to go check to ensure building
            a successful application. What even makes an application
            successful? Well, once that application is able to serve a
            particular business and / or individual need that is in
            demand, and is accessible, available (probably hosted on
            Amazon Appstore, Apple Store or Google Play Store), and
            offers a great user experience–making the customer journey
            from start to finish a seamless experience (computing and
            storage–performance–capacity), then I believe that
            application can be considered a successful one.
          </p>
          <p>
            Now, back to the gist. There are several items on the
            checklist of application building, and while this blog
            post is not about application building checklists, I’ll
            briefly mention a few of these items before going into the
            main gist of this blog post.
          </p>
          <p />
          What do you need to consider before building an application?
          <ol>
            <li>
              <b>Type of Application:</b> Mobile and / or web? Purpose
              of the application? Application features and process
              flow? Complex or Simple?
            </li>

            <li>
              <b>Server Type:</b> Shared or Dedicated? Storage
              Capacity? CPU & RAM?
            </li>

            <li>
              <b>Hosting Tenure:</b> How long are you hosting for?
              Hosting plans and fees?
            </li>

            <li>Application Licensing / API integrations.</li>
          </ol>
          <h5>Traditional vs Cloud Native</h5>
          <p>
            This is where the blog post starts getting interesting…
            Now that you’ve decided the type of application you want
            to build, where to build it remains the puzzle, or does
            it?
          </p>
          <h6 className="mt-4">Traditional Applications</h6>
          <p>
            Traditionally, applications are built on physical servers
            in data centres, privately or publicly owned; and you need
            to determine what type of server or server hosting tenure
            to suit your application needs.
            <br />
            <br />
            This type of application building works but is very
            limited. It is limited in its scalability based on present
            demand, availability to reach a global market with the
            lowest latency possible, ability to respond to business
            changes and system requirements in an agile way, and in
            its handling of data generated by both the application and
            its users.
          </p>
          <h6 className="mt-4">Cloud Native Applications</h6>
          <p>
            Cloud native technologies empower both businesses and
            individuals to build and run scalable applications in any
            of the cloud delivery models. Features such as containers,
            service meshes, microservices, immutable infrastructure,
            and declarative application programming interfaces (APIs)
            best illustrate this approach.
            <br />
            <br />
            These kinds of features enable loosely coupled systems
            that are resilient, manageable, and observable. They allow
            high flexibility for engineers to make high-impact changes
            frequently and with minimal effort. Cloud native
            applications are applications that are built and run
            completely on the cloud, and are built to exploit the
            scalability, elasticity, resilience, and flexibility the
            cloud delivery model provides.
          </p>
          <h5>Benefits of Building Cloud Native Applications</h5>
          <p>
            There are four main benefits of building modern or cloud
            native applications we’ll discuss here. These are:
          </p>
          <ol>
            <li>
              <b>Auto-scaling:</b> Cloud native applications running
              on serverless technology like AWS Lambda, have the
              ability to scale up and down to support zero to millions
              of users. So, as an application builder, operator, or
              owner, you’re set from day one to reach millions of
              users, and not have to worry about the management of the
              technology to handle your seasonal traffic demands.
            </li>

            <li>
              <b>Global Availability:</b> If there’s one thing worse
              than a horrible app interface, it would definity be a
              slow responding application. In a nutshell, many things
              from compute to storage can affect the performance of
              your application; with AWS you have the ability to
              choose what region(s) your intended app target audience
              are and reduce the level of latency needed to both send
              and receive resources with minimal downtime. You also
              benefit from AWS economies of scale to improve your
              business pricing model per region (e.g Netflix).
            </li>

            <li>
              <b>Business Agility:</b> Cloud native applications have
              the agility to handle business request changes with
              minimal application downtime–allowing you leverage fast,
              efficient technology to meet quality and bandwidth
              demands per time because of the operational model of
              modern applications. Cloud native apps are also built on
              both decoupled application and data architecture that
              allows for quick changes to your application features,
              improving developer efficiency.
            </li>

            <li>
              <b>Storage Capacity:</b> As your application grows in
              users, so does the storage capacity required for optimal
              performance grow. Cloud native applications are able to
              leverage on the resizable model of several services like
              the Amazon S3 buckets, Aurora or even DynamoDB. AWS has
              the largest and most differentiated storage capacity,
              more than any other cloud provider, and you’re sure to
              meet your application storage capacity needs when you
              run cloud native applications.
            </li>
          </ol>
          <h5>Building Modern Applications</h5>
          <p>
            Having shared only a few benefits of building and running
            cloud native applications as opposed to traditional
            applications, I believe I will do you injustice if I do
            not mention to you that building and running cloud native
            applications do not just begin with app building, and end
            with app deployment.
            <br />
            <br />
            It begins with the team culture, then to the application
            and data architecture, then the operational model of the
            team, and finally the management, security and governance
            of all stakeholders involved.
            <br />
            <br />
            “By 2023, 65% of organisations will modernise with new
            technology platform investments to improve security and
            take advantage of new functionality.” IDC,{" "}
            <Link href="https://www.idc.com/getdoc.jsp?containerId=prUS45617519">
              2019 Digital Transformation Investment Study.
            </Link>
            <br />
            <br />
            CloudPlexo can help you build and run cloud native
            applications that are resilient, scalable, and sure to
            improve your ROI and reduce your TCO on those
            applications. We can take you through the App
            Modernization journey by systematically understanding
            where you are in your app modernization journey, and
            leading you through till you get to a ‘think cloud first’
            app build–both for you and your team.
          </p>
          <p>
            Contact{" "}
            <Link href="https://cloudplexo.com/professional-services">
              CloudPlexo{" "}
            </Link>
            today for your company's{" "}
            <Link href="https://pages.awscloud.com/NAMER-ln-GC-modernization-fluency-assessment-2020-learn?&trk=el_a134p000003yluIAAQ&trkCampaign=GLBL-FY20-Q4-GC-300-Assessment%E2%89%BBchannel=el%E2%89%BBcampaign=el_microsite%E2%89%BBoutcome=Global_Marketing_Campaigns%E2%89%BBgeo=GLBL%E2%89%BBcountry=Multi">
              modernization fluency assessment.
            </Link>
          </p>
          <h5>Comments :</h5>
          <h5>Leave A Comment :</h5>

          {/* <Form className="mt-3">
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
                    </Form> */}
        </div>
      </section>
    );
  }
}
