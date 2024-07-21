import FeatherIcon from "feather-icons-react";
import blog1 from "@/assets/work/29.jpeg";
import Image from "next/image";
import styles from "./styles.module.css"
import Link from "next/link";

{/* <SEO
  title="Strategies to Reduce Your Company's Cloud Expenses"
  description="Discover effective strategies to optimize your company's cloud expenses, including rightsizing, automation, analytics, and ELB management."
  keywords="Reduce company's cloud expenses, cloud cost optimization strategies, cloud management software, Cloud cost reduction, rightsizing cloud resources, cloud expense analytics, ELB management, cloud efficiency"
/> */}

export default function BlogTwo() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li>Share</li>
        <li>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/ways-companies-can-save-on-their-cloud-computing-costs"
            target="blank"
          >
            <FeatherIcon
              icon="facebook"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/ways-companies-can-save-on-their-cloud-computing-costs"
            target="blank"
          >
            <FeatherIcon
              icon="twitter"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/ways-companies-can-save-on-their-cloud-computing-costs"
            target="blank"
          >
            <FeatherIcon
              icon="linkedin"
            />
          </Link>
        </li>
      </ul>

      <div className={styles["main-content"]}>
        <h1>Ways Companies Can Save On Their Cloud Computing Costs</h1>
        <Image
          src={blog1}
          alt="Strategies to Reduce Your Company's Cloud Expenses"
        />

        <br />
        <br />

        <p>
          Your cloud expenses are dependent on your company size and
          cloud adoption. Your organisation's cloud use however, can
          be affected by circumstances beyond your control.
          <br />
        </p>

        <p>
          An undeniable example of this would be the Covid-19
          pandemic. Large work forces were sent to work from home
          and massively accelerated the trend of cloud migration.
        </p>

        <p>
          So how do you shrink your company's cloud spend? Consider
          the following strategies:
        </p>

        <h5>Rightsizing</h5>

        <p>
          Cloud resources are flexible or elastic and can be scaled
          up or down according to your business use. Rightsizing
          your resources will require optimising computing, storage
          and network settings to suit your business.This allows you
          to balance maximum performance and lowest possible cost.
        </p>

        <h5>Automation</h5>

        <p>
          Effective scheduling of your resources such as EC2 and RDS
          databases in your cloud, can increases the efficiency of
          your workloads save cost and reduces the time of employees
          involved in management and DevOps thus focusing on core
          business value. Automate the starting and stopping EC2
          instances and RDS databases according to the hours they
          are usually utilised to eliminate the need to manually
          control these instances and save cost.
        </p>

        <h5>Analytics</h5>

        <p>
          Review the usage of the cloud by employing analytic tools.
          You can measure the engagement that each user has in the
          system and subsequently minimise the cost of operation. By
          highlighting unused or depreciated items in the cloud
          environment,such resources can be stopped and removed.
        </p>

        <h5>Elastic Load Balancers(ELBs)</h5>

        <p>
          ELBs distribute traffic and balance workloads in your
          cloud environment. However, if you are not making use of
          the ELB, you will still have to pay for it. If,after
          viewing your cloud you find there are instances not
          associated with your ELB - you might consider deleting the
          instance.
        </p>

        <p>
          Each of the above strategies in isolation can help you to
          reduce your companies cloud expenditure but why stop
          there? <br />
          Combine multiple strategies to maximise the potential
          savings. Consider cloud management software which centre
          around these strategies. Take control of your cloud
          operations and cost to become more cloud efficient.
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
                      ></textarea>
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
    </section >
  );
}
