"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import badge from "@/assets/blog/blog42/aws_login_screen.webp";
import Img1 from "@/assets/blog/blog42/aws_s3_search_image.webp";
import Img2 from "@/assets/blog/blog42/s3_bucket_landing.webp";
import Img3 from "@/assets/blog/blog42/create_new_bucket_name_screen.webp";
import Img4 from "@/assets/blog/blog42/create_bucket_button.webp";
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
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/uploading-and-downloading-files-from-amazon-sw3-using-boto3"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/uploading-and-downloading-files-from-amazon-sw3-using-boto3"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/uploading-and-downloading-files-from-amazon-sw3-using-boto3"
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
            Uploading and Downloading Files to/from Amazon S3 using
            Boto3
          </h1>
          <br />
          <Image src={badge} alt="awspartnerbadge" />
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
            <Image
              src={badge}
              alt="ilearn cloud"
            />{" "}
            <br />
            <br />
            <li>Navigate to the S3 service.</li>
            <Image
              src={Img1}
              alt="ilearn cloud"
            />{" "}
            <br />
            <br />
            <li>Click "Create bucket."</li>
            <Image
              src={Img2}
              alt="ilearn cloud"
            />{" "}
            <br />
            <br />
            <li>Enter a unique bucket name and choose a region.</li>
            <Image
              src={Img3}
              alt="ilearn cloud"
            />{" "}
            <br />
            <br />
            <li>
              Configure additional settings if needed and click
              "Create bucket."
            </li>
            <Image
              src={Img4}
              alt="ilearn cloud"
            />
          </ol>
          <br /> <br />
          <h4>Uploading a File to S3:</h4>
          <CopyBlock
            text={code1}
            language="javascript"
            showLineNumbers={false}
            theme={a11yDark}
            wrapLongLines={true} />
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
            wrapLongLines={true} />
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
            wrapLongLines={true} />
          <br />
          <br />
          <h4>Downloading a File from S3:</h4>
          <CopyBlock
            text={code4}
            language="javascript"
            showLineNumbers={false}
            theme={a11yDark}
            wrapLongLines={true} />
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
            <Link href="https://cloudplexo.com/">
              Top Cloud Services providers with CloudPlexo's
              Innovative Solutions
            </Link>
          </p>
          <p>
            <Link href="https://cloudplexo.com/building-a-basic-web-application-on-aws">
              Step-by-Step Guide: Building a Basic Web Application on
              AWS
            </Link>
          </p>
          <p>
            <Link href="https://cloudplexo.com/introduction-to-aws-cli-basic-commands-for-beginners">
              Introduction to AWS CLI: Basic Commands for Beginners
            </Link>
          </p>
        </div>
      </section >
    );
  }
}
