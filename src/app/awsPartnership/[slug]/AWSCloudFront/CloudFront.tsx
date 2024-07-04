import React, { Component } from "react";
import "./styles.css";
import VideoReview from "../../VideoReview";

import HeroImg from "../../../assets/images/aws_cloudfront/AWS-Badge Amazon CloudFront Delivery.png";
import Security from "../../../assets/images/aws_cloudfront/Advanced Security Features.png";
import Website from "../../../assets/images/aws_cloudfront/website_performance.png";
import Scalability from "../../../assets/images/aws_cloudfront/scalability.png";
import Global from "../../../assets/images/aws_cloudfront/global.png";
import FaqPage from "../../../components/FAQ/faq";
import { FAQ } from "./questions";

class CloudFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awsservices: [
        {
          img: Global,
          title: "Global Content Delivery Acceleration",
          serviceList: [
            "Accelerate content delivery worldwide with AWS CloudFront, ensuring your users experience fast and reliable access regardless of their location.",
          ],
        },
        {
          img: Website,
          title: "Enhanced Website Performance",
          serviceList: [
            `Optimize your website's performance by leveraging CloudFront's content caching and distribution capabilities, reducing latency and improving user experience.`,
          ],
        },
        {
          img: Scalability,
          title: "Scalability and Flexibility",
          serviceList: [
            "Scale your content delivery seamlessly with CloudFront, adapting to changing traffic patterns and ensuring a consistently high level of performance.",
          ],
        },
        {
          img: Security,
          title: "Advanced Security Features",
          serviceList: [
            `Safeguard your content with CloudFront's built-in security features, including DDoS protection and SSL/TLS encryption, ensuring a secure and trustworthy user experience.`,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-cloudfront-page">
          <div className="cloudfront-dynamo-hero-section">
            <div>
              <h1>Navigating AWS CloudFront with CloudPlexo</h1>
              <p>
                Empower your content delivery strategy with CloudPlexo's
                expertise in leveraging AWS CloudFront. Explore a world of
                benefits, discover compelling use cases, and find answers to
                your questions as we redefine how you distribute content across
                the globe.
              </p>

              <div className="cloudfront-partnership-hero-btn">
                <a href="#partnership">Get started</a>

                <a href="/contact-us">Learn more</a>
              </div>
            </div>

            <div className="cloudfront-partnership-hero-img">
              <img
                src={HeroImg}
                alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
              />
            </div>
          </div>

          <div className="cloudfront-services">
            <h2>Key Benefits</h2>

            <div className="cloudfront-services-column">
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

          <div className="cloudfront-stories">
            <h2>
              With Cloudplexo, the possibilities for customer innovation are
              endless.
            </h2>

            <VideoReview />
          </div>

          <FaqPage
            questions={FAQ}
            title="Ready to Optimize Your Content Delivery?"
            subtitle="Let's redefine how your audience experiences your content!"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CloudFront;
