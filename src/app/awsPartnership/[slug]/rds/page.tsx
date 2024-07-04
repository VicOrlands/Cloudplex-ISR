import React from "react";
import img2 from "@/assets/aws_partnership/rds/finance 1.png";
import img1 from "@/assets/aws_partnership/rds/planning-schedule 1.png";
import Image from "next/image";

{/* <SEO
  title="RDS Ready: Revolutionize Your Cloud Relational Database Management"
  description="Experience simplified database administration, seamless scalability, and cost-efficiency with CloudPlexo's RDS Ready service for AWS Redshift."
  keywords="RDS Ready, Relational Database Management, AWS Redshift Service, Scalable Database, Cost-Efficient Data Warehouse"
/> */}

export default function RDSReady() {
    return (
        <div className="rdsready-page">
            <div className="container">
                <div className="row align-items-center text-center justify-content-center hero">
                    <div>
                        <h3>RDS Ready</h3>
                        <p>
                            A groundbreaking service that revolutionizes the way you manage
                            your relational databases in the cloud. Say goodbye to the
                            complexities of database administration and hello to seamless
                            scalability and effortless operations.
                        </p>
                        <a href="/contact-us">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>
            <div className="modules ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div>
                                <h3 className="title">
                                    Simplified Management and Monitoring
                                </h3>
                                <p>
                                    Spend less time on management and more time on innovation.
                                    Our AWS Redshift service delivery streamlines cluster
                                    management and provides comprehensive monitoring, freeing up
                                    your team's resources for strategic initiatives.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Image
                                src={img1}
                                alt="Simplified Management and Monitoring"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modules ">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-md-6">
                            <Image src={img2} alt="management" className="img-fluid" />
                        </div>
                        <div className="col-md-6 order-first order-md-1">
                            <div>
                                <h3 className="title">Scalable and Cost-Effective</h3>
                                <p>
                                    Scale your data warehouse effortlessly as your business
                                    grows. With CloudPlexo's expertise, AWS Redshift allows you
                                    to expand storage and compute resources as needed, ensuring
                                    cost-efficiency and eliminating the need for upfront
                                    investments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*        
        <Partners />
        <VideoReview />
        <BlogCatalog /> */}

            <div className="call-to-action">
                <div>
                    <h3>
                        Embrace the future of computing with our expert cloud solutions.
                    </h3>
                    <a className="btn btn-primary" href="/contact-us">
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
}
