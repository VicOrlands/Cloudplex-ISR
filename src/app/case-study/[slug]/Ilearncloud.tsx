"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";
import React, { Component } from "react";
import ilearncloud from "@/assets/casestudies/ilearncloud.png";
import logo from "@/assets/casestudies/logo.png";
import Link from "next/link";

class IlearnCloud extends Component {
  /* <SEO
    title="Ilearncloud's Success Story: AWS-Powered E-Learning Platform for Cloud Computing Education"
    description="Discover how Ilearncloud, a UK-based online learning platform for cloud computing, leveraged AWS services like Elemental MediaConvert, Lambda, and more to deliver high-quality, low-latency video experiences to thousands of students."
    keywords="AWS E-Learning Platform"
  /> */
  render() {
    return (
      <React.Fragment>
        <section className={styles["gtb-pensions-page"]}>
          <h1>
            ilearncloud develops e-learning platform for thousands of students
            with AWS
          </h1>

          <section className={styles["logo-images"]}>
            <Image
              src={logo}
              alt="Ilearncloud's Success Story: AWS-Powered E-Learning Platform for Cloud Computing Education"
            />
            <Image
              src={ilearncloud}
              alt="Ilearncloud's Success Story: AWS-Powered E-Learning Platform for Cloud Computing Education"
            />
          </section>

          <section className={styles["main-body"]}>
            <h2>
              <strong>The Company</strong>
            </h2>
            <p>
              Ilearncloud is a company based in the United Kingdom.
              <Link className={styles["nav-link"]} href="https://ilearncloud.io">{" "}Ilearncloud</Link>{" "}
              is an online learning management platform for learning cloud
              computing, ilearncloud offers a wide range of high-quality
              courses taught by experienced instructors. With ilearncloud, you
              have the convenience of learning at your own pace and on your
              own schedule, making it easy to fit education into your busy
              life.
            </p>
            <h2>
              <strong>Solution</strong>
            </h2>
            <p>
              Development of a video on demand (VOD) workflow using an encoder
              in the cloud to convert video content stored in Amazon S3 into
              new formats for storage, reuse and delivery using AWS Elemental
              MediaConvert.
              <br />
              AWS Elemental MediaConvert job to convert an HLS input into HLS,
              MP4 and Thumbnail outputs. File based adaptive bitrate and
              delivery producing video output for different purposes. Created
              an automated "watchfolder" workflow. Video files added to an S3
              bucket automatically trigger a MediaConvert job to run on the
              uploaded files.
            </p>
            <h2>
              <strong>Products</strong>
            </h2>
            <p>
              AWS Elemental MediaConvert , Lambda, API gateway, Amazon S3, AWS
              Step functions, AWS Certificate Manager, AWS secret manager,
              cloudfront.
            </p>
            <h2>
              <strong>Business Challenge</strong>
            </h2>
            <p>
              Content quality and ensuring that video plays in all mobile and
              web devices was also a key consideration in building ilearncloud
              platform. For ilearncloud to differentiate itself from other
              online and mobile online-education platforms, we wanted to
              ensure professional quality, low-latency video experiences for
              customers.
            </p>
            <h2>
              <strong>Working Together</strong>
            </h2>
            <p>
              CloudPlexo was the preferred AWS consulting partner to implement
              the project.
            </p>
            <h2>
              <strong>Why Amazon Web Services</strong>
            </h2>
            <p>
              AWS was the preferred choice as the world-leading cloud platform
              for flexibility, elasticity, scale and cost. CloudPlexo worked
              with ilearncloud to deliver the e-learning platform. CloudPlexo
              utilized a range of cloud services for example; AWS DynamoDB,
              AWS Elemental MediaConvert, Lambda, API gateway, Amazon S3, AWS
              Step functions, AWS Certificate Manager, AWS secret manager,
              cloudfront.{" "}
            </p>
            <h2>
              <strong>Outcomes</strong>
            </h2>
            <p>
              The solution delivered to ilearncloud provides a complete video
              workflow, including content ingest into{" "}
              <Link
                className={styles["nav-link"]}
                href="https://aws.amazon.com/s3/"
                target="_blank"
                rel="noreferrer"
              >
                Amazon Simple Storage Service (Amazon S3)
              </Link>
              , transcoding using{" "}
              <Link
                className={styles["nav-link"]}
                href="https://aws.amazon.com/mediaconvert/"
                target="_blank"
                rel="noreferrer"
              >
                AWS Elemental MediaConvert
              </Link>
              , and delivery using{" "}
              <Link
                className={styles["nav-link"]}
                href="https://aws.amazon.com/cloudfront/"
                target="_blank"
                rel="noreferrer"
              >
                Amazon CloudFront
              </Link>
              . With this cloud-based workflow, ilearncloud has been able to
              focus on delivering compelling e-learning, without having to
              worry about the complexity of building and operating a separate
              video processing infrastructure to support online education. The
              quality of the content and interactive component was
              outstanding.
            </p>
          </section>
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}

export default IlearnCloud;
