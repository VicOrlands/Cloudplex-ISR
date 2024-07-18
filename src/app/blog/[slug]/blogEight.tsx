import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import bgimg from "@/assets/blog/1.jpg";
import logodark from "@/assets/blog/logo-dark.png";
import logolight from "@/assets/blog/logo-light.png";
import blog1 from "@/assets/blog/AWS-cost-optimization-1.jpeg";
import Link from "next/link";
import Image from "next/image";

export default class PageBlogDetailTwo extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <SEO
          title="Achieving AWS Cost Optimization with CloudPlexo"
          description="Learn how CloudPlexo, as an AWS Partner, helps organizations achieve cost optimization in the AWS cloud by following best practices."
          keywords="AWS Cost Optimization, CloudPlexo, AWS Partner, best practices,
        AWS cloud cost reduction, AWS cost management, CloudPlexo's AWS
        optimization, AWS cloud expense reduction"
        /> */}

        <section
          className="bg-half-breadcrumb d-table w-100"
          style={{ background: `url(${bgimg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <div className="page-next-level">
            <h4 className="title text-white title-dark">
              AWS Cost Optimization While Achieving Your Desired Business
              and Technical Objectives{" "}
            </h4>
          </div>
        </section>

        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <ul className="list-unstyled text-center sticky-bar social-icon mb-0">
            <li className="mb-3 h6">Share</li>
            <li>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-cost-optimization-while-achieving-your-desired-business"
                target="blank"
                className="rounded"
              >
                <FeatherIcon
                  icon="facebook"
                  className="fea icon-sm fea-social"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-cost-optimization-while-achieving-your-desired-business"
                target="blank"
                className="rounded"
              >
                <FeatherIcon
                  icon="twitter"
                  className="fea icon-sm fea-social"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-cost-optimization-while-achieving-your-desired-business"
                target="blank"
                className="rounded"
              >
                <FeatherIcon
                  icon="linkedin"
                  className="fea icon-sm fea-social"
                />
              </a>
            </li>
          </ul>

          <div className="col-md-10">
            <ul className="list-unstyled d-flex justify-content-between mt-4">
              <li className="list-inline-item user mr-2">
                <Link href="#">
                  <i className="mdi mdi-account text-dark"></i> Richard
                  E
                </Link>
              </li>
              <li className="list-inline-item date text-muted">
                <i className="mdi mdi-calendar-check text-dark"></i> 3rd
                June, 2021
              </li>
            </ul>

            <Image
              src={blog1}
              className="img-fluid rounded-md shadow"
              alt="Achieving AWS Cost Optimization with CloudPlexo"
            />

            <br />
            <br />

            <p>
              <span style={{ fontWeight: "800" }}> </span>
              Although cloud cost optimization procedures are targeted
              at cutting down cloud expenses, it is however not expected
              to compromise the quality of resource operations. Hence,
              the overall goal of cloud cost optimization is to ensure
              that business and technical goals or objectives are
              attained and sustained through cost-efficiency.
              <br />
              <br />
              As organizations migrate their workloads to public cloud
              infrastructures such as AWS, it is important that they
              maintain their business and technical objectives at no
              extra budget-straining cost. However, this is quite
              difficult when in-house teams don’t have the time or
              expertise to monitor and optimally manage cloud resources
              in relation to costs and performance.
              <br />
              <br />
              As an AWS Partner, Cloudplexo can ensure that such
              organizations seamlessly and continuously leverage AWS
              scalability, performance and cost optimization
              opportunities while maintaining their ongoing business and
              technical objectives. To leverage AWS cost optimization
              opportunities, the following processes are essential,
              backed by combinations of AWS native tools and advanced
              solutions provided by Cloudplexo.
            </p>
            <h5>Dependency Mapping and Analysis</h5>
            <p>
              Taking Inventory of all software assets on your cloud
              environment is the first step to gaining control and
              understanding the cost and operational effects of all
              applications. Using advanced management tools such as
              Cloudplexo, the established inventory can be analyzed to
              gain clearer visibility on performance, security to
              further map and assess dependent applications or services.
            </p>
            <h5>AWS Best Practices</h5>
            <p>
              AWS provides cloud management recommendations that are
              considered as the 5 pillars of best practices. Delivered
              through the AWS Well-Architected platform on Cloudplexo,
              these recommendations are being provided to help cloud
              architects build secure, high-performing, resilient, and
              efficient infrastructure for their applications and
              workloads which will lead to cost optimization.
            </p>
            <h5>Workload Rightsizing</h5>
            <p>
              Workload rightsizing involves matching organization’s
              applications with the allotted resources or instance type.
              This will ensure that cloud users are not wasting money
              due to over-provisioning or placing performance at risk
              due to under-provisioning of resources. For autonomous
              management, AI-powered solutions such as Cloudplexo
              further provide factored recommendations such as
              reservation of EC2 instances which can result in huge
              savings when compared to OnDemand pricing.
            </p>
            <h5>Automated Resource Scheduling</h5>
            <p>
              Non-production resources including those for development
              or staging environment can build up cloud bills when they
              are not in use. Hence, it is essential to schedule their
              availability or active modes only to peak or needed
              periods, using flexible automated tools as provided for
              AWS workloads through Cloudplexo.
            </p>

            <h5>Distributed Disaster Management</h5>

            <p>
              Disaster management is significantly easier and precise on
              cloud-native applications due to its distributed nature
              enabled by containerization.
            </p>

            <h5> Intelligent Forecasting</h5>
            <p>
              As the organization plans for its business or technical
              expansion, smart cost management platforms can make the
              cloud cost budget or forecast to be realistic and
              data-driven, enabling teams to easily take decisions.
            </p>

            <h5 className="mt-4">Comments :</h5>

            <h5 className="mt-4">Leave A Comment :</h5>

            <form className="mt-3">
              <label>Your Comment</label>
              <div className="position-relative">
                <FeatherIcon
                  icon="message-circle"
                  className="fea icon-sm icons"
                />
                <textarea
                  id="message"
                  placeholder="Your Comment"
                  name="message"
                  className="form-control pl-5"
                  required></textarea>
              </div>

              <div className="col-lg-6">
                <label>
                  Name <span className="text-danger">*</span>
                </label>
                <div className="position-relative">
                  <FeatherIcon
                    icon="user"
                    className="fea icon-sm icons"
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="form-control pl-5"
                    required />
                </div>
              </div>

              <div className="col-lg-6">
                <label>
                  Your Email <span className="text-danger">*</span>
                </label>
                <div className="position-relative">
                  <FeatherIcon
                    icon="mail"
                    className="fea icon-sm icons"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="form-control pl-5"
                    required />
                </div>
              </div>

              <div className="send">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section >
      </React.Fragment >
    );
  }
}
