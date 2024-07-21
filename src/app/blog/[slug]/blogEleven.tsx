import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import FeatherIcon from "feather-icons-react";
import blog1 from "@/assets/blog/blog5.webp";

{/* <SEO
  title="Cloud Computing - Revolutionizing the Global Village with CloudPlexo and AWS"
  description="Discover how cloud computing, powered by AWS and managed by CloudPlexo, is revolutionizing the global exchange of data and enabling businesses to thrive in the digital age"
  keywords="Cloud Computing, AWS, Global Village, CloudPlexo, Data Globalization, Cloud Technology, Cloud Services, Data Exchange, Digital Age Transformation"
/> */}

export default function BlogEleven() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li>Share</li>
        <li>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://wendu.io/will-cloud-computing-rule-the-world"
            target="blank"
          >
            <FeatherIcon
              icon="facebook"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/intent/tweet?url=https://wendu.io/will-cloud-computing-rule-the-world"
            target="blank"
          >
            <FeatherIcon
              icon="twitter"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://wendu.io/will-cloud-computing-rule-the-world"
            target="blank"
          >
            <FeatherIcon
              icon="linkedin" />
          </Link>
        </li>
      </ul>

      <div className={styles["main-content"]}>
        <h1>Will Cloud Computing Ever Rule the World?</h1>
        <br />

        <Image
          src={blog1}
          alt="Cloud Computing - Revolutionizing the Global Village with CloudPlexo and AWS"
        />

        <br />
        <br />
        <p>
          Before we dive into the topic for today’s blog post, let
          us, first, have a recap into what cloud computing is. I
          like to define cloud computing as simple as computing, but
          on the cloud. So, it’s every bit of computing you can do
          with a physical computer, operating system, application,
          database or server on a grander, larger and faster
          scale.That is management, processing and communication of
          information in a grander, larger and faster scale than
          ever imagined.
        </p>
        <p>
          Not to get into why cloud computing is important in
          today’s world–be it in our everyday lives with IoT, or in
          business with the analytics power, or even in sports with
          the ability to get and analyse real time data, space
          technology, health and life sciences, the list goes on;
          cloud computing has proven to be the bedrock of innovation
          in today’s society.
        </p>

        <h5>Cloud Computing vs Cloud Storage</h5>
        <p>
          Now, so we’re on the same page here and we have a defined
          scope for this blog post, we’ll clearly define and give
          the difference between what cloud storage is and what
          cloud computing is.
        </p>

        <h6>Cloud Storage</h6>
        <p>
          In a nutshell, cloud storage is the ability to store data
          on servers running on data centres, which is mostly owned
          and managed by Cloud Storage Providers and is accessible
          to you, the owner of this data, anywhere in the world, and
          at any time of the day. For example, Amazon Drive, Google
          Drive, Dropbox, OneDrive.
        </p>

        <h6>Cloud computing</h6>
        <p>
          Cloud computing, on the other hand, can be defined simply
          as the ability to process this data stored in the cloud
          for analytics, innovation or work collaboration. For
          example, Amazon Workspace, Google Docs, Photo Viewer App,
          Outlook Outline.
        </p>

        <h5>
          The World Wide Web and the Global Village
        </h5>
        <p>
          Remember the revolution caused by the introduction of the
          World Wide Web in the early 90s, and how we still reap
          from the benefits the technology offers to our world. Of
          all the benefits that came with the launch of the World
          Wide Web, Globalisation was one effect that not many
          experts predicted will have the most impact on us.
          Globalisation of cultures which means beliefs, lifestyles,
          ideas all of a sudden was being exchanged at a grander,
          larger and faster scale that has brought about immense
          opportunities in business, education and lifestyle with
          fewer cultural and distance barriers–a global village
          indeed!
        </p>
        <h5>
          Cloud Computing–the Globalisation of Data!
        </h5>
        <p>
          Now, take everything the internet has achieved through the
          World Wide Web technology, with the ability to send and
          receive information from anywhere in the world to make
          decisions and exchange that with the ability to compute
          using both real time and historical data from anywhere in
          the world to make decisions. The team scientist working on
          a life changing drug can work in real time, with real time
          data being managed, processed and communicated from
          different parts of the world! The team in China does not
          need to wait for the team in Africa to be done with
          computing and then send the results over to them for a
          next step of the process.
        </p>
        <h5>
          Cloud Computing with Amazon Web Services
        </h5>
        <p>
          With analytic services like{" "}
          <Link href="https://aws.amazon.com/emr/?c=a&sec=srv">
            Amazon EMR
          </Link>{" "}
          for big data processing,{" "}
          <Link href="https://aws.amazon.com/kinesis/?c=a&sec=srv">
            Amazon Kinetics
          </Link>{" "}
          for interactive analysis and{" "}
          <Link href="https://aws.amazon.com/opensearch-service/?c=a&sec=srv">
            Amazon OpenSearch Service
          </Link>{" "}
          for operational analysis; and with predictive analytics
          and machine learning cloud services like{" "}
          <Link href="https://aws.amazon.com/sagemaker/?c=a&sec=srv">
            Amazon SageMaker
          </Link>
          , cloud computing really will rule the world as the
          globalisation of data and powerful cloud computing
          services such as these ones mentioned here become more and
          more important to the development of our society in every
          field of life that we can think of!
        </p>
        <br />
        <h5>CloudPlexo and AWS</h5>
        <p>
          Whether you’re saving lives via remote surgery operations
          or analysing the performance of your favourite sport team;
          whether you’re predicting your company’s best selling
          product on a global scale via big data analytics or your
          pitching your million dollar idea to a VC; it doesn’t
          matter the scale or purpose of your business operations
          and / or needs, you can get it done on the cloud, and{" "}
          <Link href="http://cloudplexo.com">CloudPlexo</Link> is here to
          ensure that the management of your cloud environment is
          the most cost effective, scalable, secure and efficient
          while you focus on your core business processes.
          <br />
          <br />
          CloudPlexo is an official{" "}
          <Link href="https://partners.amazonaws.com/partners/0010h00001jBnbSAAS/">
            AWS Global Partner
          </Link>{" "}
          that proactively assesses and monitors your cloud
          environments based on operational excellence, security,
          reliability, performance efficiency and cost optimization.
          CloudPlexo provides both developers and management with
          the insights needed to run an efficient, cost optimised,
          lean and reliable cloud environment. Services: Cloud
          Migration, Data Analytics.
          <br />
          <br />
          You can{" "}
          <Link href="https://cloudplexo.com/professional-services">
            learn more
          </Link>{" "}
          about CloudPlexo and also{" "}
          <Link href="https://cloudplexo.com/contact-us">contact us</Link>{" "}
          for your Cloud Management and Consultancy services. With
          over 20 years of combined experience, you’re sure to rule
          your world with cloud computing services necessary to
          accelerate your core business processes!
        </p>

        <h5>Comments :</h5>
        <h5>Leave A Comment :</h5>

        {/* <Form className="mt-3">
                      <Row>
                        <Col md={12}>
                          <FormGroup>
                            <Label>Your Comment</Label>
                            <div className="position-relative">
                              <FeatherIcon
                                icon="message-circle"
                                className="fea icon-sm icons"
                              />
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
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
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
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                              />
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
    </section>
  );
}
