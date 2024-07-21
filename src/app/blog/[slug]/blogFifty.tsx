"use client"

import styles from "./styles.module.css"
import FeatherIcon from "feather-icons-react";
import { CopyBlock, a11yDark } from "react-code-blocks";

import badge from "@/assets/blog/blog50/home.webp";
import Img1 from "@/assets/blog/blog50/1.webp";
import Img2 from "@/assets/blog/blog50/2.webp";
import Img3 from "@/assets/blog/blog50/3.webp";
import Img4 from "@/assets/blog/blog50/4.webp";
import Img5 from "@/assets/blog/blog50/5.webp";
import Img6 from "@/assets/blog/blog50/6.webp";
import Img7 from "@/assets/blog/blog50/7.webp";
import Img8 from "@/assets/blog/blog50/8.webp";
import Img9 from "@/assets/blog/blog50/9.webp";
import Image from "next/image";

const code1 = `npx create-react-app email-subscription`;

const code2 = "cd email-subscription";

const code3 = "npm install aws-sdk";

const code4 = `import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION'// us-east-1 for example ,
});

export const sns = new AWS.SNS();`;

const code5 = `// SubscriptionForm.js
import React, { useState } from 'react';
import { sns } from './aws.config';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const params = {
        Protocol: 'email',
        TopicArn: 'YOUR_SNS_TOPIC_ARN',
        Endpoint: email,
      };

      await sns.subscribe(params).promise();
      setSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to topic:', error);
    }
  };

  return (
    <div>
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default SubscriptionForm;`;

const code6 = `// BroadcastEmail.js
import React, { useState } from 'react';
import { sns } from './aws.config';

const BroadcastEmail = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const params = {
        Subject: subject,
        Message: message,
        TopicArn: 'YOUR_SNS_TOPIC_ARN',
      };

      await sns.publish(params).promise();
      console.log('Email broadcast successfully!');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error broadcasting email:', error);
    }
  };

  return (
    <div>
      <h2>Broadcast Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          required
        ></textarea>
        <button type="submit">Broadcast</button>
      </form>
    </div>
  );
};

export default BroadcastEmail;`;

const code7 = "npm install react-bootstrap bootstrap";

