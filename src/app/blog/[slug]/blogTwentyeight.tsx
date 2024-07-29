"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import { CopyBlock, dracula } from "react-code-blocks";
import IDCard from "@/assets/blog/Advanced Document Processing with AWS Textract Dummy_id.webp";
import cover from "@/assets/blog/Advanced Document Processing with AWS Textract.webp";

const code1 = `import boto3
import sys
import re
import json
from collections import defaultdict

def load_image():
    s3_bucket = "textract-images-bucket-2"
    s3_key = "dummy_id.jpeg"
    # process using image bytes

    textract = boto3.client('textract', region_name='us-east-1')
    response = textract.analyze_document(
              Document={'S3Object': {'Bucket': s3_bucket, 'Name': s3_key}}
, FeatureTypes=['FORMS'])
    return response`;

const code2 = `def get_kv_map(file_name):

    response = load_image()
    # Get the text blocks
    blocks = response['Blocks']

    # get key and value maps
    key_map = {}
    value_map = {}
    block_map = {}
    for block in blocks:
        block_id = block['Id']
        block_map[block_id] = block
        if block['BlockType'] == "KEY_VALUE_SET":
            if 'KEY' in block['EntityTypes']:
                key_map[block_id] = block
            else:
                value_map[block_id] = block

    return key_map, value_map, block_map`;

const code3 = `def get_kv_relationship(key_map, value_map, block_map):
    kvs = defaultdict(list)
    for block_id, key_block in key_map.items():
        value_block = find_value_block(key_block, value_map)
        key = get_text(key_block, block_map)
        val = get_text(value_block, block_map)
        kvs[key].append(val)
    return kvs

def find_value_block(key_block, value_map):
    for relationship in key_block['Relationships']:
        if relationship['Type'] == 'VALUE':
            for value_id in relationship['Ids']:
                value_block = value_map[value_id]
    return value_block


def get_text(result, blocks_map):
    text = ''
    if 'Relationships' in result:
        for relationship in result['Relationships']:
            if relationship['Type'] == 'CHILD':
                for child_id in relationship['Ids']:
                    word = blocks_map[child_id]
                    if word['BlockType'] == 'WORD':
                        text += word['Text'] + ' '
                    if word['BlockType'] == 'SELECTION_ELEMENT':
                        if word['SelectionStatus'] == 'SELECTED':
                            text += 'X '

    return text`;

const code4 = `def print_kvs(kvs):
    for key, value in kvs.items():
        print(key, ":", value)

def lambda_handler(file_name):
    key_map, value_map, block_map = get_kv_map(file_name)

    # Get Key Value relationship
    kvs = get_kv_relationship(key_map, value_map, block_map)
    print("\n\n== FOUND KEY : VALUE pairs ===\n")
    print_kvs(kvs)`;

const code5 = `== FOUND KEY : VALUE pairs ===

ISSUE DATE  : ['28 AUG 14 ']
DATE of BIRTH  : ['01 OCT 60 ']
HEIGHT  : ['26cm ']
SEX  : ['M ']
MIDDLE NAME  : ['CITIZEN ']
EXPIRY  : ['01/19 ']
MENT NUMBER  : ['4812640614 ']
FIRST NAME  : ['NIGERIAN ']
SURNAME  : ['PROUD ']
NATIONALITY  : ['NGA ']
My  : ['Signature ']`;

const markdownContent1 = `Document={'S3Object': {'Bucket': s3_bucket, 'Name': s3_key}}`;
const markdownContent2 = ` FeatureTypes=['FORMS']`;

