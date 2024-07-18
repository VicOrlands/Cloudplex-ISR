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
import interfacedashboard from "../../../assets/images/blog/aws_polly_interface.png";
import interfaceexample from "../../../assets/images/blog/aws_polly_example_text.png";
import awspollycode from "../../../assets/images/blog/awspollycode.png";

export default class BlogTwentyFour extends Component {
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/hands-on-aws-polly"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/hands-on-aws-polly"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/hands-on-aws-polly"
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
                    <h2>Hands on AWS Polly: A practical guide</h2>

                    <p>
                      In the fast-changing world of technology, voice-enabled
                      apps have become a crucial feature for enhancing user
                      experiences. One of tools in this domain is Amazon Polly,
                      an AWS offering that lets developers integrate lifelike
                      and expressive speech capabilities into their apps. In
                      this article, we'll explore AWS Polly in a practical way.
                    </p>
                    <h4>Setting Up an AWS Account and Accessing Polly:</h4>
                    <p>
                      To begin with AWS Polly, you need an AWS account. If
                      you're new to AWS, go to the AWS website
                      (https://aws.amazon.com/) and sign up for a free account
                      (if you don't already have one). Once you have your
                      account, access the AWS Management Console, and search for
                      AWS Polly using the search bar. Then, click on the AWS
                      Polly service.
                    </p>
                    <img
                      src={interfacedashboard}
                      alt="dashboard"
                      className="img-fluid"
                    />
                    <h4>Creating a Speech Synthesis:</h4>
                    <p>
                      With AWS Polly, converting text to speech is easy. Follow
                      these steps to create a speech synthesis:
                    </p>
                    <p>
                      <strong>Step 1:</strong> Select the Engine you wish to
                      use. Recommend to keep the default.
                    </p>
                    <p>
                      <strong>Step 2:</strong> Input the text you want to
                      convert into speech. You can type or paste the content
                      directly into the console.
                    </p>
                    <img
                      src={interfaceexample}
                      alt="example"
                      className="img-fluid"
                    />
                    <p>
                      <strong>Step 3:</strong> Choose the language and voice
                      that match your app's needs. AWS Polly offers a wide
                      selection of lifelike voices, including male and female
                      options, supporting various languages.
                    </p>
                    <p>
                      <strong>Step 4:</strong> Customize the speech output by
                      adjusting the speech rate and volume, tailoring it to fit
                      your app's context and user preferences.
                    </p>
                    <p>
                      <strong>Step 5:</strong> For more control, use SSML
                      (Speech Synthesis Markup Language) to include specific
                      instructions for the TTS engine, allowing nuanced and
                      expressive speech.
                    </p>
                    <p>
                      <strong>Step 6:</strong> Click "Listen" to generate the
                      audio output.
                    </p>

                    <h4>Storing and Delivering Speech Output:</h4>
                    <p>
                      After synthesizing the speech, you have multiple options
                      for storing and delivering the audio output to your users:
                    </p>
                    <p>
                      <strong>Option 1:</strong> Save the audio as an MP3 or WAV
                      file, which users can download and play back when needed.
                    </p>
                    <p>
                      <strong>Option 2:</strong> Stream the speech output
                      directly to your app or website using AWS Polly's
                      StreamSpeech API, providing real-time and dynamic
                      responses to user interactions.
                    </p>
                    <p>
                      <strong>Option 3:</strong> Integrate AWS Polly with other
                      AWS services, like Amazon S3, to automatically store and
                      manage speech files, enabling seamless scalability and
                      robustness.
                    </p>

                    <h4>Working with Polly's API</h4>
                    <br />
                    <img src={awspollycode} alt="pollycode" width="100%" />
                    <p>
                      With Polly's API, developers can integrate text-to-speech
                      service into their application. The code below shows how
                      to use polly API in Lambda
                    </p>

                    <h4>Making the Most of Polly: Use Cases</h4>
                    <p>
                      AWS Polly's flexibility makes it suitable for a wide range
                      of applications and industries:
                    </p>
                    <p>
                      <strong>Accessibility and Inclusion:</strong>Polly can be
                      employed to deliver spoken content, making it accessible
                      to visually impaired users or those with reading
                      challenges, thereby fostering a more inclusive user
                      experience.
                    </p>
                    <p>
                      <strong>Interactive Voice Response (IVR) Systems:</strong>
                      Polly's natural and expressive voices can enhance IVR
                      systems, resulting in improved call interactions and an
                      overall better user experience.
                    </p>
                    <p>
                      <strong>E-Learning and Audiobook Narration:</strong>
                      Polly's natural and expressive voices can enhance IVR
                      systems, resulting in improved call interactions and an
                      overall better user experience.
                    </p>
                    <p>
                      <strong>Multilingual Applications:</strong>With Polly's
                      support for multiple languages, developers can create
                      applications that dynamically switch between different
                      languages and voices, catering to a diverse global
                      audience.
                    </p>

                    <h4>Conclusion</h4>
                    <p>
                      AWS Polly is a valuable tool that can convert text into
                      natural-sounding speech for applications. It offers
                      easy-to-use customization options to suit the specific
                      needs of each app. From enhancing accessibility for
                      visually impaired users to improving interactions in IVR
                      systems, Polly serves a wide range of practical purposes.
                      It is especially useful for e-learning platforms and
                      audiobooks, as well as multilingual applications. As
                      voice-driven apps become more popular, AWS Polly can be
                      the solution your application needs.
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
