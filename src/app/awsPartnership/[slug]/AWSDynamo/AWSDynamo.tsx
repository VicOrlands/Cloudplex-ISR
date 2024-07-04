// React Basic and Bootstrap
import React, { Component } from "react";
import "./styles.css";

// Import Generic Components
import CostEffective from "../../../assets/images/aws_dynamoDb/cost-effective.png";
import Commerce from "../../../assets/images/aws_dynamoDb/e_commerce.png";
import Integration from "../../../assets/images/aws_dynamoDb/integration.png";
import Scalability from "../../../assets/images/aws_dynamoDb/scalability.png";
import Analytics from "../../../assets/images/aws_dynamoDb/analytics.png";
import Banking from "../../../assets/images/aws_dynamoDb/banking.png";
import Security from "../../../assets/images/aws_dynamoDb/security.png";
import Data from "../../../assets/images/aws_dynamoDb/data_flow.png";
import HeroImg from "../../../assets/images/aws_dynamoDb/hero_img.png";
import Badge from "../../../assets/images/aws_dynamoDb/partner_badge.png";
import VideoReview from "../../VideoReview";
import { FAQ } from "./questions";
import FaqPage from "../../../components/FAQ/faq";

class AWSDynamoDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awsservices: [
        {
          img: Scalability,
          title: "Exceptional Scalability",
          descList: [
            "Handle Over 10 Trillion Daily Requests, Sustain Peaks of 20 Million Requests per Second!",
            "DynamoDB Delivery effortlessly manages immense request volumes, ensuring unparalleled scalability to meet your dynamic workloads.",
          ],
        },
        {
          img: Security,
          title: "Robust Security and Reliability",
          descList: [
            "Ensure Data Security and Reliability - 99.999% SLA, Encryption, and Automatic Backup!",
            "DynamoDB Delivery safeguards your data with top-notch security measures, including encryption, automatic backup, and a commitment to 99.999% availability.",
          ],
        },
        {
          img: CostEffective,
          title: "Cost-Effective Innovation",
          descList: [
            "Focus on Innovation, Minimize Costs - Fully Managed Serverless Database!",
            "DynamoDB Delivery empowers innovation by providing a fully managed serverless database that automatically scales, optimizing costs without compromising performance.",
          ],
        },
        {
          img: Integration,
          title: "Seamless Integration and Insightful Analytics",
          descList: [
            "Integrate and Analyze with Ease - Connect DynamoDB Delivery with AWS Services!",
            "DynamoDB Delivery seamlessly integrates with AWS services, offering built-in tools for analytics, insights extraction, and traffic trend monitoring. Maximize the potential of your data effortlessly.",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="dynamo-page">
          <div className="dynamo-hero-section">
            <div>
              <h1>
                Powerful AWS DynamoDB Delivery Solutions for Seamless
                Scalability{" "}
              </h1>
              <img
                src={Badge}
                alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
              />
              <p>
                Your gateway to optimal noSQL database performance and delivery
                excellence. Our partnership service ensures scalable and
                reliable DynamoDB solutions tailored to your business needs.
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

          <div className="dynamo-services">
            <h2>Create something remarkable</h2>
            <h3 id="partnership">
              Supercharge Your Decision-Making with CloudPlexo DynamoDB Delivery
            </h3>

            <div className="dynamo-services-column">
              {this.state.awsservices.map((service) => (
                <div key={service.title}>
                  <img src={service.img} alt={service.title} />
                  <p>{service.title}</p>
                  {service.descList.map((desc) => (
                    <ul key={desc}>
                      <li>{desc}</li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>

            <div className="dynamo-use-cases">
              <h2>Use Cases</h2>

              <div className="use-cases">
                <section>
                  <div>
                    <img src={Banking} alt="Empowering Banking Operations" />
                  </div>
                  <p>Empowering Banking Operations</p>
                </section>

                <section>
                  <div>
                    <img
                      src={Commerce}
                      alt="Tailored for E-commerce Excellence"
                    />
                  </div>
                  <p>Tailored for E-commerce Excellence</p>
                </section>

                <section>
                  <div>
                    <img
                      src={Analytics}
                      alt="Perfect for Streaming Analytics"
                    />
                  </div>
                  <p>Perfect for Streaming Analytics</p>
                </section>

                <section>
                  <div>
                    <img src={Data} alt="Efficient Ride-Sharing Data Flow" />
                  </div>
                  <p>Efficient Ride-Sharing Data Flow</p>
                </section>
              </div>
            </div>
          </div>

          <div className="cloudplexo-storied-section">
            <h2
              className="headings"
              style={{
                marginBottom: "-20px",
              }}
            >
              With Cloudplexo, the possibilities for customer innovation are
              endless.
            </h2>
            <VideoReview />
          </div>

          <FaqPage
            questions={FAQ}
            title="Let's Transform Your Data Management"
            subtitle="Whether you're exploring DynamoDB for the first time or looking
                to optimize your existing setup, our consultation services are
                tailored to your unique needs"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default AWSDynamoDb;
