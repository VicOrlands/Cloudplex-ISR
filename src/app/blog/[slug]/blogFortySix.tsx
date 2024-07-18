/* eslint-disable no-useless-escape */
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
import badge from "../../../assets/images/blog/blog46/first.png";
import Img1 from "../../../assets/images/blog/blog46/second.png";
import Img2 from "../../../assets/images/blog/blog46/third.png";
import Img3 from "../../../assets/images/blog/blog46/fourth.png";
import Img4 from "../../../assets/images/blog/blog46/fifth.png";
import Img5 from "../../../assets/images/blog/blog46/sixth.png";
import Img6 from "../../../assets/images/blog/blog46/seven.png";
import Img7 from "../../../assets/images/blog/blog46/eight.png";
import Img8 from "../../../assets/images/blog/blog46/nine.png";
import { CopyBlock, a11yDark } from "react-code-blocks";

const code1 = `
import json

def lambda_handler(event, context):
    # Get the uploaded file's information from the event
    bucket = event\['Records'\][0]\['s3'\]['bucket']['name']
    key = event\['Records'\][0]\['s3'\]['object']['key']

    # Extract the file extension from the key
    file_extension = key.split('.')[-1].lower()

    # List of image file extensions
    image_extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp']

    # List of document file extensions
    document_extensions = ['doc', 'docx', 'pdf', 'txt', 'ppt', 'pptx', 'xls', 'xlsx']

    if file_extension in image_extensions:
        file_type = 'image'
    elif file_extension in document_extensions:
        file_type = 'document'
    else:
        file_type = 'unknown'

    response = {
        'statusCode': 200,
        'type': file_type,
        'fileInfo':{
            'bucket':bucket,
            'key':key

        }
    }

    return response
`;

const code2 = `
import boto3
from PIL import Image
from io import BytesIO

def process_image(input_bucket, input_key, output_bucket, output_key, new_size=(300, 300)):
  """
  Processes an image stored in S3 by resizing it and converting it to grayscale.

  Parameters:
      input_bucket (str): The name of the input S3 bucket.
      input_key (str): The key of the input object in the input S3 bucket.
      output_bucket (str): The name of the output S3 bucket.
      output_key (str): The key of the output object in the output S3 bucket.
      new_size (tuple): A tuple representing the new size of the image (width, height).
  """
  # Initialize S3 client
  s3 = boto3.client('s3')

  # Download the input image from S3
  input_image_obj = s3.get_object(Bucket=input_bucket, Key=input_key)
  input_image_bytes = input_image_obj['Body'].read()
  input_image = Image.open(BytesIO(input_image_bytes))

  # Process the image
  processed_image = input_image.resize(new_size).convert('L')

  # Upload the processed image to S3
  output_image_buffer = BytesIO()
  processed_image.save(output_image_buffer, format='JPEG')
  output_image_buffer.seek(0)
  s3.put_object(Bucket=output_bucket, Key=output_key, Body=output_image_buffer)

def lambda_handler(event, context):
  """
  Lambda function handler.

  Parameters:
      event (dict): The event data passed to the Lambda function.
      context (object): The runtime information of the Lambda function.

  Returns:
      dict: The response indicating the completion of the function.
  """
  # Output S3 bucket where the processed image will be stored
  output_bucket = 'process-image-demo-bck'

  # Extract input S3 bucket and object key from the event
  input_s3_bucket = event\['fileInfo'\]['bucket']
  input_s3_object_key = event\['fileInfo'\]['key']

  # Use the same object key for output
  output_s3_object_key = input_s3_object_key

  # Process the image
  process_image(input_s3_bucket, input_s3_object_key, output_bucket, output_s3_object_key)

  # Return response
  response = {"finished": true, "filename":output_s3_object_key}
  return response`;

const code3 = `
import json

def lambda_handler(event, context):
  # TODO implement
  output_bucket = 'process-document-demo-bck'
  input_s3_bucket = event\['fileInfo'\]['bucket']
  input_s3_object_key = event\['fileInfo'\]['key']
  output_key = input_s3_object_key

  s3 = boto3.client('s3')

  s3.put_object(Bucket=output_bucket, Key=output_key, Body=output_image_buffer)

  response = {"finished": true, "filename": output_key}
  return response`;

