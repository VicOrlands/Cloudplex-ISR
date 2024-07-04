import { StaticImageData } from "next/image";

import Lamda from "@/assets/aws_partnership/aws_lambda.png";
import Scan from "@/assets/aws_partnership/ai_scan.png";
import RDS from "@/assets/aws_partnership/rds_ready.png";
import Migration from "@/assets/aws_partnership/cloud_migration.png";
import Archictected from "@/assets/aws_partnership/aws_well_architected.png";
import Wendu from "@/assets/aws_partnership/wendu.png";
import Delivery from "@/assets/aws_partnership/amazon_delivery.png";
import Cloud from "@/assets/aws_partnership/amazon_cloudfront.png";
import Systems from "@/assets/aws_partnership/aws_systems_manager.png";
import Config from "@/assets/aws_partnership/aws_config.png";
import Transfer from "@/assets/aws_partnership/aws_transfer.png";
import EC2 from "@/assets/aws_partnership/amazon_ec2.png";

export interface AWSProps {
    img: StaticImageData,
    title: string,
    desc: string,
    link: string
}

export const awsservices: AWSProps[] = [
    {
        img: Lamda,
        title: "AWS Lambda Service Delivery",
        desc: "A serverless computing service by Amazon Web Services that enables developers to run code without managing servers, automatically scaling and responding to various events.",
        link: "/aws-lambda-service",
    },
    {
        img: Scan,
        title: "AI Scan",
        desc: "Analysing Information from all data and data sources, Applying Insights, common sense, curiosity and through a continuous iterative process of Augmenting Intelligence. Our Values are quality, honesty, integrity and teamwork.",
        link: "/data-analytics",
    },
    {
        img: RDS,
        title: "RDS Ready",
        desc: "Revolutionize your cloud database management with our groundbreaking service, eliminating admin complexities for seamless scalability and effortless operations.",
        link: "/rds-ready",
    },
    {
        img: Migration,
        title: "Cloud Migration",
        desc: "Cloud Migration Factory automates the coordination and automation of large migrations to the cloud, including multiple servers, by automating manual processes and integrating multiple tools efficiently.",
        link: "/cloud-migration",
    },
    {
        img: Archictected,
        title: "AWS Well Architected Program",
        desc: "Your guiding light on this journey, ensuring that your cloud environment is Secure, Highly efficient, Reliable, Performant & Cost Effective.",
        link: "/aws-well-architected-framework-alignment",
    },
    {
        img: Wendu,
        title: "Wendu",
        desc: "Insights for both developers and management to run a secured, efficient, lean, cost-optimized and reliable cloud.",
        link: "https://wendu.io",
    },
    {
        img: Delivery,
        title: "Amazon Dynamo DB Delivery",
        desc: `Experience unparalleled performance and reliability as we streamline data delivery with Amazon's cutting-edge DynamoDB technology`,
        link: "/aws-dynamo-db",
    },
    {
        img: Cloud,
        title: "Amazon Cloudfront Delivery",
        desc: `Supercharge your web applications and APIs by leveraging the power of Amazon's CloudFront service.`,
        link: "/amazon-cloudfront-delivery",
    },
    {
        img: Systems,
        title: "AWS Systems Manager",
        desc: "A robust solution designed to centralize and automate resource management, providing you with a unified interface for efficient and streamlined administration of your AWS resources.",
        link: "/cloud-resource-managament",
    },
    {
        img: Config,
        title: "AWS Config",
        desc: "A powerful service that enables continuous monitoring, assessment, and management, ensuring adherence to best practices and compliance standards across your entire.",
        link: "/security-compliance",
    },
    {
        img: Transfer,
        title: "AWS transfer family",
        desc: "A comprehensive solution that ensures secure and seamless data movement, supporting a variety of protocols and integrating seamlessly with your AWS environment.",
        link: "/aws-transfer-family",
    },
    {
        img: EC2,
        title: "Amazon EC2",
        desc: "Effortlessly deploy and scale virtual servers with EC2 on AWS, tailoring your computing environment to specific needs while ensuring reliability and security.",
        link: "/amazon-ec2",
    },
]