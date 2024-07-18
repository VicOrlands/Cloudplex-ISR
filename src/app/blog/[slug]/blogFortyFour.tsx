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
import { CopyBlock, a11yDark } from "react-code-blocks";
import badge from "../../../assets/images/blog/Boto 3 in python.webp";

const code1 = `import boto3
from boto3.s3.transfer import TransferConfig

# Set your AWS credentials and region
aws_access_key_id = 'YOUR_ACCESS_KEY_ID'
aws_secret_access_key = 'YOUR_SECRET_ACCESS_KEY'
region_name = 'YOUR_REGION'

# Set your S3 bucket and object key
bucket_name = 'YOUR_BUCKET_NAME'
object_key = 'your-prefix/your-large-file.tar.gz'

# Specify the local file to upload
local_file_path = 'path/to/your-large-file.tar.gz'

# Set the desired part size and number of threads
part_size_mb = 50  # You can adjust this based on your requirements
num_threads = 10

# Create an S3 client
s3 = boto3.client('s3', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key, region_name=region_name)

# Create a TransferConfig object
transfer_config = TransferConfig(multipart_threshold=part_size_mb * 1024 * 1024, max_concurrency=num_threads)

# Create an S3 transfer manager
transfer_manager = boto3.s3.transfer.TransferManager(s3, config=transfer_config)

try:
    # Upload the file using multipart upload
    upload = transfer_manager.upload(local_file_path, bucket_name, object_key)

    # Wait for the upload to complete
    upload.wait()

    print(f"File uploaded successfully to {bucket_name}/{object_key}")

except Exception as e:
    print(f"Error uploading file: {e}")

finally:
    # Clean up resources
    transfer_manager.shutdown()`;

const code2 = `im# Set your AWS credentials and region
aws_access_key_id = 'YOUR_ACCESS_KEY_ID'
aws_secret_access_key = 'YOUR_SECRET_ACCESS_KEY'
region_name = 'YOUR_REGION'`;

const code3 = `# Set your S3 bucket and object key
bucket_name = 'YOUR_BUCKET_NAME'
object_key = 'your-prefix/your-large-file.tar.gz'`;

const code4 = `# Specify the local file to upload
local_file_path = 'path/to/your-large-file.tar.gz'`;

const code5 = `# Set the desired part size and number of threads
part_size_mb = 50  # You can adjust this based on your requirements
num_threads = 10`;

const code6 = `# Create an S3 client
s3 = boto3.client('s3', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key, region_name=region_name)`;

const code7 = `# Create a TransferConfig object
transfer_config = TransferConfig(multipart_threshold=part_size_mb * 1024 * 1024, max_concurrency=num_threads)`;

const code8 = `# Wait for the upload to complete
upload.wait()`;

const code9 = `# Clean up resources
transfer_manager.shutdown()`;

