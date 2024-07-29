import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import FeatherIcon from "feather-icons-react";
import blog1 from "@/assets/blog/partnernetwork.webp";

{/* <SEO
  title="CloudPlexo Achieves AWS ISV Partner Status"
  description="CloudPlexo, a cloud management platform, earns AWS ISV Partner status, helping companies reduce cloud expenses."
  keywords="CloudPlexo, AWS ISV Partner, CloudPlexo, cloud management platform, AWS Independent Software Vendor Partner, cloud expenses reduction"
/> */}

export default function BlogOne() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li>Share</li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network"
            target="blank"
          >
            <FeatherIcon
              icon="facebook"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network"
            target="blank"
          >
            <FeatherIcon
              icon="twitter"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network"
            target="blank"
          >
            <FeatherIcon
              icon="linkedin"
            />
          </a>
        </li>
      </ul>
      
      <div className={styles["main-content"]}>
        <h1>
          CloudPlexo Achieves AWS ISV Partner Status in AWS Partner
          Network
        </h1>
        <br />

        <Image
          src={blog1}
          alt="img"
        />

        <br />
        <br />

        <p>
          <span style={{ fontWeight: "800" }}>
            Press release –{" "}
          </span>
          CloudPlexo, the cloud management platform that aims to
          help companies shrink their cloud expenses by up to 40%,
          announced today that it has achieved Amazon Web Services
          (AWS) Independent Software Vendors (ISV) Partner Status.
          The designation of AWS ISV Partner is an achievement that
          CloudPlexo accomplished through AWS’s comprehensive ISV
          partner path process that includes testing against the
          highest industry standards for software companies offering
          integrations with AWS.
        </p>

        <p>
          “Joining the AWS Partner Network and attaining the AWS ISV
          Partner status is a milestone achievement for CloudPlexo.”
          said CloudPlexo CTO “Completing the rigorous approval
          process and the AWS Foundational Technical Review (FTR)
          validates our platform against AWS best practices in terms
          of security, reliability, and operational excellence. It
          represents a firm grasp on the best-practice requirements
          necessary for membership in the AWS ISV Partner Path.”
        </p>

        <p>
          He continued, “This further demonstrates our commitment to
          build the best cloud management technology for our current
          and future customers globally without compromising on
          performance security and reliability.”
        </p>

        <p>
          CloudPlexo’s adoption has been growing steadily while
          working with companies using public clouds. By using
          CloudPlexo, customers can identify areas to reduce their
          cloud spend and cloud-based operations costs. The platform
          gives CloudPlexo customers precise visibility of total
          cloud costs, access to advanced and predictive analytics,
          delivery of rightsizing recommendations, and functionality
          to schedule non-production VMs and databases.
        </p>

        <p>
          Customers recently polled about their CloudPlexo
          experience have shown positive responses to the benefits
          that the software provides. A Cloud Solutions Manager
          noted that “CloudPlexo is a tool both finance and dev can
          use. Having all our cloud environments managed in one
          consolidated, easy-to-use platform has helped us
          significantly reduce our AWS bill.”
        </p>

        <p>
          In addition to giving customers a complete view of their
          total cloud costs, CloudPlexo also enables forecasting
          through machine learning models to predict future spend
          based on historical patterns. The platform also provides
          cloud inventory assets management across different cloud,
          regions and availability zones of an organisation, a
          benefit designed to give visibility across cloud resources
          with insights to manage deployments.
        </p>

        <p>
          To learn more about CloudPlexo and for a first hand look
          at the platform and its functionality. Start with
          CloudPlexo for free.
        </p>

        <h5>About CloudPlexo</h5>
        <p>
          CloudPlexo is a software company offering a simple,
          cost-effective SaaS solution to manage cloud costs and
          resources. CloudPlexo Cloud Management Platform(CCMP)
          gives customers and partners full visibility into their
          cloud spend and operations in multiple cloud environments
          in one platform and helps to identify areas for
          significant cost reduction. CloudPlexo solution is used by
          both Cloud Engineers, IT Leaders and Finance.
        </p>
      </div>
    </section >
  );
}
