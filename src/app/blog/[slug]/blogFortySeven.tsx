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
import badge from "../../../assets/images/blog/blog47/1.png";
import Img1 from "../../../assets/images/blog/blog47/2.png";
import Img2 from "../../../assets/images/blog/blog47/3.png";
import Img3 from "../../../assets/images/blog/blog47/4.png";
import Img4 from "../../../assets/images/blog/blog47/5.png";
import Img5 from "../../../assets/images/blog/blog47/6.png";
import Img6 from "../../../assets/images/blog/blog47/7.png";
import Img7 from "../../../assets/images/blog/blog47/8.png";
import Img8 from "../../../assets/images/blog/blog47/9.png";
import Img9 from "../../../assets/images/blog/blog47/10.png";
import Img10 from "../../../assets/images/blog/blog47/11.png";
import Img11 from "../../../assets/images/blog/blog47/12.png";
import Img12 from "../../../assets/images/blog/blog47/13.png";
import { CopyBlock, a11yDark } from "react-code-blocks";

const code1 = `attribute_name: {"attribute_type": "attribute_value"}`;

const code2 = `import boto3

# Initialize DynamoDB client
dynamodb = boto3.client('dynamodb')`;

const code3 = `item = {
  "productID": {
    "S": "1"
  },
  "name": {
    "S": "Example Product"
  },
  "price": {
    "N": "99.99"
  }
}

response = dynamodb.put_item(
    TableName='Products',
    Item=item
)

print("Item created successfully:", response)`;

export default class BlogFortySeven extends Component {
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
                          href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/getting-started-with-dynamodb-a-practical-approach"
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
                          href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/getting-started-with-dynamodb-a-practical-approach"
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
                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/getting-started-with-dynamodb-a-practical-approach"
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
                      Getting Started with DynamoDB - A Practical Approach
                    </h2>
                    <br />
                    <img src={Img2} alt="awspartnerbadge" width="200px" />
                    <br />
                    <br />
                    <h4>What is DynamoDB?</h4>
                    <p>
                      AWS DynamoDB is a managed NoSQL database that is optimized
                      for performance at scale. It's designed for high
                      availability and to handle massive amounts of data.
                    </p>
                    <p>
                      DynamoDB being managed means that there is no need to
                      manage the hardware, security patches and other related
                      issues. Everything under the hood is nothing you need to
                      care about.
                    </p>
                    <p>
                      One of DynamoDB's key features is its ability to
                      automatically replicate data across multiple availability
                      zones within a region, ensuring high availability and
                      fault tolerance. It also offers flexible data modeling
                      capabilities, allowing users to store structured,
                      semi-structured, or unstructured data without the need for
                      complex schema management.
                    </p>
                    <p>
                      DynamoDB is optimized for both read and write throughput,
                      making it well-suited for use cases such as gaming, ad
                      tech, IoT, mobile apps, and real-time analytics. Its
                      performance is backed by SSD storage and a distributed
                      architecture that can handle millions of requests per
                      second.
                    </p>
                    <p>
                      With DynamoDB, you can benefit from features like
                      encryption at rest, fine-grained access control using AWS
                      Identity and Access Management (IAM), and integration with
                      other AWS services such as AWS Lambda for serverless
                      computing and Amazon Redshift for data warehousing.
                    </p>

                    <h4>Core concepts:</h4>
                    <ul>
                      <li>
                        <strong>Tables:</strong> A table is a collection of
                        items.
                      </li>
                      <img
                        src={badge}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                      <br />
                      <br />
                      <li>
                        <strong>Items: </strong>A collection of Attributes, or
                        key/ value paris.
                      </li>
                      <img
                        src={Img1}
                        alt="ilearn cloud"
                        width="100%"
                        style={{
                          border: "1px solid #eaeaea",
                        }}
                      />
                      <br />
                      <br />
                      <li>
                        <strong>Access Pattern</strong> An access pattern refers
                        to the specific way in which data is queried or
                        retrieved from the database. Access patterns are crucial
                        for designing efficient DynamoDB tables and optimizing
                        performance for different types of queries. Since
                        DynamoDB is a NoSQL database, it doesn't support complex
                        join operations like traditional relational databases.
                        Instead, it relies on data modeling techniques that are
                        tailored to the specific access patterns of an
                        application.
                      </li>
                    </ul>