export default class BlogFortyFour extends Component {
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python"
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
                      Uploading Large Files Upto 5TB to Amazon S3 using Boto3 in
                      Python
                    </h2>
                    <br />
                    <img src={badge} alt="awspartnerbadge" width="200px" />
                    <br />
                    <br />
                    <p>
                      Amazon Simple Storage Service (S3) is a widely-used cloud
                      storage service that allows users to store and retrieve
                      any amount of data at any time. Uploading large files,
                      especially those approaching the terabyte scale, can be
                      challenging. Boto3, the AWS SDK for Python, provides a
                      powerful and flexible way to interact with S3, including
                      handling large file uploads through its multipart upload
                      feature.
                    </p>
                    <hr />
                    <h4>Prerequisites:</h4>
                    <p>Before we begin, make sure you have the following:</p>
                    <ul>
                      <li>
                        AWS Account: You need an AWS account with appropriate
                        permissions to access S3.
                      </li>
                      <li>
                        Boto3 Installation: Install Boto3 by running{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          pip install boto3
                        </code>{" "}
                        in your terminal.
                      </li>
                      <li>
                        AWS Credentials: Set up your AWS credentials, either by
                        configuring the AWS CLI (
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          aws configure
                        </code>
                        ) or directly within your script.
                      </li>
                    </ul>
                    <h4>Why Multipart?</h4>
                    <hr />
                    <ul>
                      <li>
                        While single-file uploads using Presigned URLs are
                        limited to a maximum of 5GB, multipart uploads can
                        handle files up to 5TB.
                      </li>
                      <li>
                        Multipart uploads are efficient for large files,
                        especially when parallelization can be leveraged to
                        speed up the process.
                      </li>
                      <li>
                        Presigned URLs may introduce additional latency, as each
                        part of the file requires a separate HTTP request.
                      </li>
                    </ul>
                    <h4>Benefits</h4>
                    <p>
                      S3 Multipart Upload is beneficial for handling large files
                      efficiently. Here are key reasons to use it:
                    </p>
                    <ol>
                      <li>
                        Efficiency for Large Files: Splits large files into
                        smaller parts for better handling.
                      </li>
                      <li>
                        Resilience to Failures: Reduces the risk of failure by
                        allowing resumption from the point of interruption.
                      </li>
                      <li>
                        Parallel Uploads: Speeds up uploads by enabling parallel
                        uploading of file parts.
                      </li>
                      <li>
                        Optimal for Unstable Connections: Minimizes the impact
                        of network failures by retrying only the failed parts.
                      </li>
                      <li>
                        Support for Transfer Acceleration: Compatible with S3
                        Transfer Acceleration for faster uploads.
                      </li>
                      <li>
                        SDK Support: AWS SDKs offer built-in support,
                        simplifying implementation.
                      </li>
                      <li>
                        Concurrency Control: Allows control over the number of
                        parallel uploads.
                      </li>
                    </ol>
                    <br /> <br />
                    <h4>Writing the Python Script</h4>
                    <hr />
                    <p>
                      Let's create a Python script that utilizes Boto3 to upload
                      a large file to S3 in a multipart fashion.
                    </p>
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
                    <h4>Understanding the Script</h4>
                    <hr />
                    <p>Let's break down the key components of the script:</p>
                    <ul>
                      <li>
                        AWS Credentials and Configuration: Set your AWS
                        credentials (access key and secret key) and the AWS
                        region where your S3 bucket is located.
                      </li>
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
                      <br />
                      <li>
                        S3 Bucket and Object Key: Define the target S3 bucket
                        and the object key (path) under which the file will be
                        stored
                      </li>
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
                      <li>
                        Local File Path: Specify the local path of the large
                        file you want to upload
                      </li>
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
                      <br />
                      <li>
                        Part Size and Concurrency: Determine the part size in
                        megabytes and the number of threads to use during the
                        multipart upload. Adjust these values based on your
                        network conditions and requirements.
                      </li>
                      <CopyBlock
                        text={code5}
                        language="javascript"
                        showLineNumbers={false}
                        theme={a11yDark}
                        codeBlock={{
                          lineNumbers: false,
                          wrapLines: true,
                        }}
                      />
                      <br />
                      <li>
                        Creating S3 Client and Transfer Manager: Initialize the
                        Boto3 S3 client and create a TransferConfig object with
                        the specified multipart settings.
                      </li>
                      <CopyBlock
                        text={code6}
                        language="javascript"
                        showLineNumbers={false}
                        theme={a11yDark}
                        codeBlock={{
                          lineNumbers: false,
                          wrapLines: true,
                        }}
                      />
                      <br />
                      <li>
                        Multipart Upload: Use the TransferManager to initiate a
                        multipart upload of the specified file to the S3 bucket.
                        This method automatically handles the division of the
                        file into parts and manages the upload process.
                      </li>
                      <CopyBlock
                        text={code7}
                        language="javascript"
                        showLineNumbers={false}
                        theme={a11yDark}
                        codeBlock={{
                          lineNumbers: false,
                          wrapLines: true,
                        }}
                      />
                      <br />
                      <li>
                        Wait for Upload Completion: Wait for the multipart
                        upload to complete before proceeding. This ensures that
                        all parts are successfully uploaded and assembled on the
                        S3 bucket.
                      </li>
                      <CopyBlock
                        text={code8}
                        language="javascript"
                        showLineNumbers={false}
                        theme={a11yDark}
                        codeBlock={{
                          lineNumbers: false,
                          wrapLines: true,
                        }}
                      />
                      <br />
                      <li>
                        Clean Up: Finally, clean up resources by shutting down
                        the TransferManager.
                      </li>
                      <CopyBlock
                        text={code9}
                        language="javascript"
                        showLineNumbers={false}
                        theme={a11yDark}
                        codeBlock={{
                          lineNumbers: false,
                          wrapLines: true,
                        }}
                      />
                    </ul>
                    <h4>Running the Script</h4>
                    <p>To run the script:</p>
                    <ol>
                      <li>
                        Save the script to a file (e.g.{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          upload_to_s3.py
                        </code>
                        ).
                      </li>
                      <li>
                        Open a terminal and navigate to the script's directory.
                      </li>
                      <li>
                        Run the script using the command{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          python upload_to_s3.py.
                        </code>
                      </li>
                    </ol>
                    <p>
                      Ensure that the AWS credentials have the necessary
                      permissions to perform S3 uploads.
                    </p>
                    <h4>Conclusion</h4>
                    <p>
                      Uploading large files to Amazon S3 using Boto3 in Python
                      becomes a manageable task with the multipart upload
                      feature. By breaking down the file into smaller parts and
                      uploading them concurrently, you can efficiently transfer
                      large datasets to S3. Adjusting parameters such as part
                      size and concurrency allows you to optimize the upload
                      process based on your specific requirements. Incorporating
                      this approach into your workflow facilitates the seamless
                      transfer of large files to the cloud, unlocking the full
                      potential of Amazon S3 for scalable and reliable storage.
                    </p>
                    <h6>Continue Reading</h6>
                    <p>
                      <a href="https://cloudplexo.com/">
                        Top Cloud Services providers with CloudPlexo's
                        Innovative Solutions
                      </a>
                    </p>
                    <p>
                      <a href="https://cloudplexo.com/understanding-the-difference-between-aws-sns-and-sqs">
                        Understanding the Difference Between AWS SNS and SQS
                      </a>
                    </p>
                    <p>
                      <a href="https://cloudplexo.com/uploading-and-downloading-files-from-amazon-sw3-using-boto3">
                        Uploading and Downloading Files to/from Amazon S3 using
                        Boto3
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
