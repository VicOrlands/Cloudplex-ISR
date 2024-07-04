// React Basic and Bootstrap
import React, { Component } from "react";
import "./styles.css";
import { FAQ } from "./questions";
import VideoReview from "../../VideoReview";
import FaqPage from "../../../components/FAQ/faq";

import HeroImg from "../../../assets/images/aws_microsoft/hero.webp";
import Inventory from "../../../assets/images/aws_microsoft/inventory.png";
import Automated from "../../../assets/images/aws_microsoft/automated.png";
import Operational from "../../../assets/images/aws_microsoft/operational.png";
import Configuration from "../../../assets/images/aws_microsoft/configuration.png";

class CloudResouce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awsservices: [
        {
          img: Automated,
          title: "Automated Patching and Compliance",
          paragraph:
            "Keep your systems up-to-date and compliant effortlessly, ensuring security and regulatory standards are met without manual intervention.",
        },
        {
          img: Inventory,
          title: "Inventory and Resource Tracking",
          paragraph:
            "Gain real-time insights into your AWS resources, enabling strategic decision-making and efficient resource allocation.",
        },
        {
          img: Configuration,
          title: "Configuration Management",
          paragraph:
            "Ensure consistency across your cloud environment by centrally managing configurations, making updates, and tracking changes seamlessly.",
        },
        {
          img: Operational,
          title: "Operational Insights with Run Command",
          paragraph:
            "Execute commands across your AWS resources, gaining operational insights and taking corrective actions without the need for direct access.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="cloud-resource-page">
          <div className="cloud-resource-dynamo-hero-section">
            <div>
              <h1>
                Optimizing Cloud Resources Seamlessly via AWS Systems Manager
              </h1>
              <p>
                Empower your business with CloudPlexo's expert management of
                cloud resources using AWS Systems Manager.
              </p>

              <div className="partnership-hero-btn">
                <a href="#partnership">Get started</a>

                <a href="/contact-us">Learn more</a>
              </div>
            </div>

            <div className="partnership-hero-img">
              <img
                src={HeroImg}
                alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
              />
            </div>
          </div>
          <div className="cloud-resource-services">
            <h2>CloudPlexo's Distinct Use Cases</h2>
            <h3 id="partnership">
              Revolutionize your cloud experience with tailored solutions
              designed to streamline, optimize, and secure your AWS
              infrastructure.
            </h3>

            <div className="cloud-resource-services-column">
              {this.state.awsservices.map((service) => (
                <div key={service.title}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.paragraph}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="cloud-resource-stories">
            <div className="heading">
              <h2>Client Success Stories</h2>
              <p>
                Explore how CloudPlexo has transformed businesses by
                implementing AWS Config for robust security compliance.
              </p>
            </div>
            <VideoReview />
          </div>

          <FaqPage
            questions={FAQ}
            title="Ready to elevate your Microsoft workloads on AWS?"
            subtitle="Your seamless, scalable, and secure cloud journey begins here."
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CloudResouce;
