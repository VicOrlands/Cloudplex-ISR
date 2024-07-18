import React, { Component } from "react";
import {
  Col,
  Row,
  Input,
  Form,
  Label,
  Button,
  Container,
  FormGroup,
} from "reactstrap";
import bgimg from "../../../assets/images/1.jpg";
import FeatherIcon from "feather-icons-react";
import badge from "../../../assets/images/blog/blog42/aws_login_screen.png";
import Img1 from "../../../assets/images/blog/blog42/aws_s3_search_image.png";
import Img2 from "../../../assets/images/blog/blog42/s3_bucket_landing.png";
import Img3 from "../../../assets/images/blog/blog42/create_new_bucket_name_screen.png";
import Img4 from "../../../assets/images/blog/blog42/create_bucket_button.png";
import { CopyBlock, a11yDark } from "react-code-blocks";

const code1 = `import boto3

# Replace 'your-access-key-id' and 'your-secret-access-key' with your AWS credentials
aws_access_key_id = 'your-access-key-id'
aws_secret_access_key = 'your-secret-access-key'

# Replace 'your-bucket-name' and 'your-object-key' with the S3 bucket and object key
bucket_name = 'your-bucket-name'
object_key = 'your-object-key'
local_file_path = 'path/to/your/local/file'

# Create an S3 client
s3 = boto3.client('s3', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key)

# Upload the file
s3.upload_file(local_file_path, bucket_name, object_key)

print(f'File "{local_file_path}" uploaded to S3 bucket "{bucket_name}" with key "{object_key}"')`;
const code2 = `import os

# Retrieve the value of an environment variable
aws_access_key_id = os.environ.get('VARIABLE_NAME')
aws_secret_access_key = os.environ.get('VARIABLE_NAME')`;
const code3 = `# Replace 'your-bucket-name' and 'your-object-key' with the S3 bucket and object key
bucket_name = 'your-bucket-name'
object_key = 'your-object-key'
local_file_path = 'path/to/your/local/file.txt'

# Create an S3 client
s3 = boto3.client('s3')

# Upload the file
s3.upload_file(local_file_path, bucket_name, object_key)

print(f'File "{local_file_path}" uploaded to S3 bucket "{bucket_name}" with key "{object_key}"')`;
const code4 = `# Replace 'your-bucket-name' and 'your-object-key' with the S3 bucket and object key
local_download_path = 'path/to/your/local/downloaded/file'

# Download the file
s3.download_file(bucket_name, object_key, local_download_path)

print(f'File downloaded from S3 bucket "{bucket_name}" with key "{object_key}" to local path "{local_download_path}"')`;

