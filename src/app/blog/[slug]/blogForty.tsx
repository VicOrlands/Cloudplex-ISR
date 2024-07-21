"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import FeatherIcon from "feather-icons-react";
import { CopyBlock, a11yDark } from "react-code-blocks";
import badge from "@/assets/blog/Introduction to CLI Basic.webp";

const code1 = `aws configure`;
const code2 = `aws configure set region your-region`;
const code3 = "aws configure set output json";
const code4 = "aws configure set cli_pager enabled/disabled";
const code5 = "aws configure list-profiles";
const code6 = "aws configure --profile your-profile-name";
const code7 = "export AWS_PROFILE=your-profile-name";
const code8 = "aws configure --profile your-profile-name delete";
const code9 = "aws s3 ls";
const code10 = "aws s3 mb s3://your-bucket-name";
const code11 = "aws s3 cp /path/to/your/file.txt s3://your-bucket-name";
const code12 = "aws s3 cp s3://your-bucket-name/file.txt /path/to/destination";
const code13 = "aws s3 rb s3://your-bucket-name";
const code14 = "aws ec2 describe-instances";
const code15 = "aws ec2 start-instances --instance-ids your-instance-id";
const code16 = "aws ec2 stop-instances --instance-ids your-instance-id";
const code17 = "aws iam list-users";
const code18 = "aws iam create-user --user-name your-username";
const code19 =
  "aws iam attach-user-policy --policy-arn your-policy-arn --user-name your-username";