                    <h4>Common access patterns in DynamoDB include:</h4>
                    <ol>
                      <li>
                        Single-item retrieval: Fetching a single item from the
                        database using its primary key.
                      </li>
                      <li>
                        Querying by a specific attribute: Retrieving multiple
                        items that match a certain attribute value.
                      </li>
                      <li>
                        Scan operations: Scanning through the entire table to
                        find items that meet certain criteria.
                      </li>
                      <li>
                        Secondary indexes: Creating secondary indexes to support
                        queries based on attributes other than the primary key.
                      </li>
                      <li>
                        Sparse indexes: Using sparse indexes to efficiently
                        query for items where certain attributes may not exist.
                      </li>
                      <li>
                        Time-series data: Storing time-series data and querying
                        based on timestamps or date ranges.
                      </li>
                    </ol>
                    <p>
                      Understanding the access patterns of an application is
                      crucial for designing efficient table structures, choosing
                      appropriate primary keys, and creating secondary indexes
                      if needed. By optimizing access patterns, developers can
                      ensure that DynamoDB tables perform well and scale
                      effectively as the application grows.
                    </p>

                    <h4>Getting Started</h4>
                    <p>
                      We can jump to our AWS console, search and navigate to
                      DynamoDB.
                    </p>
                    <img
                      src={Img2}
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
                      Keep in mind that every table we create is region
                      specific.
                    </p>

                    <p>We can now create a table.</p>
                    <img
                      src={Img3}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />
                    <p>
                      Currently, we named the table “Products” and Partition key
                      “productID”. we won’t be needing sort key, as our
                      partition key will be unique.
                    </p>
                    <p
                      style={{
                        paddingLeft: 20,
                        borderLeft: "4px solid grey",
                      }}
                    >
                      A partition key is a primary key attribute that uniquely
                      identifies each item in a DynamoDB table.
                    </p>
                    <p>
                      You can click on the Customize settings to view more
                      options.
                    </p>
                    <img
                      src={Img4}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />
                    <p>
                      You can also turn on/off autoscaling, which will give you
                      a dynamic or fixed capacity units.
                    </p>
                    <p>
                      With autoscaling enabled, DynamoDB continuously monitors
                      your table's capacity utilization and adjusts provisioned
                      capacity up or down as needed to maintain utilization at
                      or close to your target value. This allows you to optimize
                      cost by automatically scaling down capacity during periods
                      of low traffic and scaling up during periods of high
                      traffic, without the need for manual adjustments.
                    </p>
                    <p>
                      Autoscaling in DynamoDB can be configured to operate
                      within specified minimum and maximum capacity limits,
                      providing flexibility and control over resource allocation
                      based on your application's requirements. It's a valuable
                      feature for maintaining performance and cost efficiency in
                      dynamic workloads.
                    </p>
                    <img
                      src={Img5}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />
                    <p>Finally, you can use the create button.</p>
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
                    <p>
                      The table takes a couple moments to create, and when it
                      done, you can have a dashboard like this:
                    </p>
                    <img
                      src={Img7}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />
                    <p>
                      As mentioned earlier, DynamoDB tables are region specific,
                      so the idea of global table create a replica of your table
                      in other regions so users can access if faster.
                    </p>
                    <p
                      style={{
                        paddingLeft: 20,
                        borderLeft: "4px solid grey",
                      }}
                    >
                      Keep in mind you will be paying more for storage, and
                      other resources provisioned.
                    </p>
                    <img
                      src={Img8}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />
                    <p>
                      To populate our table, you can use the “Explore table
                      items” button.
                    </p>
                    <img
                      src={Img9}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />

                    <h6>Creating items;</h6>
                    <p>
                      You can use the form in the console, or JSON, or using the
                      API.
                    </p>