export default function BlogFifty() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li>Share</li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/building-an-email-subscription-and-broadcasting-system-with-react-and-aws-sns"
            target="blank"
          >
            <FeatherIcon
              icon="facebook"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/building-an-email-subscription-and-broadcasting-system-with-react-and-aws-sns"
            target="blank"
          >
            <FeatherIcon
              icon="twitter"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/building-an-email-subscription-and-broadcasting-system-with-react-and-aws-sns"
            target="blank"
          >
            <FeatherIcon
              icon="linkedin"
            />
          </a>
        </li>
      </ul>

      <div className={styles["main-content"]}>
        <h1>Building an Email Subscription and Broadcasting System with React and AWS SNS</h1>
        <br />
        <Image
          src={badge}
          loading="lazy"
          alt="awspartnerbadge"
        />
        <br />
        <br />
        <p>
          AWS Simple Notification Service (SNS) is a fully managed
          messaging service provided by Amazon Web Services. It
          allows you to decouple and scale applications by following
          a publish/subscribe (pub/sub) model.
        </p>
        <p>
          With SNS, you can create topics and subscribe various
          endpoints (email addresses, AWS Lambda functions,
          HTTP/HTTPS web servers, etc.) to receive messages
          published to those topics. SNS supports multiple delivery
          protocols, including email, SMS, HTTP/HTTPS, and mobile
          push notifications.
        </p>
        <p>
          In this tutorial, we'll be using SNS to build an email
          subscription and broadcasting system. Specifically, we'll:
        </p>
        <ol>
          <li>Create an SNS topic to represent our email list.</li>
          <li>
            Build a React component that allows users to subscribe
            their email addresses to the SNS topic.
          </li>
          <li>
            Build another React component that allows us to
            broadcast emails to all subscribers of the SNS topic.
          </li>
        </ol>
        <p>
          By the end of the tutorial, you'll have a basic
          application that can manage email subscriptions and send
          mass emails using the SNS service, without having to worry
          about the underlying messaging infrastructure.
        </p>
        <p>
          SNS is a powerful service that enables event-driven
          architectures, fanout messaging patterns, and real-time
          communication between distributed systems. While we'll
          focus on email use cases in this tutorial, SNS can be
          utilized for a wide range of messaging scenarios, such as
          mobile push notifications, IoT applications, and
          serverless workflows.
        </p>
        <h4>Prerequisites</h4>
        <p>Before we start, make sure you have the following:</p>
        <ol>
          <li>
            Nodejs and npm or bun (in our case) installed on your
            machine.
          </li>
          <li>
            An AWS account set up with the appropriate credentials
            and permissions to use SNS.
          </li>
          <li>Basic knowledge of React and JavaScript.</li>
        </ol>
        <p>Our final project will look like this:</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Image
            loading="lazy"
            src={Img1}
            alt="Building Fullstack app with React and AWS Amplify - Authentication and Databases"
            style={{ width: "48%"}}
          />

          <Image
            loading="lazy"
            src={Img2}
            alt="Building Fullstack app with React and AWS Amplify - Authentication and Databases"
            style={{ width: "48%"}}
          />
        </div>
        <br />
        <h4>Step 1: Set up a new React project</h4>
        <p>
          Open your terminal and run the following command to create
          a new React project:
        </p>
        <CopyBlock
          text={code1}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>Navigate into the project directory:</p>
        <CopyBlock
          text={code2}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <h4>Step 2: Install AWS SDK for JavaScript</h4>
        <p>
          We'll use the AWS SDK for JavaScript to interact with the
          SNS service. Install it by running the following command:
        </p>
        <CopyBlock
          text={code3}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <h4>Step 3: Configure AWS Credentials</h4>
        <p>Create a file `aws.config.js` in your `src` .</p>
        <p>
          You can store your AWS credentials in a `.env` file and
          import it here.
        </p>
        <CopyBlock
          text={code4}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          In this step, we import the aws-sdk library and configure
          our AWS credentials. We create a new file aws.config.js to
          store our AWS credentials and set up the SNS client.
        </p>
        <ol>
          <li>
            `AWS.config.update` is a method provided by the AWS SDK
            to update the global AWS configuration. We pass an
            object with our AWS credentials (`accessKeyId`,
            `secretAccessKey`) and the desired AWS region
            (`region`).
          </li>
          <li>
            After configuring the credentials, we create a new
            instance of the `AWS.SNS` service, which we'll use to
            interact with the SNS service.
          </li>
          <li>
            Finally, we export the `sns` instance so that it can be
            imported and used in other parts of our application.
          </li>
        </ol>
        <p>
          Before moving to the next step though, we should head over
          to our AWS console to create a SNS topic.
        </p>
        <p>We’re going to need the topic’s ARN.</p>
        <Image
          loading="lazy"
          src={Img3}
          alt="Building Fullstack app with React and AWS Amplify - Authentication and Databases"
        />
        <br />
        <h4>Step 5: Create a Subscription Form Component</h4>
        <CopyBlock
          text={code5}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          In this component, we import the `sns` instance from our
          `aws.config.js` file. We also use the `useState` hook to
          manage the component's state: `email` to store the user's
          email input, and `subscribed` to track whether the user
          has subscribed or not.
        </p>
        <p>
          The `handleSubmit` function is an asynchronous function
          that is called when the form is submitted. Here's what
          happens:
        </p>
        <ol>
          <li>
            `e.preventDefault()` is called to prevent the default
            form submission behavior.
          </li>
          <li>
            We create an object `params` with the necessary
            parameters for the `sns.subscribe` method:
            <ul>
              <li>
                `Protocol`: We specify `'email'` as the protocol for
                the subscription.
              </li>
              <li>
                `TopicArn`: This is the Amazon Resource Name (ARN)
                of the SNS topic we created earlier. You need to
                replace `'YOUR_SNS_TOPIC_ARN'` with the actual ARN
                of your topic.
              </li>
              <li>
                `Endpoint`: This is the email address entered by the
                user, stored in the `email` state variable.
              </li>
            </ul>
          </li>
          <li>
            We call `sns.subscribe(params).promise()` to subscribe
            the user's email to the SNS topic. The `.promise()`
            method returns a Promise that resolves when the
            subscription is successful.
          </li>
          <li>
            If the subscription is successful, we update the
            subscribed state to true and clear the email state.
          </li>
          <li>
            If an error occurs during the subscription process, we
            catch the error and log it to the console.
          </li>

          {/* <code
                                                    style={{
                                                        background: 'grey',
                                                        padding: 5,
                                                        color: '#f0f0f0',
                                                        borderRadius: 6,
                                                    }}
                                                >
                                                    amplify push{' '}
                                                </code> */}
        </ol>
        <p>
          The rendering code (omitted for brevity) displays either a
          form for the user to enter their email address (if
          `subscribed` is `false`), or a success message (if
          `subscribed` is `true`).
        </p>
        <p>We can test this to see if it works:</p>
        <Image
          loading="lazy"
          src={Img4}
          alt="Building Fullstack app with React and AWS Amplify - Authentication and Databases"
        />
        <p>This message should appear if it was successful:</p>
        <Image
          loading="lazy"
          src={Img5}
          alt="Building Fullstack app with React and AWS Amplify - Authentication and Databases"
        />
        <p>We should get a confirmation email:</p>
        <Image
          loading="lazy"
          src={Img6}
          alt="Building Fullstack app with React and AWS Amplify - Authentication and Databases"
        />
        <h4>Step 8: Broadcasting Emails</h4>
        <CopyBlock
          text={code6}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>
          This component is similar to the `SubscriptionForm`
          component, but instead of subscribing emails, it allows
          you to broadcast emails to all subscribers of the SNS
          topic. We use the `useState` hook to manage the
          component's state: `subject` to store the email subject,
          and `message` to store the email message.
        </p>
        <p>
          The `handleSubmit` function is an asynchronous function
          that is called when the form is submitted. Here's what
          happens:
        </p>
        <ol>
          <li>
            e.preventDefault() is called to prevent the default form
            submission behavior.
          </li>
          <li>
            We create an object params with the necessary parameters
            for the sns.publish method:
            <ul>
              <li>
                Subject: The subject of the email, stored in the
                subject state variable.
              </li>
              <li>
                Message: The email message, stored in the message
                state variable.
              </li>
              <li>
                TopicArn: This is the Amazon Resource Name (ARN) of
                the SNS topic we created earlier. You need to
                replace 'YOUR_SNS_TOPIC_ARN' with the actual ARN of
                your topic.
              </li>
            </ul>
          </li>
          <li>
            We call sns.publish(params).promise() to broadcast the
            email to all subscribers of the SNS topic. The
            .promise() method returns a Promise that resolves when
            the broadcast is successful.
          </li>
          <li>
            If the broadcast is successful, we log a success message
            to the console and clear the subject and message state
            variables.
          </li>
          <li>
            If an error occurs during the broadcast process, we
            catch the error and log it to the console.
          </li>
        </ol>
        <p>
          we can broadcast a test message to our current
          subscribers:
        </p>
        <Image
          loading="lazy"
          src={Img7}
          alt="Building Fullstack app with React and AWS Amplify - Authentication and Databases"
        />
        <p>
          SNS should broadcast that to the respective email
          addresses:
        </p>
        <Image
          loading="lazy"
          src={Img8}
          alt="Building Fullstack app with React and AWS Amplify - Authentication and Databases"
        />
        <p>
          By integrating these two components (`SubscriptionForm`
          and `BroadcastEmail`) into your React application, you'll
          have a complete email subscription and broadcasting system
          using AWS SNS.
        </p>
        {/* <code
                                                style={{
                                                    background: 'grey',
                                                    padding: 5,
                                                    color: '#f0f0f0',
                                                    borderRadius: 6,
                                                }}
                                            >
                                                App.js;
                                            </code>{' '} */}
        <p>
          Finally we can throw in some styling with React Boostrap
        </p>
        <CopyBlock
          text={code7}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true}
        />
        <p>…and there we have it:</p>
        <Image
          loading="lazy"
          src={Img9}
          alt="ilearn cloud"
          style={{
            border: "1px solid #eaeaea",
          }}
        />
        <h4>Conclusion</h4>
        <p>
          In this tutorial, we learned how to leverage AWS Simple
          Notification Service (SNS) to build an email subscription
          and broadcasting system with React. SNS provided a
          scalable and reliable messaging infrastructure, allowing
          us to decouple the subscription management and email
          broadcasting components from our application.
        </p>
        <p>
          By creating an SNS topic and subscribing email addresses
          to it, we built a simple subscription form. Using SNS's
          publish functionality, we created a broadcast email form
          that sent messages to all subscribers with ease.
        </p>
        <p>
          The key advantage of SNS is that it abstracts away the
          complexities of managing a messaging system, allowing us
          to focus on building application logic. SNS handled
          message delivery, retries, and scaling transparently.
        </p>
        <p>
          Overall, AWS SNS simplifies the process of building
          event-driven architectures and decoupled systems, enabling
          real-time communication and asynchronous message delivery
          without managing underlying infrastructure.
        </p>
        <br /> <br />
        <h6>Continue Reading</h6>
        <p>
          <a href="https://cloudplexo.com/introduction-to-aws-cli-basic-commands-for-beginners">
            Introduction to AWS CLI: Basic Commands for Beginners
          </a>
        </p>
        <p>
          <a href="https://cloudplexo.com/building-fullstack-app-with-react-and-aws-amplify-authentication-and-databases">
            Building Fullstack app with React and AWS Amplify -
            Authentication and Databases
          </a>
        </p>
        <h5 className="mt-4">Comments :</h5>
        <h5 className="mt-4">Leave A Comment :</h5>
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
  )
}
