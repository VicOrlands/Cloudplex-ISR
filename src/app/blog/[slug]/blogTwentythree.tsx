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
import FeatherIcon from "feather-icons-react";
import bgimg from "../../../assets/images/1.jpg";
import transcribedashboard from "../../../assets/images/blog/aws_transcribe_job_dashboard.png";
import transcribeconfigure from "../../../assets/images/blog/aws_transcribe_job_configure.png";
import transcribedashboard2 from "../../../assets/images/blog/aws_transcribe_dashboard.png";
import awstranscribecode from "../../../assets/images/blog/awstranscribecode.png";

export default class BlogTwentyThree extends Component {
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/hands-on-with-aws-transcribe"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/hands-on-with-aws-transcribe"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/hands-on-with-aws-transcribe"
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
                    <h2>Hands on with Transcribe: A Step-by-Step Guide</h2>

                    <p>
                      In the fast-paced world of technology, speech-to-text
                      conversion has become an indispensable tool for businesses
                      and individuals alike. Automatic Speech Recognition (ASR)
                      services, such as Amazon Web Services (AWS) Transcribe,
                      offer a powerful and convenient way to convert spoken
                      language into written text. Whether it's transcribing
                      meetings, podcasts, or customer service interactions, AWS
                      Transcribe has you covered. In this article, we'll take a
                      hands-on approach to using AWS Transcribe and explore the
                      key steps involved in the process.
                    </p>
                    <ol>
                      <li>
                        <strong> Setting Up an AWS Account:</strong> If you
                        don't already have an AWS account, head over to the{" "}
                        <a href="https://aws.amazon.com/">AWS website</a> and
                        sign up. Once you've created an account, you'll be able
                        to access a wide range of cloud-based services,
                        including AWS Transcribe.
                      </li>

                      <li>
                        <strong>Navigating to AWS Transcribe:</strong> After
                        logging into your AWS account, you can access AWS
                        Transcribe by either searching for it in the AWS
                        Management Console or by directly visiting the service's
                        homepage.
                      </li>

                      <li>
                        <strong>Creating a Transcription Job:</strong> To get
                        started with AWS Transcribe, you'll need an audio or
                        video file that you want to transcribe. Supported
                        formats include MP3, MP4, WAV, FLAC, and more. Once you
                        have your file ready, follow these steps to create a
                        transcription job:
                        <ul>
                          <li>
                            <strong>Step 1:</strong> Click on "Create
                            transcription job" from the AWS Transcribe
                            dashboard.
                          </li>
                          <li>
                            <strong>Step 2:</strong> Give your job a unique name
                            and provide the location of the audio or video file
                            you want to transcribe. You can upload your file
                            directly to an S3 bucket or provide a public URL.
                          </li>
                          <li>
                            <strong>Step 3:</strong> Choose the language spoken
                            in the audio or video. AWS Transcribe supports a
                            wide range of languages, making it suitable for
                            diverse global applications.
                          </li>
                          <li>
                            <strong>Step 4:</strong> Configure the output
                            settings. You can choose the desired output format
                            (JSON, plain text, or other options), and you have
                            the option to enable automatic content redaction for
                            sensitive information.
                          </li>
                          <li>
                            <strong>Step 5:</strong> (Optional) You can also
                            configure a language model to improve transcription
                            accuracy for specialized domains.
                          </li>
                          <li>
                            <strong>Step 6:</strong> Review your settings and
                            click "Create" to initiate the transcription job.
                          </li>
                        </ul>
                      </li>

                      <li>
                        <strong>Monitoring the Transcription Job:</strong> Once
                        the job is created, AWS Transcribe will start processing
                        the audio or video file. You can monitor the status and
                        progress of the transcription job from the AWS
                        Transcribe dashboard. The duration of the job will
                        depend on the size and complexity of the input file.
                      </li>

                      <li>
                        <strong>
                          Retrieving and Analyzing the Transcription:
                        </strong>{" "}
                        After the job is completed, you can retrieve the
                        transcription output from the AWS Transcribe dashboard.
                        The output will be in the format you selected during job
                        creation (JSON, plain text, etc.). You can also download
                        the output for further analysis or integration with
                        other applications.
                      </li>

                      <li>
                        <strong>Improving Transcription Accuracy:</strong> AWS
                        Transcribe is designed to deliver accurate
                        transcriptions, but there might be cases where the
                        output may require some corrections. You can use Amazon
                        Transcribe's Custom Vocabulary feature to fine-tune the
                        service for specific domain-specific terms or jargon.
                      </li>
                    </ol>
                    <h4>Images:</h4>
                    <ol>
                      <li>
                        <strong>AWS Transcribe Dashboard</strong>
                      </li>
                      <br />
                      <img
                        src={transcribedashboard}
                        alt="transcribedashboard"
                        className="img-fluid"
                      />
                      <p>
                        This image shows the AWS Transcribe dashboard, where you
                        can create and manage transcription jobs.
                      </p>
                      <li>
                        {" "}
                        <strong>Configuring Transcription Job:</strong>
                      </li>
                      <br />
                      <img
                        src={transcribeconfigure}
                        alt="transcribeconfigure"
                        className="img-fluid"
                      />
                      <p>
                        This image illustrates the configuration settings when
                        creating a transcription job, including language
                        selection and output format.
                      </p>
                      <li>
                        <strong>Monitoring Transcription Progress:</strong>
                      </li>
                      <br />
                      <img
                        src={transcribedashboard2}
                        alt="transcribedashboard2"
                        className="img-fluid"
                      />
                      <p>
                        Here, you can see the progress of an ongoing
                        transcription job, including the job status and
                        percentage completed.
                      </p>
                    </ol>
                    <h4>Working with the transcribe API</h4>
                    <p>
                      Working with the Amazon Transcribe API allows developers
                      to integrate automatic speech recognition capabilities
                      directly into their applications, enabling real-time
                      transcription and analysis of audio content. The
                      Transcribe API, part of the Amazon Web Services (AWS)
                      ecosystem, offers a more programmatic interface to
                      interact with the Transcribe service.
                    </p>
                    <h6>Example in lambda</h6>
                    <p>
                      The code below shows the implementation of a
                      speech-to-text services with AWS Transcribe:
                    </p>
                    <br />
                    <img
                      src={awstranscribecode}
                      alt="awstranscribe"
                      width="100%"
                    />

                    <h4>Conclusion</h4>
                    <p>
                      AWS Transcribe is a valuable tool that efficiently
                      converts spoken language into written text, offering
                      significant benefits across different applications.
                      Throughout this guide, we explored the process of creating
                      transcription jobs, monitoring progress, and obtaining
                      transcription outputs. The service's availability and
                      language support make it suitable for various industries
                      and use cases. It's worth giving it a try to experience
                      how it simplifies your speech-to-text conversion
                      requirements.
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