                    <h6>Form console:</h6>
                    <img
                      src={Img10}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />

                    <h6>JSON view:</h6>
                    <img
                      src={Img11}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />

                    <p>
                      You can see in the JSON, we have the syntax as follows:
                    </p>
                    <code
                      style={{
                        background: "grey",
                        padding: 5,
                        color: "#f0f0f0",
                        borderRadius: 6,
                      }}
                    >
                      {code1}
                    </code>

                    <p>
                      In DynamoDB, the following attribute types are available:
                    </p>
                    <ol>
                      <li>
                        String (S): This type represents a Unicode string. The
                        maximum length for a string attribute value is 400 KB.
                      </li>
                      <li>
                        Number (N): This type represents a numeric value.
                        Numbers can be positive, negative, or zero. Numbers are
                        Unicode with a variable length, meaning that the maximum
                        length of a number is constrained by the maximum item
                        size limit. However, the number type itself doesn't have
                        a specific size limit.
                      </li>
                      <li>
                        Binary (B): This type represents a binary data (byte
                        array). Binary attributes are useful for storing
                        non-Unicode text, images, compressed data, and other
                        types of binary data. The maximum size for a binary
                        attribute value is 400 KB.
                      </li>
                      <li>
                        Boolean (BOOL): This type represents a Boolean value,
                        either true or false.
                      </li>
                      <li>Null (NULL): This type represents a null value.</li>
                      <li>
                        String Set (SS): This type represents a set of string
                        values. Each string set can have multiple string values,
                        but each value must be unique within the set. The
                        maximum size for a string set is 400 KB.
                      </li>
                      <li>
                        Number Set (NS): This type represents a set of numeric
                        values. Each number set can have multiple numeric
                        values, but each value must be unique within the set.
                        The maximum size for a number set is 400 KB.
                      </li>
                      <li>
                        Binary Set (BS): This type represents a set of binary
                        values (byte arrays). Each binary set can have multiple
                        binary values, but each value must be unique within the
                        set. The maximum size for a binary set is 400 KB.
                      </li>
                      <li>
                        List (L): This type represents a list of attribute
                        values. Lists can contain multiple values of different
                        data types, but the maximum size for a list is 400 KB.
                      </li>
                      <li>
                        Map (M): This type represents a collection of attribute
                        name-value pairs. Attribute values can be of any data
                        type, including nested maps and lists. The maximum size
                        for a map is 400 KB.
                      </li>
                    </ol>

                    <p>Our first Item on DynamoDB is inserted.</p>
                    <img
                      src={Img12}
                      alt="ilearn cloud"
                      width="100%"
                      style={{
                        border: "1px solid #eaeaea",
                      }}
                    />
                    <br />
                    <br />

                    <h5>Programmatically creating Items;</h5>
                    <h6>Using Python and Boto3:</h6>
                    <p>
                      Import Boto3 and Initialize DynamoDB Client: Import the
                      Boto3 library and initialize the DynamoDB client.
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
                      Creating an Item: Use the put_item method to insert an
                      item into a DynamoDB table.
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

                    <h6>Conclusion:</h6>
                    <p>
                      In this tutorial, we explored the fundamentals of working
                      with Amazon DynamoDB, a fully managed NoSQL database
                      service provided by AWS. DynamoDB offers high scalability,
                      reliability, and low-latency performance, making it an
                      ideal choice for a wide range of applications, from
                      small-scale projects to large-scale enterprise solutions.
                    </p>
                    <p>
                      We covered various aspects of DynamoDB, including table
                      creation, primary key design, querying data, and inserting
                      items programmatically. Understanding the importance of
                      partition keys and sort keys in table design is crucial
                      for optimizing query performance and distributing workload
                      evenly across partitions.
                    </p>

                    <h6>Continue Reading</h6>
                    <p>
                      <a href="https://cloudplexo.com/">
                        Top Cloud Services providers in Nigeria with
                        CloudPlexo's Innovative Solutions
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
