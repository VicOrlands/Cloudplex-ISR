"use client"

import Image from "next/image";
import styles from "./styles.module.css"
import FeatherIcon from "feather-icons-react";
import badge from "@/assets/blog/blog51/AWS Browser tools and extensions to enhance your experience.webp";
import Img1 from "@/assets/blog/blog51/1.webp";
import Img2 from "@/assets/blog/blog51/2.webp";
import Img3 from "@/assets/blog/blog51/3.webp";
import Img4 from "@/assets/blog/blog51/4.webp";
import Img5 from "@/assets/blog/blog51/5.webp";
import Img6 from "@/assets/blog/blog51/6.webp";
import Img7 from "@/assets/blog/blog51/7.webp";
import Img8 from "@/assets/blog/blog51/8.webp";

export default function BlogFiftyOne() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li>Share</li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-browser-tools-and-extensions-to-enhance-your-experience"
            target="blank"
          >
            <FeatherIcon
              icon="facebook"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-browser-tools-and-extensions-to-enhance-your-experience"
            target="blank"
          >
            <FeatherIcon
              icon="twitter"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-browser-tools-and-extensions-to-enhance-your-experience"
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
          AWS Browser tools and extensions to enhance your
          experience
        </h1>
        <br />
        <Image src={badge} alt="awslambdabadge" />
        <br />
        <br />
        <p>
          If you're just getting started with AWS (Amazon Web
          Services), navigating the Cloud Console can be a bit
          daunting at first. With its endless count of services and
          intricate configurations, it's easy to feel overwhelmed.
          Luckily, there are several handy browser tools and
          extensions that can simplify your AWS experience and make
          the learning curve less steep. In this article, we'll
          explore AWS tools and extensions, including additional
          options to enhance your AWS experience:
        </p>

        <h4>S3 Browser</h4>
        <Image
          loading="lazy"
          src={Img1}
          alt="AWS Browser tools and extensions to enhance your experience"
        />
        <br />
        <br />
        <ol>
          <li>
            <b>Description:</b> S3 Browser makes it easier to manage
            your Amazon S3 buckets and objects. It provides a simple
            interface for browsing, uploading, and downloading files
            directly from your browser.
          </li>
          <li>
            <b>Features:</b>
            <ul>
              <li>Browse S3 buckets</li>
              <li>Upload and download files</li>
              <li>Simple and intuitive UI</li>
            </ul>
          </li>
          <li>
            <b>Link:</b>{" "}
            <a href="https://chromewebstore.google.com/detail/fileon-s3-browser/dkckgdiclklkmiaimnpdlccihdkfbjdd?pli=1">
              S3 Browser
            </a>
          </li>
        </ol>

        <h4>AWS Extend Switch Roles</h4>
        <Image
          loading="lazy"
          src={Img2}
          alt="AWS Browser tools and extensions to enhance your experience"
        />
        <br />
        <br />
        <ol>
          <li>
            <b>Description:</b> This extension is indispensable for
            users managing multiple AWS accounts and IAM roles. It
            simplifies the process of switching roles by allowing
            you to define a configuration file that lists all the
            roles you frequently switch to. The extension then
            provides a dropdown menu within the AWS Console to
            quickly switch between these roles.
          </li>
          <li>
            <b>Features:</b>
            <ul>
              <li>Easy role switching via a dropdown menu</li>
              <li>Customizable configuration file</li>
              <li>
                Support for different color schemes to distinguish
                between roles
              </li>
            </ul>
          </li>
          <li>
            <b>Link:</b>{" "}
            <a href="https://chromewebstore.google.com/detail/aws-extend-switch-roles/jpmkfafbacpgapdghgdpembnojdlgkdl?hl=en">
              AWS Extend Switch Roles
            </a>
          </li>
        </ol>

        <h4>AWS Console Recorder</h4>
        <Image
          loading="lazy"
          src={Img3}
          alt="AWS Browser tools and extensions to enhance your experience"
        />
        <br />
        <br />
        <ol>
          <li>
            <b>Description:</b> AWS Console Recorder is a developer
            tool that records actions taken in the AWS Management
            Console and converts them into AWS CLI commands, AWS
            CloudFormation templates, or Terraform configurations.
            This is incredibly useful for automating repeatable
            tasks or for creating infrastructure as code.
          </li>
          <li>
            <b>Features:</b>
            <ul>
              <li>Records AWS Console actions</li>
              <li>
                Generates CLI commands and infrastructure code
              </li>
              <li>Supports CloudFormation and Terraform</li>
            </ul>
          </li>
          <li>
            <b>Link:</b>{" "}
            <a href="https://chromewebstore.google.com/detail/console-recorder-for-aws/ganlhgooidfbijjidcpkeaohjnkeicba">
              AWS Console Recorder
            </a>
          </li>
        </ol>

        <h4>ConsoleMe</h4>
        <Image
          loading="lazy"
          src={Img4}
          alt="AWS Browser tools and extensions to enhance your experience"
        />
        <br />
        <br />
        <ol>
          <li>
            <b>Description:</b> ConsoleMe is an open-source tool
            designed to streamline AWS access management. It
            provides a web interface for requesting and assuming
            roles, viewing permissions, and integrates with AWS SSO
            to manage access more effectively.
          </li>
          <li>
            <b>Link:</b>{" "}
            <a href="https://hawkins.gitbook.io/consoleme">
              ConsoleMe
            </a>
          </li>
        </ol>

        <h4>JSON Formatter</h4>
        <Image
          loading="lazy"
          src={Img5}
          alt="AWS Browser tools and extensions to enhance your experience"
        />
        <br />
        <br />
        <ol>
          <li>
            <b>Description:</b> JSON Formatter enhances the
            readability of JSON data. This is particularly useful
            when dealing with AWS API responses, IAM policies, or
            other JSON-based configurations. It automatically
            formats JSON into a readable and indented structure.
          </li>
          <li>
            <b>Features:</b>
            <ul>
              <li>Automatic JSON formatting</li>
              <li>Collapsible tree view</li>
              <li>Syntax highlighting</li>
            </ul>
          </li>
          <li>
            <b>Link:</b>{" "}
            <a href="https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa">
              JSON Formatter
            </a>
          </li>
        </ol>

        <h4>AWS Icons for Architecture Diagrams</h4>
        <Image
          loading="lazy"
          src={Img6}
          alt="AWS Browser tools and extensions to enhance your experience"
        />
        <br />
        <br />
        <ol>
          <li>
            <b>Description:</b> This extension provides a
            comprehensive set of AWS icons for use in architecture
            diagrams. These icons can be used in tools like
            Lucidchart, draw.io, or any diagramming tool that
            supports image import.
          </li>
          <li>
            <b>Features:</b>
            <ul>
              <li>Collection of AWS service icons</li>
              <li>High-resolution images</li>
              <li>Supports various diagramming tools</li>
            </ul>
          </li>
          <li>
            <b>Link:</b>{" "}
            <a href="https://aws.amazon.com/architecture/icons/">
              AWS Icons for Architecture Diagrams
            </a>
          </li>
        </ol>

        <h4>AWS Pricing Calculator</h4>
        <Image
          loading="lazy"
          src={Img7}
          alt="AWS Browser tools and extensions to enhance your experience"
        />
        <br />
        <br />
        <ol>
          <li>
            <b>Description:</b> The AWS Pricing Calculator, gives
            you quick access to the AWS Pricing Calculator, helping
            you estimate the costs of AWS services based on your
            usage patterns and needs.
          </li>
          <li>
            <b>Features:</b>
            <ul>
              <li>Estimate AWS costs</li>
              <li>Access pricing calculators</li>
              <li>Compare different pricing options</li>
            </ul>
          </li>
          <li>
            <b>Link:</b>{" "}
            <a href="https://calculator.aws/#/">
              AWS Pricing Calculator
            </a>
          </li>
        </ol>

        <h4>awsicons.dev</h4>
        <Image
          loading="lazy"
          src={Img8}
          alt="AWS Browser tools and extensions to enhance your experience"
        />
        <br />
        <br />
        <ol>
          <li>
            <b>Description:</b> This open source website gives your
            easy assess to all available aws services icons.
          </li>
          <li>
            <b>Features:</b>
            <ul>
              <li>Tag-based search</li>
              <li>
                Search for only new icons using ‘new’:{" "}
                <a href="https://awsicons.dev/?query=new">
                  https://awsicons.dev/?query=new
                </a>
              </li>
              <li>Click-to-copy to the clipboard as SVG or JSX</li>
            </ul>
          </li>
        </ol>

        <h4>Conclusion</h4>
        <p>
          These tools and extensions can greatly improve your
          productivity and efficiency when working with the AWS.
        </p>
      </div>
    </section>
  );
}