const code4 = `{
  "Comment": "A description of my state machine",
  "StartAt": "File upload",
  "States": {
    "File upload": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "OutputPath": "$.Payload",
      "Parameters": {
        "Payload.$": "$",
        "FunctionName": "arn:aws:lambda:us-east-1:276023487603:function:check-image-or-document:$LATEST"
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException",
            "Lambda.TooManyRequestsException"
          ],
          "IntervalSeconds": 1,
          "MaxAttempts": 3,
          "BackoffRate": 2
        }
      ],
      "Next": "Choice"
    },
    "Choice": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.type",
          "StringEquals": "image",
          "Next": "Process image"
        },
        {
          "Variable": "$.type",
          "StringEquals": "document",
          "Next": "Process document"
        }
      ]
    },
    "Process image": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "OutputPath": "$.Payload",
      "Parameters": {
        "Payload.$": "$",
        "FunctionName": "arn:aws:lambda:us-east-1:276023487603:function:process-image-demo:$LATEST"
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException",
            "Lambda.TooManyRequestsException"
          ],
          "IntervalSeconds": 1,
          "MaxAttempts": 3,
          "BackoffRate": 2
        }
      ],
      "End": true
    },
    "Process document": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "OutputPath": "$.Payload",
      "Parameters": {
        "Payload.$": "$",
        "FunctionName": "arn:aws:lambda:us-east-1:276023487603:function:process-document-demo:$LATEST"
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException",
            "Lambda.TooManyRequestsException"
          ],
          "IntervalSeconds": 1,
          "MaxAttempts": 3,
          "BackoffRate": 2
        }
      ],
      "End": true
    }
  }
}`;

export default class BlogFortySix extends Component {
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-step-functions-a-practical-guide"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-step-functions-a-practical-guide"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-step-functions-a-practical-guide"
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
                    <h2>AWS Step functions - A Practical Guide</h2>
                    <br />
                    <img src={badge} alt="awspartnerbadge" width="200px" />
                    <br />
                    <br />
                    <p>
                      In this tutorial, we'll explain what AWS Step Functions
                      are, show you how they work, and guide you through some
                      examples to help you understand and use them effectively.
                      Let's get started on making your workflow easier with AWS
                      Step Functions!
                    </p>

                    <h4>What is AWS Step function</h4>
                    <p>
                      It allows you to coordinate and automate the execution of
                      multiple AWS services in response to various events or
                      triggers. With Step Functions, you can build workflows,
                      known as state machines, that define the sequence of steps
                      or tasks to be executed, along with the conditions for
                      transitioning between these steps.
                    </p>
                    <p>
                      Step Functions simplifies the process of managing complex
                      workflows, making it easier to implement and maintain
                      business logic, data processing pipelines, and other
                      workflow-driven applications. It provides features such as
                      error handling, retries, parallel execution, and task
                      branching, enabling you to create robust and scalable
                      applications without managing the underlying
                      infrastructure.
                    </p>
                    <p>
                      Overall, AWS Step Functions is a powerful tool for
                      building scalable, reliable, and event-driven
                      applications, allowing you to focus on your business logic
                      rather than the underlying infrastructure.
                    </p>

                    <h4>What we will be building</h4>
                    <p>
                      We will build a simple document processing workflow, where
                      we have a single endpoint of upload a file, and we will be
                      sending the file to different places for processing
                      depending on the file type.
                    </p>
                    <p>
                      Here is an illustration showing what we will be building:
                    </p>
                    <img
                      src={badge}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <h6>Prerequisite;</h6>
                    <p>
                      Before diving in, you need to set up your AWS environment.
                      This involves:
                    </p>
                    <ul>
                      <li>
                        Creating an AWS Account and IAM Role: If you don't
                        already have an AWS account, sign up for one. Next,
                      </li>