export default function BlogForty() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li>Share</li>
        <li>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/introduction-to-aws-cli-basic-commands-for-beginners"
            target="blank"
          >
            <FeatherIcon
              icon="facebook"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/introduction-to-aws-cli-basic-commands-for-beginners"
            target="blank"
          >
            <FeatherIcon
              icon="twitter"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/introduction-to-aws-cli-basic-commands-for-beginners"
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
          Introduction to AWS CLI: Basic Commands for Beginners
        </h1>
        <br />
        <Image src={badge} alt="awspartnerbadge" />
        <br />
        <br />
        <p>
          The Amazon Web Services Command Line Interface (AWS CLI)
          is a powerful tool that enables users to interact with
          various AWS services using commands in the terminal or
          command prompt. This tutorial aims to introduce
          fundamental AWS CLI commands with explanations for
          beginners.
        </p>
        <h4>Prerequisites:</h4>
        <ol>
          <li>
            <b>AWS Account: </b>Sign up for an AWS account if you
            haven’t already.
          </li>
          <li>
            <b>AWS CLI Installation: </b>
            Install AWS CLI on your local machine. Refer to the
            official AWS{" "}
            <Link href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html">
              documentation
            </Link>{" "}
            for installation instructions on various operating
            systems.
          </li>
        </ol>

        <h4>Getting Started:</h4>
        <hr />

        <h5>Configure AWS CLI</h5>
        <p>Open your terminal or command prompt and type:</p>
        <CopyBlock
          text={code1}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Follow the prompts to enter:</p>
        <ul>
          <li>AWS Access Key ID</li>
          <li>AWS Secret Access Key</li>
          <li>Default region (e.g., us-west-2)</li>
          <li>Default output format (e.g., json)</li>
        </ul>
        <p>
          Once you have everything setup, the following are commands
          grouped by services or usage.
        </p>

        <h5>AWS Settings and Configuration:</h5>
        <h6>Set Default Region:</h6>
        <CopyBlock
          text={code2}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Sets the default region for AWS CLI commands.</p>

        <h6>Set Output Format:</h6>
        <CopyBlock
          text={code3}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Sets the default output format for AWS CLI commands.</p>

        <h6>Enable/Disable Paging:</h6>
        <CopyBlock
          text={code4}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Enables or disables paging for command output.</p>

        <h5>Profile Management:</h5>
        <p>
          AWS profiles are configurations within the AWS Command
          Line Interface (CLI) that store credentials and settings
          for accessing AWS services. They allow users to manage
          multiple sets of AWS credentials and switch between them
          easily. Each profile can contain its own set of
          credentials, default region, output format, and other
          configurations.
        </p>

        <h6>List Profiles:</h6>
        <CopyBlock
          text={code5}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Lists all configured profiles.</p>

        <h6>Create a Profile:</h6>
        <CopyBlock
          text={code6}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Creates a new named profile.</p>

        <h6>Switch Profiles (Temporary):</h6>
        <CopyBlock
          text={code7}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          Temporarily sets a specific profile for the current
          terminal session.
        </p>

        <h6>Delete a Profile:</h6>
        <CopyBlock
          text={code8}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Deletes a specific named profile.</p>

        <h5>AWS Simple Storage Server (S3)</h5>
        <p>
          Amazon Simple Storage Service (S3) is a scalable, secure,
          and highly available object storage service provided by
          Amazon Web Services (AWS). It allows users to store and
          retrieve any amount of data from anywhere on the web,
          offering a simple web services interface to access and
          manage data.
        </p>

        <h6>List S3 Buckets</h6>
        <p>To view all S3 buckets in your account, use:</p>
        <CopyBlock
          text={code9}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          Explanation: This command lists all the S3 buckets in your
          AWS account.
        </p>

        <h6>Create an S3 Bucket</h6>
        <CopyBlock
          text={code10}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          This command creates a new S3 bucket with the provided
          name.
        </p>

        <h6>Upload a file to an S3 bucket:</h6>
        <CopyBlock
          text={code11}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          This command copies a file from your local system to the
          specified S3 bucket.
        </p>

        <h6>Download a File from S3 Bucket</h6>
        <CopyBlock
          text={code12}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          It retrieves a file from the specified S3 bucket and saves
          it to the provided local destination.
        </p>

        <h6>Delete an empty S3 bucket</h6>
        <CopyBlock
          text={code13}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>This command removes the specified empty S3 bucket.</p>

        <h5>AWS Elastic Compute Cloud (EC2)</h5>
        <p>
          Amazon Elastic Compute Cloud (EC2) is a core service
          provided by Amazon Web Services (AWS) that enables users
          to rent virtual servers, known as instances, on which they
          can run applications. EC2 offers a scalable computing
          capacity in the cloud, allowing users to configure
          instances as needed, with control over CPU, memory,
          storage, and networking.
        </p>

        <p>Here are some usefull commands:</p>

        <h6>List all running EC2 instances</h6>
        <CopyBlock
          text={code14}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          It displays information about all running EC2 instances in
          your AWS account.
        </p>

        <h6>Start a stopped EC2 instance:</h6>
        <CopyBlock
          text={code15}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          This command initiates a stopped EC2 instance using its
          instance ID.
        </p>

        <h6>Stop a running EC2 instance:</h6>
        <CopyBlock
          text={code16}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          It halts a running EC2 instance specified by its instance
          ID.
        </p>

        <h5>AWS Identity and Access Management (IAM)</h5>
        <p>
          AWS Identity and Access Management (IAM) is a web service
          that helps securely control access to AWS services and
          resources. It enables users to manage users, groups,
          roles, and their permissions within an AWS account.
        </p>
        <p>Basic IAM Operations:</p>

        <h6>List IAM users in your AWS account:</h6>
        <CopyBlock
          text={code17}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          This command provides a list of all IAM users in your AWS
          account.
        </p>

        <h6>Create a new IAM user:</h6>
        <CopyBlock
          text={code18}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          This command generates a new IAM user with the provided
          username.
        </p>

        <h6>Attach Policy:</h6>
        <CopyBlock
          text={code19}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Attaches an IAM policy to a user.</p>

        <h5>Conclusion:</h5>
        <p>
          AWS CLI offers a convenient way to manage AWS services
          through simple commands. These basic commands provide a
          starting point for exploring and utilizing various AWS
          functionalities.
        </p>
        <p>
          Refer to the official AWS CLI documentation for more
          commands and advanced usage.
        </p>
        <p>
          <b>Note:</b> Always use AWS CLI commands carefully to
          avoid unintended actions or charges.
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
    </section >
  );
}

