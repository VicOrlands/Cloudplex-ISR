import React, { Component } from "react";
import "./styles.css";
import { FAQ } from "./questions";
import VideoReview from "../../VideoReview";
import FaqPage from "../../../components/FAQ/faq";

import Globe from "../../../assets/images/aws_transfer/globe.png";
import Access from "../../../assets/images/aws_transfer/access.png";
import Workflows from "../../../assets/images/aws_transfer/website.png";
import Architecture from "../../../assets/images/aws_transfer/architecture.png";
import HeroImg from "../../../assets/images/aws_transfer/AWS-Badge Amazon CloudFront Delivery.png";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awsservices: [
        {
          img: Globe,
          title: "Scalable and Secure File Transfer",
          serviceList: [
            "Facilitate seamless and secure file transfers at scale with AWS Transfer Family, ensuring your data moves efficiently across your organization.",
          ],
        },
        {
          img: Workflows,
          title: "Integration with Existing Workflows",
          serviceList: [
            `CloudPlexo seamlessly integrates AWS Transfer Family into your existing workflows, minimizing disruptions and enhancing overall operational efficiency.`,
          ],
        },
        {
          img: Access,
          title: "Granular Access Controls",
          serviceList: [
            "Ensure data security by implementing granular access controls with AWS Transfer Family, allowing you to define who can access your files and from where.",
          ],
        },
        {
          img: Architecture,
          title: "Highly Available Architecture",
          serviceList: [
            `Rely on the high availability of AWS Transfer Family, ensuring your file transfer infrastructure remains resilient and accessible at all times.`,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="transfer-main-page">
          <div className="transfer-dynamo-hero-section">
            <div>
              <h1>Modernizing File Transfers with AWS Transfer Family</h1>
              <p>
                Empower your file transfer workflows with CloudPlexo's
                proficiency in harnessing AWS Transfer Family.
              </p>

              <div className="transfer-partnership-hero-btn">
                <a href="#partnership">Get started</a>

                <a href="/contact-us">Learn more</a>
              </div>
            </div>

            <div className="transfer-partnership-hero-img">
              <img
                src={HeroImg}
                alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
              />
            </div>
          </div>
          <div className="transfer-services">
            <h2>Key Benefits</h2>

            <div className="transfer-services-column">
              {this.state.awsservices.map((service) => (
                <div key={service.title}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                  {service.serviceList.map((list) => (
                    <ul key={list}>
                      <li>{list}</li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="transfer-stories">
            <h2>
              With Cloudplexo, the possibilities for customer innovation are
              endless.
            </h2>

            <VideoReview />
          </div>
          <FaqPage
            questions={FAQ}
            title="Ready to Transform Your File Transfer Experience?"
            subtitle="Schedule a consultation with CloudPlexo today and embark on a
                journey of secure, scalable, and efficient file transfers with
                AWS Transfer Family."
          />{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default Transfer;
