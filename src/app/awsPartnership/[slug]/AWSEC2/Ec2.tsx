// React Basic and Bootstrap
import React, { Component } from "react";
import "./styles.css";
import { FAQ } from "./questions";
import VideoReview from "../../VideoReview";
import FaqPage from "../../../components/FAQ/faq";

import Automated from "../../../assets/images/aws_ec2/backups.png";
import Monitoring from "../../../assets/images/aws_ec2/monitoring.png";
import HeroImg from "../../../assets/images/aws_ec2/aws ec2 badge.png";
import WindowsOptimized from "../../../assets/images/aws_ec2/windows.png";
import SeamlessIntegration from "../../../assets/images/aws_ec2/seamless.png";

class Ec2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awsservices: [
        {
          img: WindowsOptimized,
          title: "Windows-Optimized Instances",
          serviceList: [
            "Choose from a variety of Windows-optimized EC2 instances tailored to meet the specific requirements of your applications, ensuring optimal performance.",
          ],
        },
        {
          img: SeamlessIntegration,
          title: "Seamless Integration",
          serviceList: [
            `Integrate CloudPlexo's AWS EC2 Service seamlessly with your existing Windows infrastructure, allowing for a smooth transition without disruptions.`,
          ],
        },
        {
          img: Automated,
          title: "Automated Backups",
          serviceList: [
            "Protect your critical Windows workloads with automated backup solutions, ensuring data integrity and easy recovery in case of unexpected events.",
          ],
        },
        {
          img: Monitoring,
          title: "Monitoring and Analytics",
          serviceList: [
            "Gain insights into your Windows workloads with our advanced monitoring and analytics tools. Track performance metrics, identify bottlenecks, and optimize resource allocation for improved efficiency.",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-ec2-page">
          <div className="ec2-dynamo-hero-section">
            <div>
              <h1>
                Seamless Performance with CloudPlexo's AWS EC2 Service Delivery
                for Microsoft Windows
              </h1>
              <p>
                Experience unmatched speed and reliability as you seamlessly run
                and scale your Microsoft Windows applications on the CloudPlexo
                AWS EC2 Service, delivering optimal performance for your
                business.
              </p>

              <div className="main-ec2-hero-btn">
                <a href="#partnership">Get started</a>

                <a href="/contact-us">Learn more</a>
              </div>
            </div>

            <div className="main-ec2-hero-img">
              <img
                src={HeroImg}
                alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
              />
            </div>
          </div>

          <div className="main-ec2-services">
            <h2>Precision in Performance, Harmony in Integration.</h2>
            <h3 id="partnership">
              Transform Your Windows Workloads with CloudPlexo's AWS EC2 Service
              Features
            </h3>

            <div className="main-ec2-services-column">
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

          <div className="main-ec2-stories">
            <h2>
              With Cloudplexo, the possibilities for customer innovation are
              endless.
            </h2>

            <VideoReview />
          </div>

          <FaqPage
            questions={FAQ}
            title="Tailored solutions ensure efficiency across various industries."
            subtitle="Transform your digital landscape with CloudPlexo's AWS EC2
                Service. Elevate your performance across industries"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Ec2;
