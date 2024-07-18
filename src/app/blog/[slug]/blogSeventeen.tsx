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
import SEO from "../../../components/SEO";
//Import Icons
import FeatherIcon from "feather-icons-react";
//Import Images
import logolight from "../../../assets/images/logo-light.png";
import logodark from "../../../assets/images/logo-dark.png";
import bgimg from "../../../assets/images/1.jpg";
import image1 from "../../../assets/images/blog/recognition/image1.png";
import image2 from "../../../assets/images/blog/recognition/image2.png";
import image3 from "../../../assets/images/blog/recognition/image3.png";
import image4 from "../../../assets/images/blog/recognition/image4.png";
import image5 from "../../../assets/images/blog/recognition/image5.png";
import image6 from "../../../assets/images/blog/recognition/image6.png";
import image7 from "../../../assets/images/blog/recognition/image7.png";
import image8 from "../../../assets/images/blog/recognition/image8.png";
import image9 from "../../../assets/images/blog/recognition/image9.png";
import image10 from "../../../assets/images/blog/recognition/image10.png";
import image11 from "../../../assets/images/blog/recognition/image11.png";
import image12 from "../../../assets/images/blog/recognition/image12.png";
import image13 from "../../../assets/images/blog/recognition/image13.png";
import image14 from "../../../assets/images/blog/recognition/image14.png";
import image15 from "../../../assets/images/blog/recognition/image15.png";
import image16 from "../../../assets/images/blog/recognition/image16.png";
import code1 from "../../../assets/images/blog/recognition/code1.png";
import code2 from "../../../assets/images/blog/recognition/code2.png";
import code3 from "../../../assets/images/blog/recognition/code3.webp";

export default class BlogSeventeen extends Component {
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
          title="AWS Rekognition Video Detection Guide - Step-by-Step Configuration"
          description="Learn how to set up AWS Rekognition for video detection with this step-by-step guide. Configure Amazon S3, Amazon SNS, Amazon SQS, and Lambda for efficient video analysis"
          keywords="AWS Rekognition Video Detection, Amazon Rekognition, Video Analysis Setup, AWS Video Detection Guide, Video Recognition Configuration"
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/video-detection-with-aws-rekognition"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/video-detection-with-aws-rekognition"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/video-detection-with-aws-rekognition"
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
                    <h1>Video Detection with AWS Rekognition</h1>

                    <h2>Introduction</h2>
                    <p>
                      Amazon Rekognition is a fully managed computer vision
                      service that enables developers to analyze images and
                      videos for a variety of use. AWS Rekognition provides a
                      cloud-based pre-trained AI model that uses deep learning
                      to analyze and extract information from images, videos,
                      and text.
                    </p>
                    <p>
                      With the Rekognition API, it becomes much easier to build
                      a solution that moderates content on your platforms. It
                      offers a ready-to-use and wide range of computer vision
                      capabilities, including object detection, text detection,
                      image comparison, and much more.
                    </p>
                    <p>
                      Rekognition also becomes handy when building an automated
                      identity verification system, with its image comparison
                      API, it extracts features from images and matches them
                      against one another.
                    </p>

                    <h2>Video Label Detection</h2>
                    <p>
                      <strong>Amazon S3 Configuration:</strong>
                    </p>
                    <p>
                      Before we begin our video analysis, we will first upload
                      the video we want to analyze. To do that, go to the
                      Buckets section in your Amazon S3. You can quickly
                      navigate to your Buckets by searching for S3 in the Search
                      bar at the nav section.
                    </p>
                    <img
                      src={image1}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />

                    <p>
                      In your Buckets page, we will be creating a new Bucket
                      called "Mezie-video-rekognition". You can name yours
                      anything or decide to use an existing Bucket.
                    </p>
                    <img
                      src={image2}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Next, we navigate into the Bucket we created and upload
                      our video. Be sure to rename your video to a more
                      easier-to-remember name. This is because we will be
                      needing the video name and our Bucket name too.
                    </p>
                    <img
                      src={image3}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      <strong>Amazon SNS Configuration:</strong>
                    </p>
                    <p>
                      After successfully uploading the video, we will then
                      navigate to our SNS (Simple Notification Service) page to
                      create an SNS topic. You can use the Search bar too for
                      easier navigation.
                    </p>
                    <p>
                      The SNS is a service that allows message delivery from
                      publishers to subscribers. It enables the easy creation,
                      publishing, and consumption of messages or notifications
                      to and from various endpoints or subscribers.
                    </p>
                    <img
                      src={image4}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      SNS allows us to send the results of the video analysis to
                      an SNS topic. This then allows the analysis results to be
                      easily consumed by other components or systems that are
                      subscribed to the SNS topic. Use cases of this service
                      will be alerting or sending an email message of the
                      analysis report to the topic subscribers on completion of
                      the analysis.
                    </p>
                    <p>
                      Inside the SNS page, select Topics as you will see the
                      number of Topics available.
                    </p>
                    <img
                      src={image5}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>I’ve created a new Topic called AmazonRekognitionSNS.</p>
                    <img
                      src={image6}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Navigate into the Topic and copy the ARN as we will need
                      it for our analysis.
                    </p>
                    <img
                      src={image6}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      <strong>Amazon SQS Configuration:</strong>
                    </p>
                    <p>
                      Next, we navigate to Queues located inside our Amazon SQS
                      page.
                    </p>
                    <img
                      src={image7}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Inside the page, we will create a Queue. I’ve created one
                      and called it “AmazonRekognitionQueue” See image below.
                    </p>
                    <img
                      src={image8}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Navigate inside the created Queue
                      (AmazonRekognitionQueue). At the bottom, you will find a
                      “Subscribe to Amazon SNS topic” button. Click on it so we
                      can subscribe to the Topic we created earlier.
                    </p>
                    <img
                      src={image9}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Click on the “Choose a topic” dropdown and select the ARN
                      of the Topic we created. The ARN ends in the topic’s name
                      so look for the one that matches your topic and subscribe
                      to it. <br /> See image below for clarity
                    </p>
                    <img
                      src={image10}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      After subscribing to the Topic, copy the ARN and URL of
                      your Queue. You can find both at the Details
                      section(located at the top of your Queue page).
                    </p>
                    <br />
                    <p>
                      <strong>Lambda Configuration:</strong>
                    </p>
                    <p>
                      Finally, we will be navigating to the Lambda page where we
                      will be writing our codes and performing our video
                      detection.
                    </p>
                    <p>
                      I’ve created a function called “DetectVideos” that runs in
                      a Python environment.
                    </p>
                    <img
                      src={image11}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      After navigating inside the function, go down to the
                      Configurations section and choose Permissions.
                    </p>
                    <img
                      src={image12}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Click on the Role Name and you will be navigated to the
                      IAM Roles page on another tab. We are going to be
                      assigning certain roles to the user so that we can be able
                      to perform the video detection analysis. These roles
                      include AmazonRekognitionFullAccess, AmazonSQSFullAccess,
                      and so on.
                    </p>
                    <p>
                      In the Permissions Policies section, click on the “Add
                      Permissions” button seen on the right side and then
                      “Attach Permissions”.
                    </p>
                    <img
                      src={image13}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      We are going to be adding the following permissions:
                      AmazonRekognitionFullAccess, AmazonS3ReadOnlyAccess,
                      AmazonSQSFullAccess, and AmazonRekognitionServiceRole.
                    </p>
                    <p>
                      For the last permission, we will be creating a custom
                      policy. This is to add a permission that isn’t available.
                      This permission “rekognition:StartLabelDetection” allows
                      us to start our label detection analysis for our videos.
                    </p>
                    <p>
                      To add the custom permission, click on the “Add
                      Permissions” button and this time, click on the “Create
                      Inline Policy” button instead. Select JSON and paste the
                      code below;
                    </p>
                    <img
                      src={code1}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <img
                      src={image14}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Review policy and save. You should have these permissions
                      as your preferred permissions.
                    </p>
                    <img
                      src={image15}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Copy your role’s ARN. You can locate it at the top of the
                      page (Summary section). Then, go back to the Lambda’s home
                      page and select the Code section so we can begin writing
                      our code.
                    </p>
                    <p>
                      In your lambda_function.py editor, copy and paste the code
                      below;
                    </p>
                    <img
                      src={code2}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      Change the video bucket and video name to yours. Also,
                      replace the SNS topic name and Role’s ARN to yours. Deploy
                      your code and test.
                    </p>
                    <p>
                      Note: Lambda's default execution time is less than 3 secs
                      so your test might not complete (test will timeout) before
                      the video has been fully analyzed. To fix this, go over to
                      Configuration, select General configuration and then
                      change the timeout to a longer time to allow the function
                      to run and complete the analysis.
                    </p>

                    <h2>Celebrity Detection</h2>
                    <p>
                      We can also perform Celebrity detection in our lambda.
                      Amazon Rekognition provides us with an API called
                      start_celebrity_recognition and get_celebrity_recognition
                      that allows us to detect which celebrity is in our video.
                    </p>
                    <img
                      src={code3}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
                    />
                    <p>
                      In this case, it ran and detected Donald Trump as the
                      celebrity present in the Video with a confidence of 99.
                    </p>
                    <img
                      src={image16}
                      alt="blogImage"
                      className="img-fluid"
                      style={{ margin: "20px 0 30px" }}
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