export default class BlogFortyTwo extends Component {
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/uploading-and-downloading-files-from-amazon-sw3-using-boto3"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/uploading-and-downloading-files-from-amazon-sw3-using-boto3"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/uploading-and-downloading-files-from-amazon-sw3-using-boto3"
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
                    <h2>
                      Uploading and Downloading Files to/from Amazon S3 using
                      Boto3
                    </h2>
                    <br />
                    <img src={badge} alt="awspartnerbadge" width="200px" />
                    <br />
                    <br />
                    <h4>Introduction:</h4>
                    <p>
                      Amazon Simple Storage Service (S3) is a scalable object
                      storage service that allows you to store and retrieve any
                      amount of data. In this tutorial, we will guide you
                      through the process of uploading and downloading files
                      to/from an S3 bucket using the Boto3 library in Python.
                    </p>
                    <hr />
                    <h4>Prerequisites:</h4>
                    <ul>
                      <li>An AWS account with S3 access.</li>
                      <li>AWS access key ID and secret access key.</li>
                      <li>Python installed on your machine.</li>
                      <li>
                        Boto3 library installed (
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          pip install boto3
                        </code>
                        ).
                      </li>
                    </ul>
                    <h4>Step 1: Set up AWS Credentials:</h4>
                    <hr />
                    <p>
                      Ensure that you have your AWS access key ID and secret
                      access key ready. You can find or create these credentials
                      in the AWS Management Console under "My Security
                      Credentials."
                    </p>
                    <p
                      style={{
                        textIndent: 20,
                        borderLeft: "4px solid grey",
                      }}
                    >
                      If you're unfamiliar with the steps above, I highly
                      recommend checking out this article
                    </p>
                    <h4>Step 2: Create an S3 Bucket:</h4>
                    <ol>
                      <li>Log in to the AWS Management Console.</li>
                      <img
                        src={badge}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />{" "}
                      <br />
                      <br />
                      <li>Navigate to the S3 service.</li>
                      <img
                        src={Img1}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />{" "}
                      <br />
                      <br />
                      <li>Click "Create bucket."</li>
                      <img
                        src={Img2}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />{" "}
                      <br />
                      <br />
                      <li>Enter a unique bucket name and choose a region.</li>
                      <img
                        src={Img3}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />{" "}
                      <br />
                      <br />
                      <li>
                        Configure additional settings if needed and click
                        "Create bucket."
                      </li>
                      <img
                        src={Img4}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </ol>
                    <br /> <br />
                    <h4>Uploading a File to S3:</h4>
                    <CopyBlock
                      text={code1}
                      language="javascript"
                      showLineNumbers={false}
                      theme={a11yDark}
                      codeBlock={{
                        lineNumbers: false,
                        wrapLines: true,
                      }}
                    />
                    <h6>Explanation:</h6>
                    <ul>
                      <li>
                        Replace the placeholder values with your actual AWS
                        credentials, S3 bucket information, and file paths.
                      </li>
                      <li>
                        This script uses the Boto3{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          upload_file
                        </code>{" "}
                        method to upload a file to the specified S3 bucket.
                      </li>
                    </ul>
                    <p>
                      For best practices, you should set both secrets in an
                      environmental variable, And retrieve them like this:
                    </p>
                    <CopyBlock
                      text={code2}
                      language="javascript"
                      showLineNumbers={false}
                      theme={a11yDark}
                      codeBlock={{
                        lineNumbers: false,
                        wrapLines: true,
                      }}
                    />
                    <p>
                      Additionally, If you already have a profile setup in your
                      AWS CLI, we can get rid of the{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        aws_access_key_id
                      </code>{" "}
                      and the{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        aws_secret_access_key
                      </code>{" "}
                      as boto3 will automatically start the session with your
                      default profile.
                    </p>
                    <p
                      style={{
                        textIndent: 20,
                        borderLeft: "4px solid grey",
                      }}
                    >
                      This process might be unreasonable in a Devops workflow.
                    </p>
                    <p>Hence our code witll be reduced to this:</p>
                    <CopyBlock
                      text={code3}
                      language="javascript"
                      showLineNumbers={false}
                      theme={a11yDark}
                      codeBlock={{
                        lineNumbers: false,
                        wrapLines: true,
                      }}
                    />
                    <br />
                    <br />
                    <h4>Downloading a File from S3:</h4>
                    <CopyBlock
                      text={code4}
                      language="javascript"
                      showLineNumbers={false}
                      theme={a11yDark}
                      codeBlock={{
                        lineNumbers: false,
                        wrapLines: true,
                      }}
                    />
                    <h6>Explanation:</h6>
                    <ul>
                      <li>
                        Replace the placeholder values with your actual S3
                        bucket information and local file path.
                      </li>
                      <li>
                        This script uses the Boto3{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          download_file
                        </code>{" "}
                        method to download a file from the specified S3 bucket.
                      </li>
                    </ul>
                    <h4>Conclusion</h4>
                    <p>
                      Congratulations! You have successfully uploaded and
                      downloaded files to/from Amazon S3 using Boto3 in Python.
                      This tutorial covered setting up AWS credentials, creating
                      an S3 bucket, and provided code snippets for file upload
                      and download.
                    </p>
                    <h6>Continue Reading</h6>
                    <p>
                      <a href="https://cloudplexo.com/">
                        Top Cloud Services providers with CloudPlexo's
                        Innovative Solutions
                      </a>
                    </p>
                    <p>
                      <a href="https://cloudplexo.com/building-a-basic-web-application-on-aws">
                        Step-by-Step Guide: Building a Basic Web Application on
                        AWS
                      </a>
                    </p>
                    <p>
                      <a href="https://cloudplexo.com/introduction-to-aws-cli-basic-commands-for-beginners">
                        Introduction to AWS CLI: Basic Commands for Beginners
                      </a>
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
