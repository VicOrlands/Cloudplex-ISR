import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import FeatherIcon from "feather-icons-react";
import lambdasearch from "@/assets/blog/images/lambdasearch.webp";
import createfunction from "@/assets/blog/images/create-function.webp";
import createfunctionpage from "@/assets/blog/images/create-function-page.webp";
import functionname from "@/assets/blog/images/function-name.webp";
import boilerplate from "@/assets/blog/images/boilerplate-code.webp";
import deploychanges from "@/assets/blog/images/deploy-changes.webp";
import configuretest from "@/assets/blog/images/configure-test.webp";
import edittest from "@/assets/blog/images/edit-test.webp";
import selecttest from "@/assets/blog/images/select-test.webp";
import deletefunction from "@/assets/blog/images/delete-function.webp";

{/* <SEO
    title="AWS Lambda - Your Guide to Serverless Application Development"
    description="Learn about AWS Lambda and how to create serverless applications with this comprehensive guide. Get started with your first function, testing, and cleanup."
    keywords="AWS Lambda Introduction, Serverless Application Development, AWS Lambda Basics, Writing Serverless Functions, AWS Lambda Cleanup"
  /> */}

export default function BlogFifteen() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li>Share</li>
        <li>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-lambda-introduction-to-writing-serverless-applications"
            target="blank"
          >
            <FeatherIcon
              icon="facebook"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-lambda-introduction-to-writing-serverless-applications"
            target="blank"
          >
            <FeatherIcon
              icon="twitter"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-lambda-introduction-to-writing-serverless-applications"
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
          AWS lambda - Introduction to writing serverless
          applications
        </h1>
        <h3 id="what-is-serverless">
          What is serverless
        </h3>
        <p>
          Serverless is a cloud native development model that
          allows developers to build and run applications without
          having to manage servers.
        </p>
        <p>
          In a serverless model, a cloud provider( such as AWS,
          Microsoft Azure, and Google Cloud) automatically
          allocates resources, takes care of servers, operating
          systems and scaling if needed. This way developers can
          focus on what really matters - i.e "INNOVATION".
        </p>
        <h3 id="what-is-AWS-lambda">
          What is AWS lambda?
        </h3>
        <p>
          AWS lambda is or lambda is a serverless service provided
          by Amazon web services. It allows developers to write
          code without having to worry about servers.
        </p>
        <p>
          In lambda, you can write code in any preferred language,
          such as python, nodejs, ruby, go, and more. The code can
          then be uploaded to lambda and automatically executed
          based on event triggers from sources such as S3 bucket,
          and other configured triggers.
        </p>
        <h3 id="write-your-first-lambda-function">
          Write your first lambda function
        </h3>
        <p>
          I will walk you through the basics of lambda and how to
          create and write your first serverless function with
          lambda, and also how to test your function by manually
          invoking your function with sample event data.
        </p>
        <h4 id="signing-up-for-aws">
          Signing up for AWS
        </h4>
        <p>
          Before getting started, you need to create an AWS
          account using the following link
        </p>
        <p>
          <Link href="https://aws.amazon.com/resources/create-account">
            https://aws.amazon.com/resources/create-account
          </Link>
        </p>
        <h4 id="locating-lambda">
          Locating lambda
        </h4>
        <p>
          Once you’ve signed into your console, search for
          ‘lambda’ in the search box. Select lambda from the
          search result.
        </p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={lambdasearch}
        />
        <h4 id="create-your-first-function">
          Create your first function
        </h4>
        <p>
          In the lambda page, click on{" "}
          <strong>create function</strong>.
        </p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={createfunction}
        />
        <p>
          Once you click on the create function, it takes you to a
          page, the page contains a lot of information and options
          you don’t have to worry about for now.
        </p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={createfunctionpage}
        />
        <p>
          The only fields we will be filling out are the function{" "}
          <strong>name</strong>, and select a{" "}
          <strong>runtime</strong> language you wish to use. We
          will be using <strong>python3.9</strong> for this demo.
        </p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={functionname}
        />
        <p>
          Click <strong>Create function</strong> at the bottom of
          the page.
        </p>
        <p>
          On the page you are redirected to, you see more details,
          settings and features of the function you just created.
          The only section we will worry about is the code
          section.
        </p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={boilerplate}
        />
        <h4 id="whats-happening-in-the-code">
          What’s happening in the code?
        </h4>
        <p>
          We already have a boilerplate hello world code, to give
          you an overview of what is happening. The lambda_handler
          function is the entry point i.e the function that gets
          executed once the lambda has been invoked. The body of
          the function is super straightforward, you can modify
          and throw in your own code as well.
        </p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={deploychanges}
        />
        <p>
          We have modified the code to some calculations, and
          we’ve replaced the hello world in the body of the json
          with the <strong>multiplication result</strong>, just to
          simulate what we will be getting back in a real world
          scenario.
        </p>
        <strong>Note</strong>: click the <strong>deploy</strong>{" "}
        button to any changes you make to the code
        <h4 id="creating-tests">
          Creating Tests
        </h4>
        <p>
          Expand the <strong>dropdown</strong> in the{" "}
          <strong>Test</strong> button, and click configure test.
        </p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={configuretest}
        />
        <p>A dialog box that looks like this will appear.</p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={edittest}
        />
        <p>
          Enter a <strong>name</strong> for your test event, make
          sure to select <strong>hello-world</strong> from the
          templates and click <strong>Save</strong>.
        </p>
        <p>
          Select the test event you just created, then click{" "}
          <strong>Test</strong>.
        </p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={selecttest}
        />
        <p>
          Congratulations, you have successfully created and
          tested your first serverless function.
        </p>
        <h4 id="cleaning-up">
          Cleaning up
        </h4>
        <p>To delete the created function.</p>
        <Image
          alt="AWS Lambda - Your Guide to Serverless Application Development"
          src={deletefunction}
        />

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
  );
}