export default class BlogTwentyEight extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/advanced-document-processing-with-aws-textract"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/advanced-document-processing-with-aws-textract"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/advanced-document-processing-with-aws-textract"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </Link>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h1>Advanced Document Processing with AWS Textract</h1>
          <Image src={cover} alt="Advanced Document Processing with AWS Textract" />
          <br />
          <p>
            In today's digital world, businesses and organizations
            deal with an ever-increasing volume of documents, ranging
            from invoices and contracts to forms and reports.
            Extracting structured data from these documents manually
            can be time-consuming, error-prone, and inefficient.
          </p>
          <p>
            This is where AWS Textract, a service provided by Amazon
            Web Services (AWS), comes into play. AWS Textract
            leverages machine learning to automatically recognize and
            extract text, forms, tables, and other valuable data from
            a variety of document types.
          </p>
          <p>
            In this article, we will explore how to perform advanced
            document processing with AWS Textract and unlock the
            potential of automated data extraction. In specific, we
            will be analyzing documents to extract forms and form
            data.
          </p>

          <h4>Setting up Your Environment</h4>
          <p>
            Before diving in, you need to set up your AWS environment.
            This involves:
          </p>
          <ol>
            <li>
              <b>Creating an AWS Account and IAM Role:</b> If you
              don't already have an AWS account, sign up for one.
              Next, create a lambda function and update the role with
              the necessary permissions to use Textract. The role
              should have policies like AmazonTextractFullAccess or
              custom policies with the required permissions.
            </li>
            <li>
              <b>Creating an S3 Bucket: </b>You'll need to store the
              documents you want to process in an Amazon S3 bucket.
              Textract will analyze documents from this bucket.
            </li>
          </ol>

          <h4>Starting a Textract Job</h4>
          <p>
            Now that your environment is set up, it's time to start
            processing documents with Textract. Here are the steps
            involved:
          </p>
          <ol>
            <li>
              <b>Choose the Documents: </b>Decide which documents you
              want to process and upload them to your S3 bucket.{" "}
            </li>
            <li>
              <b>Start a Textract Job: </b>
              You can use either the AWS SDK or AWS CLI to start a
              Textract job. Specify the S3 bucket and the document(s)
              you want to process. Textract supports various document
              formats, including PDF, image files (JPEG, PNG), and
              more. In our case, we will be using the SDK in a Lambda
              function.
            </li>
          </ol>
          <p>
            From this moment onward, we will be writing a lot of code,
            but most of it is reusable and it can be copied over to
            any Textract project.
            <br />
            <br />
            <CopyBlock
              text={code1}
              language="python"
              showLineNumbers={false}
              theme={dracula}
              wrapLongLines={false} />
            <br />
            So this is the first thing we are doing, loading our test
            image from an s3 bucket.
            <br />
            Everything here is very basic though, in the Textract API
            the analyse_document function, we pass two arguments:
          </p>

          <ol>
            <li>
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                {markdownContent1}
              </code>
              , This is for the location of the document we will be
              processing
            </li>
            <li>
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                {markdownContent2}
              </code>
              , This argument specifies the type of data we are
              looking for in this document. Which is forms.
            </li>
          </ol>

          <p>
            If you were to call this function in your{" "}
            <code
              style={{
                background: "grey",
                padding: 5,
                color: "#f0f0f0",
                borderRadius: 6,
              }}
            >
              lambda_handler
            </code>
            , you would be able to see the result, but in a super
            cluttered way.
            <br />
            The series of functions we will be writing next will be
            just to declutter the result. As said earlier, these
            functions will be reusable across all of your Textract
            projects. It will only be invalid if AWS Textract decides
            to change the syntax of the response you get.
            <br />
            <CopyBlock
              text={code2}
              language="python"
              showLineNumbers={false}
              theme={dracula}
              wrapLongLines={false} />
          </p>

          <p>
            In simple terms, this function organizes the information
            extracted from the document using Textract into three
            separate collections. These collections are like folders:
          </p>

          <ol>
            <li>
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                key_map:
              </code>{" "}
              It's a folder for blocks that contain keys or labels.
              For example, if the document has labels like "Name" or
              "Date," those blocks are placed here.
            </li>

            <li>
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                value_map:
              </code>{" "}
              This folder holds blocks that contain values associated
              with the keys. If, for instance, you have corresponding
              data like "John Doe" or "2023-09-25," these blocks are
              stored here.
            </li>

            <li>
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                block_map:
              </code>{" "}
              Think of this as a general folder where all the
              extracted blocks are stored. It includes both key and
              value blocks, as well as any other type of block found
              in the document.
            </li>
          </ol>

          <p>
            Why is this helpful? Well, it makes it easier to work with
            the extracted data, especially when you're dealing with
            documents structured as key-value pairs. You can quickly
            find and use the keys and their associated values, thanks
            to this organization.
            <br />
            <CopyBlock
              text={code3}
              language="python"
              showLineNumbers={false}
              theme={dracula}
              wrapLongLines={false} />
          </p>

          <p>Here's a step-by-step explanation:</p>
          <ol>
            <li>
              <b>Initialization</b>: The function initializes an empty
              dictionary called{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                kvs
              </code>
              . This dictionary will be used to establish
              relationships between key-value pairs. It uses{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                defaultdict(list)
              </code>{" "}
              to ensure that each key in{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                kvs
              </code>{" "}
              maps to a list, allowing multiple values to be
              associated with a single key.
            </li>
            <li>
              <b>Looping Through Key Blocks</b>: The function iterates
              through each key block in the{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                key_map
              </code>{" "}
              dictionary. Each key block represents a label or
              identifier.
            </li>
            <li>
              <b>Finding Corresponding Value Block</b>: For each key
              block, it calls a function named{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                find_value_block(key_block, value_map)
              </code>{" "}
              to locate the corresponding value block in the{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                value_map
              </code>
              . This function is assumed to find and return the value
              block associated with the given key block.
            </li>
            <li>
              <b>Extracting Key and Value Text</b>: After identifying
              the key and value blocks, the function extracts the text
              content from these blocks using a function called{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                get_text(key_block, block_map)
              </code>{" "}
              and{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                get_text(value_block, block_map)
              </code>
              . The block_map is used to locate the blocks within all
              the blocks extracted from the document.
            </li>
            <li>
              Creating Relationships: The extracted key and value
              texts are used to establish relationships within the{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                kvx
              </code>{" "}
              dictionary. Specifically, it appends the value (
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                val
              </code>
              ) to the list associated with the key (
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                key
              </code>
              ) in the{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                kvx
              </code>{" "}
              dictionary.
            </li>
            <li>
              Return: Finally, the function returns the{" "}
              <code
                style={{
                  background: "grey",
                  padding: 5,
                  color: "#f0f0f0",
                  borderRadius: 6,
                }}
              >
                kvx
              </code>{" "}
              dictionary, which now contains key-value relationships.
              Each key in the dictionary corresponds to a label or key
              block, and its associated value is a list containing one
              or more values extracted from value blocks associated
              with that key.
            </li>
          </ol>

          <p>
            In essence, this function builds upon the initial
            categorization of key and value blocks to create
            structured relationships between them. It's particularly
            useful when processing documents that contain multiple
            key-value pairs, enabling easy access to the associated
            values for each key.
            <br />
          </p>

          <p>
            Finally, we will use all of these functions in our main
            function/lambda_handler function
            <br />
            <CopyBlock
              text={code4}
              language="python"
              showLineNumbers={false}
              theme={dracula}
              wrapLongLines={false} />
            <br />
            For this demo, we are only printing the result to the
            console, but you will want to return that as a JSON or
            write that somewhere, Depending on your use case or how
            you architect your workflow.
          </p>

          <h4>Testing</h4>
          <hr />
          <p>
            In my s3, I have uploaded a sample ID card image, which
            looks like this 👇🏾
            <br />
            <Image
              src={IDCard}
              alt="Advanced Document Processing with AWS Textract"
            />
            <br />
            <br />
            After testing, the result looks something like this.
            <br />
            <CopyBlock
              text={code5}
              language="python"
              showLineNumbers={false}
              theme={dracula}
              wrapLongLines={false} />
            And this is such an accurate result, the form data was
            detected and extracted from this image.
          </p>

          <p>
            NOTE: The entire document processing was done by the
            initial function we wrote, which uses Textract API. Every
            other subsequent function is used to format the response
            for better results and further processing if needed.
          </p>

          <p>
            That's it! You've learned to use AWS Textract for document
            processing. You can leverage the full potential of
            Textract to perform advanced document processing and
            automation in your applications or business processes.
          </p>
          <h6>Happy Coding!</h6>
        </div>
      </section >
    );
  }
}