                      <li>
                        Create Three 3 lambda functions: We will need three
                        lambda function, one for detecting the file type,
                        another for processing the image, and the third one for
                        processing document files. We can name these functions{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          check-image-or-document
                        </code>
                        ,{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          process-image-demo
                        </code>
                        , and{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          process-document-demo
                        </code>{" "}
                        respectively.
                      </li>

                      <li>
                        Create two S3 bucket where we will store the processed
                        files, you can name them{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          process-image-demo-bck
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
                          process-document-demo-bck.
                        </code>
                      </li>
                    </ul>

                    <br />
                    <p
                      style={{
                        textIndent: 20,
                        borderLeft: "4px solid grey",
                      }}
                    >
                      We will be using Python as the primary language for this
                      demo.
                    </p>
                    <br />

                    <p>
                      Now, let populate our lambda functions with the code to
                      process our image and document. Without making it too
                      complicated, we will be resizing the image, and for the
                      document, we will just store it directly to the s3 button.
                    </p>

                    <h6>Initial lambda function;</h6>
                    <p>
                      So this will be the function in the workflow, that will
                      detect the file type and pass the result into the rest of
                      the workflow for processing.
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

                    <p>
                      Code for{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        **process-image-demo**
                      </code>{" "}
                      lambda function;
                    </p>

                    <p>
                      You can populate the lambda function with the following
                      code:
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
                      Code for{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        **process-image-demo**
                      </code>{" "}
                      lambda function;
                    </p>

                    <p>
                      You can populate the lambda function with the following
                      code:
                    </p>

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

                    <p>
                      Know that we have both functions ready, There are a few
                      things we should clarify before moving forward.
                    </p>

                    <ul>
                      <li>
                        The{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          input-s3-bucket
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
                          input-s3-bucket-key
                        </code>{" "}
                        is getting it details from{" "}
                        <code
                          style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                          }}
                        >
                          event[``'``fileinfo``'``]
                        </code>{" "}
                        which is the output of our initial lambda function.
                      </li>
                    </ul>

                    <h4>Setting up our step function</h4>
                    <p>
                      Now that all of our functions are ready, let chain them
                      together in a step function.
                    </p>

                    <p>
                      First, navigate to step functions and create a new state
                      machine, you get a dialog that looks like this:
                    </p>
                    <img
                      src={Img1}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <p>
                      We will be using a blank template, click select to
                      continue.
                    </p>

                    <p>
                      Second, Drag a lambda function into the workflow, and also
                      provide the function name. In this case, we’re pointing it
                      to our{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        check-image-or-document
                      </code>{" "}
                      lambda function.
                    </p>
                    <img
                      src={Img2}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <p>
                      Next up, we will add a choice flow, which will determine
                      the next function to trigger depending on the output from
                      our{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        check-image-or-document
                      </code>{" "}
                      function.
                    </p>
                    <img
                      src={Img3}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <p>
                      We can configure, our rules to check the value returned
                      from the previous lambda function which is{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        check-image-or-document
                      </code>{" "}
                      . Since our function will be returning a string with
                      either -{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        image
                      </code>
                      ,{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        document
                      </code>
                      , or{" "}
                      <code
                        style={{
                          background: "grey",
                          padding: 5,
                          color: "#f0f0f0",
                          borderRadius: 6,
                        }}
                      >
                        unknown
                      </code>
                      . We can easily check for that In the rule.
                    </p>
                    <p>For Image (rule #1)</p>
                    <img
                      src={Img4}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <p>For Documents (rule #2)</p>
                    <img
                      src={Img5}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <p>
                      Now, you can add the respective functions to the step and
                      your workflow should look like this:
                    </p>
                    <img
                      src={Img6}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <br />
                    <br />
                    <p
                      style={{
                        textIndent: 20,
                        borderLeft: "4px solid grey",
                      }}
                    >
                      Make sure to connect to their respective lambda functions.
                    </p>

                    <p>The code for this looks like this:</p>
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

                    <p>
                      Finally, you can hit the create button, to complete the
                      state machine setup, and a dialog like this will show up:
                    </p>
                    <img
                      src={Img7}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <p>
                      Congratulations on completing our AWS Step Functions
                      tutorial! You've now gained a solid understanding of how
                      to use this powerful orchestration service to streamline
                      and automate your workflows in the cloud. By mastering AWS
                      Step Functions, you have unlocked the potential to build
                      scalable, reliable, and efficient applications that
                      respond dynamically to changing events and requirements.
                    </p>

                    <p>
                      You can test your workflow, with some test data, and you
                      workflow output should look like this:
                    </p>
                    <img
                      src={Img8}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />

                    <p>
                      As you continue your journey with AWS, remember to explore
                      the various features and integrations that Step Functions
                      offers. Experiment with different workflow patterns,
                      incorporate error handling and retries, and leverage the
                      flexibility of state machines to create tailored solutions
                      for your specific use cases.
                    </p>

                    <p>
                      We hope this tutorial has equipped you with the knowledge
                      and confidence to leverage AWS Step Functions effectively
                      in your projects. Remember, practice makes perfect, so
                      don't hesitate to dive deeper into the documentation,
                      explore additional resources, and continue learning and
                      experimenting with AWS services.
                    </p>

                    <p>
                      Thank you for joining us on this learning adventure, and
                      best of luck with your future endeavors in cloud computing
                      and serverless application development!
                    </p>

                    <p>Happy orchestrating!</p>

                    <h6>Continue Reading</h6>
                    <p>
                      <a href="https://cloudplexo.com/">
                        Top Cloud Services providers with CloudPlexo's
                        Innovative Solutions
                      </a>
                    </p>
                    <p>
                      <a href="https://cloudplexo.com/how-to-deploy-and-host-your-web-app-on-aws-amplify">
                        How to Deploy and Host Your Web App on AWS Amplify
                      </a>
                    </p>
                    <p>
                      <a href="https://cloudplexo.com/uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python">
                        Uploading Large Files Upto 5TB to Amazon S3 using Boto3
                        in Python
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
