import React, { Component } from "react";
import "./security.styles.css";
import { FAQ } from "./questions";
import VideoReview from "../../VideoReview";
import FaqPage from "../../../components/FAQ/faq";
import checkIcon from "../../../assets/images/Check icon.png";
import HeroImg from "../../../assets/images/security-protection.png";

class SecurityCompliance extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="security-compliance-page">
          <div className="security-compliance-hero-section">
            <div>
              <h1>
                Robust Security Compliance with CloudPlexo's AWS Config
                Expertise
              </h1>
              <p>
                Elevate your cloud infrastructure to new heights, assured by our
                commitment to cutting-edge solutions and unparalleled
                consultancy in AWS Config.
              </p>

              <a href="#partnership">Get started</a>
            </div>

            <div className="security-compliance-hero-img">
              <img
                src={HeroImg}
                alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
              />
            </div>
          </div>

          <div className="security-compliance-services">
            <h2>Why AWS Config for Security Compliance?</h2>
            <h3 id="partnership">
              Empower your cloud infrastructure with AWS Config, a service that
              provides visibility into the configuration changes in your AWS
              resources. Ensure a secure and compliant environment with
              real-time monitoring and automated assessments.
            </h3>

            <div className="security-compliance-services-column">
              <ul>
                <li>
                  <img src={checkIcon} alt="security compliance check icon" />{" "}
                  Real-time Visibility
                </li>
                <li>
                  <img src={checkIcon} alt="security compliance check icon" />{" "}
                  Automated Monitoring and Assessment
                </li>
                <li>
                  <img src={checkIcon} alt="security compliance check icon" />
                  Automate customer support and close leads faster
                </li>
              </ul>
            </div>
          </div>

          <div className="security-compliance-client-stories">
            <div className="heading">
              <h2>Client Success Stories</h2>
              <h3>
                Explore how CloudPlexo has transformed businesses by
                implementing AWS Config for robust security compliance.
              </h3>
            </div>

            <VideoReview />
          </div>
          <FaqPage
            questions={FAQ}
            title="Ready to elevate your cloud security?"
            subtitle="Contact us today for a consultation and discover how AWS Config
                can revolutionize your security compliance strategy"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SecurityCompliance;
