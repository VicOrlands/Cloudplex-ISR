import { StaticImageData } from "next/image";

import blog14 from "@/assets/blog/awspartner.webp";
import blog16 from "@/assets/blog/cloudcomputingcost.webp";
import blog17 from "@/assets/blog/cloudcostmanagement.webp";
import blog18 from "@/assets/blog/cloudnative.webp";
import blog19 from "@/assets/blog/wellarchitected.webp";
import blog20 from "@/assets/blog/servicelimit.webp";
import blog21 from "@/assets/blog/awscostoptimization.webp";
import blog22 from "@/assets/blog/rightsizing.webp";
import blog23 from "@/assets/blog/10.webp";
import blog11 from "@/assets/blog/blog5.webp";
import blog12 from "@/assets/blog/blog12.webp";
import blog from "@/assets/blog/costoptimization.webp";
import blog2 from "@/assets/blog/aws-lambda.webp";
import blog3 from "@/assets/blog/aws-sam.webp";
import blog4 from "@/assets/blog/rekognition.webp";
import blog5 from "@/assets/blog/aws-services.webp";
import blog6 from "@/assets/blog/githubactions.webp";
import blog7 from "@/assets/blog/cloudbilling.webp";
import partnernetwork from "@/assets/blog/partnernetwork.webp";
import awstranscribe from "@/assets/blog/awstranscribe.webp";
import awspolly from "@/assets/blog/awspolly.webp";
import awscomprehend from "@/assets/blog/awscomprehend.webp";
import awslambda from "@/assets/blog/awslambda.webp";
import amazonapi from "@/assets/blog/amazonapi.webp";
import ec2fargate from "@/assets/blog/Aws⁄ec2 fargate.webp";
import awsTextract from "@/assets/blog/Advanced Document Processing with AWS Textract.webp";
import cloudNative from "@/assets/blog/Strategies  to Achieving Business Agility with Cloud-Native Culture.webp";
import serverless from "@/assets/blog/Best Practices Building Scalable Apps with Serverless Architecture.webp";
import backup from "@/assets/blog/Best Practices to Ensuring Data Resilience with Cloud-Native Backup.webp";
import cloudmigration from "@/assets/blog/Cloud Migration Strategies and Best Practices: Unlocking Efficiency and Innovation with CloudPlexo.webp";
import serviceLimit from "@/assets/blog/Effective Monitoring of AWS Service Limits.webp";
import costSavings from "@/assets/blog/Maximizing Cloud Benefits for business.webp";
import optimizingCloudCost from "@/assets/blog/Optimizing Cloud Costs for businesses.webp";
import optimizingAWSCost from "@/assets/blog/Strategies to Optimizing AWS Cost for Business.webp";
import awsManaged from "@/assets/blog/Unlocking the power of aws managed cloud.webp";
import design from "@/assets/blog/Designing well architected aws solutions.webp";
import nlpImage from "@/assets/blog/AWS_Comprehend_and_its_role_in_NLP.webp";
import AWSCLI from "@/assets/blog/Introduction to CLI Basic.webp";
import WebAppAWS from "@/assets/blog/Building a Basic Web Application on AWS.webp";
import s3Boto3 from "@/assets/blog/blog42/aws_login_screen.webp";
import Blog42 from "@/assets/blog/Boto 3 in python.webp";
import blog43 from "@/assets/blog/Aws amplify.webp";
import blog44 from "@/assets/blog/blog46/first.webp";
import blog47 from "@/assets/blog/blog47/3.webp";
import blog48 from "@/assets/blog/blog48/main.webp";
import blog49 from "@/assets/blog/blog49/badge.webp";
import blog50 from "@/assets/blog/blog50/home.webp";
import blog51 from "@/assets/blog/blog51/AWS Browser tools and extensions to enhance your experience.webp";
import blog52 from "@/assets/blog/blog52/cover.webp";
import blog53 from "@/assets/blog/blog53/thumbnail.webp";
import blog54 from "@/assets/blog/Moving successfully to the Amazon Cloud.webp";
import blog55 from "@/assets/blog/blog54/Building an image analyzer with react and amazon rekognition.webp";
import blog56 from "@/assets/blog/blog55/AWS Auto Scaling thumbnail.webp";
import blog56Main from "@/assets/blog/blog56/partyrock_thumbnail_main.webp";
import blog57Main from "@/assets/blog/blog57/event bus arch.png";
import blog58Main from "@/assets/blog/blog58/redirect thumbnail.png";
import blog59 from "@/assets/blog/SMB Blog Thumbnail.webp";

export interface BlogsProps {
  image: StaticImageData;
  title: string;
  desc: string;
  link: string;
  date?: string;
}

export const blogs: BlogsProps[] = [
  {
    image: blog59,
    title: "CloudPlexo Achieves AWS SMB Competency: Leading AWS Partner in Africa",
    desc: "Cloudplexo has achieved the AWS Small and Medium Business (SMB) Competency status. While we're thrilled about adding another badge to our collection, we're even more excited about what this means for businesses like yours.",
    link: "aws-smb-competency-badge-africa",
    date: "8 November 2024",
  },
  {
    image: blog58Main,
    title: "Full Guide -  Redirecting www to non-www in AWS",
    desc: "Maintaining a consistent URL structure is crucial for website management and search engine optimization (SEO). This guide explores five methods to redirect the www subdomain to the root domain",
    link: "how-to-redirect-www-to-non-www-site-in-aws",
    date: "11 October 2024",
  },
  {
    image: blog57Main,
    title: "AWS SNS and SQS - How To Build A Robust Event Bus Architecture",
    desc: "This article will explore how these services work individually and how they can be integrated to create a robust event bus architecture.",
    link: "aws-sns-and-sqs-how-to-build-a-robust-event-bus-architecture",
    date: "03 October 2024",
  },
  {
    image: blog56Main,
    title:
      "The Ultimate Guide to Building Generative AI Apps with Amazon PartyRock",
    desc: "Amazon PartyRock is a generative AI app-building playground powered by Amazon Bedrock which allows users to experiment with prompt engineering and create fun and intuitive AI-powered apps without writing code.",
    link: "the-ultimate-guide-to-building-generative-ai-apps-with-amazon-partyrock",
    date: "30 August 2024",
  },
  {
    image: blog56,
    title: "Guide to AWS Auto Scaling",
    desc: "An Auto Scaling group is a collection of Amazon EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management. These groups allow you to automatically adjust the number of EC2 instances in response to changing application demands, ensuring that you have the right number of instances available to handle the load at any given time.",
    link: "guide-to-aws-auto-scaling",
    date: "27 August 2024",
  },
  {
    image: blog55,
    title: "Building an Image Analyzer with React and Amazon Rekognition",
    desc: "In this tutorial, we'll create an Image Analyzer app using React and Amazon Rekognition. This app allows users to upload images and receive AI-powered analysis of the content, including object detection and text recognition.",
    link: "building-an-image-analyzer-with-react-and-amazon-rekognition",
    date: "12 August 2024",
  },
  {
    image: blog54,
    title: "Moving successfully to the Amazon Cloud",
    desc: "Moving to the Amazon cloud can have a number of advantages for a business, the ones most often talked about are cost saving and scalability However, deploying on AWS isn't a simple matter of transferring your existing infrastructure.",
    link: "moving-successfully-to-the-amazon-cloud",
    date: "17 July 2024",
  },
  {
    image: blog53,
    title:
      "Migrating Your Applications to the Cloud: The 7 Rs of Cloud Migration",
    desc: "The cloud offers a compelling value proposition for businesses of all sizes. However, transitioning your applications from on-premises infrastructure to the cloud can be a complex undertaking. AWS provides a variety of migration strategies to cater to different application types and business needs.",
    link: "migrating-your-applications-to-the-cloud-the-7-rs-of-cloud-migration",
    date: "24 June 2024",
  },
  {
    image: blog52,
    title: "Serverless or Server: AWS Lambda vs Amazon EC2 for Cloud Computing",
    desc: "As organizations move toward cloud computing, they are faced with a critical decision: whether to opt for serverless computing with AWS Lambda or traditional server-based computing with Amazon Elastic Compute Cloud (EC2). In this article, we'll look at the key differences between these two compute services and provide guidance on when to use each approach.",
    link: "serverless-or-Server-aws-lambda-vs-amazon-ec2-for-cloud-computing",
    date: "12 June 2024",
  },
  {
    image: blog51,
    title: "AWS Browser tools and extensions to enhance your experience",
    desc: "If you're just getting started with AWS (Amazon Web Services), navigating the Cloud Console can be a bit daunting at first. Luckily, there are several handy browser tools and extensions that can simplify your AWS experience and make the learning curve less steep.",
    link: "aws-browser-tools-and-extensions-to-enhance-your-experience",
    date: "29 May 2024",
  },
  {
    image: blog50,
    title:
      "Building an Email Subscription and Broadcasting System with React and AWS SNS",
    desc: "AWS Simple Notification Service (SNS) is a fully managed messaging service provided by Amazon Web Services. It allows you to decouple and scale applications by following a publish/subscribe (pub/sub) model.",
    link: "building-an-email-subscription-and-broadcasting-system-with-react-and-aws-sns",
    date: "14 May 2024",
  },
  {
    image: blog49,
    title:
      "Building Fullstack app with React and AWS Amplify - Authentication and Databases",
    desc: "AWS Amplify is a powerful set of tools and services provided by Amazon Web Services (AWS) that simplifies the process of building modern web and mobile applications. It abstracts away much of the complexity involved in integrating various AWS services, such as authentication, API management, storage, database, and more, into your application.",
    link: "building-fullstack-app-with-react-and-aws-amplify-authentication-and-databases",
  },
  {
    image: blog48,
    title:
      "Serverless Compute Comparison: AWS Lambda vs. Azure Functions vs. Google Cloud Functions",
    desc: "Cloud computing is constantly changing and improving. One big change we’ve had is serverless computing. Serverless computing makes it easier to build, deploy, and scale applications. With serverless, developers can focus just on writing code.",
    link: "serverless-compute-comparison-aws-lambda-vs-azure-functions-vs-google-cloud-functions",
  },
  {
    image: blog47,
    title: "Getting Started with DynamoDB - A Practical Approach",
    desc: `AWS DynamoDB is a managed NoSQL database that is optimized for performance at scale. With DynamoDB, you can benefit from features like encryption at rest, fine-grained access control using AWS Identity and Access Management (IAM), e.t.c.`,
    link: "getting-started-with-dynamodb-a-practical-approach",
  },
  {
    image: blog44,
    title: "AWS Step functions - A Practical Guide",
    desc: `In this tutorial, we'll explain what AWS Step Functions are, show you how they work, and guide you through some examples to help you understand and use them effectively. Let's get started on making your workflow easier with AWS Step Functions!`,
    link: "aws-step-functions-a-practical-guide",
  },
  {
    image: blog43,
    title: "How to Deploy and Host Your Web App on AWS Amplify",
    desc: `AWS Amplify is a powerful service that simplifies the process of deploying and hosting web applications. With its ease of use and integration with various frontend frameworks, deploying your app becomes straightforward. In this tutorial, we'll walk through the steps required to deploy a web app using AWS Amplify.`,
    link: "how-to-deploy-and-host-your-web-app-on-aws-amplify",
  },
  {
    image: Blog42,
    title: "Uploading Large Files Upto 5TB to Amazon S3 using Boto3 in Python",
    desc: `Uploading large files, especially those approaching the terabyte scale, can be challenging. Boto3, the AWS SDK for Python, provides a powerful and flexible way to interact with S3, including handling large file uploads through its multipart upload feature.`,
    link: "uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python",
  },
  {
    image: s3Boto3,
    title: "Understanding the Difference Between AWS SNS and SQS",
    desc: `Two essential components for enabling communication and coordination between distributed systems are Simple Notification Service (SNS) and Simple Queue Service (SQS). Despite their similar-sounding names, SNS and SQS serve distinct purposes in the AWS ecosystem.`,
    link: "understanding-the-difference-between-aws-sns-and-sqs",
  },
  {
    image: s3Boto3,
    title: "Uploading and Downloading Files to/from Amazon S3 using Boto3",
    desc: `Amazon Simple Storage Service (S3) is a scalable object storage service that allows you to store and retrieve any amount of data. In this tutorial, we will guide you through the process of uploading and downloading files to/from an S3 bucket using the Boto3 library in Python.`,
    link: "uploading-and-downloading-files-from-amazon-sw3-using-boto3",
  },
  {
    image: WebAppAWS,
    title: "Step-by-Step Guide: Building a Basic Web Application on AWS",
    desc: `Deploying a web application on Amazon Web Services (AWS) involves multiple steps, from setting up an EC2 instance to configuring a database, networking, deploying the app, and optimizing various aspects.`,
    link: "building-a-basic-web-application-on-aws",
  },
  {
    image: AWSCLI,
    title: "Introduction to AWS CLI: Basic Commands for Beginners",
    desc: `The Amazon Web Services Command Line Interface (AWS CLI) is a powerful tool that enables users to interact with various AWS services using commands in the terminal or command prompt. This tutorial aims to introduce fundamental AWS CLI commands with explanations for beginners.`,
    link: "introduction-to-aws-cli-basic-commands-for-beginners",
  },
  {
    image: nlpImage,
    title: "AWS Comprehend And Its Role In NLP",
    desc: `Imagine if computers could talk with us, understand our words, and even help us make sense of the vast amount of text on the internet. Well, that's exactly what Natural Language Processing (NLP) does.`,
    link: "aws-comprehend-and-its-role-in-nlp",
  },
  {
    image: awsManaged,
    title:
      "Unlocking the Power of AWS Managed Cloud: Benefits, Services, and Case Studies",
    desc: `In today's dynamic business landscape, leveraging the full potential of cloud services is no longer a luxury but a necessity. Amazon Web Services (AWS) offers a robust set of cloud solutions, and among them, AWS Managed Cloud stands out as a game-changer.`,
    link: "unlocking-the-power-of-aws-managed-cloud",
  },
  {
    image: optimizingCloudCost,
    title: "Strategies to Optimizing AWS Costs for Business Efficiency",
    desc: `Amazon Web Services (AWS) has revolutionized the way businesses operate in the cloud, offering unparalleled scalability and flexibility. However, the ease of scaling can sometimes lead to unexpected cloud cost challenges.`,
    link: "strategies-to-optimizing-aws-costs-for-business-efficiency",
  },
  {
    image: optimizingAWSCost,
    title:
      "Optimizing Cloud Costs for Businesses: Strategies, Tools, and Savings with CloudPlexo",
    desc: `In the era of digital transformation, cloud services have become the backbone of modern business operations. Cloud adoption offers unparalleled flexibility, scalability, and innovation.`,
    link: "optimizing-cloud-costs-for-businesses-with-cloudplexo",
  },
  {
    image: costSavings,
    title:
      "Maximizing Cloud Benefits for Businesses: A Guide to Cost Savings and Efficiency",
    desc: `In today's digital age, cloud computing has emerged as a game-changer for businesses across the globe. It offers a wide array of advantages, ranging from scalability and flexibility to cost savings and enhanced efficiency.`,
    link: "maximizing-cloud-benefits-for-businesses",
  },
  {
    image: serviceLimit,
    title:
      "Effective Monitoring of AWS Service Limits: Strategies for Scalable Cloud Operations",
    desc: `Amazon Web Services (AWS) offers a vast array of services, making it a powerful cloud platform for businesses. However, the true potential of AWS can only be harnessed through well-architected solutions.`,
    link: "effective-monitoring-of-aws-service-limits",
  },
  {
    image: design,
    title:
      "Designing Well-Architected AWS Solutions: Best Practices and Implementation",
    desc: `Amazon Web Services (AWS) offers a vast array of services, making it a powerful cloud platform for businesses. However, the true potential of AWS can only be harnessed through well-architected solutions.`,
    link: "designing-well-architected-aws-solutions",
  },
  {
    image: cloudmigration,
    title:
      "Cloud Migration Strategies and Best Practices: Unlocking Efficiency and Innovation with CloudPlexo",
    desc: `In today's digitally driven world, businesses are increasingly turning to the cloud to enhance their operations, reduce costs, and stay competitive. Cloud adoption is no longer just a trend but a strategic imperative.`,
    link: "unlocking-efficiency-and-innovation-with-cloudplexo",
  },
  {
    image: backup,
    title:
      "Best Practices to Ensuring Data Resilience with Cloud-Native Backup",
    desc: `In today's data-driven world, ensuring data resilience is a top priority for businesses of all sizes. With the growing adoption of cloud technology, the concept of cloud-native backup has become a game-changer.`,
    link: "best-practices-to-ensuring-data-resilience-with-cloud-native-backup",
  },
  {
    image: serverless,
    title: "Best Practices Building Scalable Apps with Serverless Architecture",
    desc: `In today's fast-paced digital landscape, the ability to build and scale applications quickly is a competitive advantage. Serverless architecture has emerged as a game-changer in this regard.`,
    link: "best-practices-building-scalable-apps-with-serverless-architecture",
  },
  {
    image: cloudNative,
    title:
      "Strategies  to Achieving Business Agility with Cloud-Native Culture",
    desc: `In today's rapidly evolving business landscape, agility is the key to success. Embracing a cloud-native culture has emerged as a potent strategy for organizations seeking to enhance their agility, scalability, and innovation.`,
    link: "strategies-to-achieving-business-agility-with-cloud-native-culture",
  },
  {
    image: awsTextract,
    title: "Advanced Document Processing with AWS Textract",
    desc: `In today's digital world, businesses and organizations deal with an ever-increasing volume of documents, ranging from invoices and contracts to forms and reports. Extracting structured data from these documents manually can be time-consuming, error-prone, and inefficient.`,
    link: "advanced-document-processing-with-aws-textract",
  },
  {
    image: awslambda,
    title: "CloudPlexo Receives AWS Lambda Service Delivery Designation",
    desc: " AWS Lambda Service Delivery designation validates AWS Partners that have deep technical knowledge, experience, and proven success in delivering specific AWS services to customers. From helping customers run serverless code...",
    link: "cloudplexo-receives-aws-lambda-service-delivery-designation",
  },
  {
    image: amazonapi,
    title:
      "Approved: Amazon API Gateway Service Delivery Enhancing Efficiency and Connectivity",
    desc: "At the heart of modern business operations lies the Amazon API Gateway, a fully managed service that simplifies the creation, deployment, and management of APIs. This versatile tool empowers businesses to build APIs that...",
    link: "amazon-api-gateway-service-delivery-enhancing-efficiency-and-connectivity",
  },
  {
    image: ec2fargate,
    title: "A Beginner's Guide to ECS and AWS Fargate",
    desc: "Containerization has become a popular approach for deploying and managing applications. This is because, Containers provide a portable and easy way to package...",
    link: "a-beginner's-guide-to-aws-fargate-and-ec2",
  },
  {
    image: awscomprehend,
    title: "Hands on with AWS Comprehend",
    desc: "Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to extract insights and connections from text. It can be used to understand the content of documents...",
    link: "hands-on-with-aws-comprehend",
  },
  {
    image: awstranscribe,
    title: "Hands on with Transcribe: A Step-by-Step Guide",
    desc: "In the fast-paced world of technology, speech-to-text conversion has become an indispensable tool for businesses and individuals alike. Automatic Speech Recognition (ASR) services, such as Amazon Web Services (AWS) Transcribe...",
    link: "hands-on-with-aws-transcribe",
  },
  {
    image: awspolly,
    title: "Hands on AWS Polly: A practical guide",
    desc: "In the fast-changing world of technology, voice-enabled apps have become a crucial feature for enhancing userexperiences. One of tools in this domain is Amazon Polly...",
    link: "hands-on-aws-polly",
  },
  {
    image: partnernetwork,
    title:
      "Breaking Boundaries: CloudPlexo Ascends to Advanced Tier Consulting and Technology Partner with AWS",
    desc: "The Advanced Tier status is a recognition of our strong team of trained and certified technical individuals who have proven customer experience. It signifies our deep technical expertise...",
    link: "cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws",
  },
  {
    image: blog7,
    title:
      "Unravelling Cloud Billing Solutions: Optimise Costs and Maximise Savings",
    desc: "Cloud computing has revolutionised the way businesses operate, providing scalability, flexibility, and efficiency. However, cloud billing and cost management can be challenging to navigate...",
    link: "unravelling-cloud-billing-solutions",
  },
  {
    image: blog6,
    title: "Getting started with CI/CD using GitHub Actions",
    desc: "GitHub Actions is a CI/CD platform that allows you to automate your test, build, and deployment pipeline. It allows the creation of workflows based on a vast range of events, such as pull requests...",
    link: "continuous-deployment-using-github-actions",
  },
  {
    image: blog5,
    title: "10 AWS Services",
    desc: "Amazon Web Services(AWS) is a cloud computing platform with over 150+ featured services that provide businesses, customers, startups and developers with access to cloud infrastructures...",
    link: "10-aws-services",
  },
  {
    image: blog4,
    title: "Video Detection with AWS Rekognition",
    desc: "Amazon Rekognition is a fully managed computer vision service that enables developers to analyze images and videos for a variety of use. AWS Rekognition provides a cloud-based pre-trained AI model that uses...",
    link: "video-detection-with-aws-rekognition",
  },
  {
    image: blog3,
    title: "AWS SAM - Build, Test and Deploy serveless applications",
    desc: "With SAM, you can define the resources you need in a YAML or ]SON file, and AWS CloudFormation takes care of creating those resources for you. SAM extends AWS...",
    link: "aws-sam-build-test-and-deploy-serveless-applications",
  },
  {
    image: blog2,
    title: "AWS lambda - Introduction to writing serverless applications.",
    desc: "Serverless is a cloud native development model that allows developers to build and run applications without having to manage servers.",
    link: "aws-lambda-introduction-to-writing-serverless-applications",
  },
  {
    image: blog,
    title: "Cloud Cost Optimisation: What it is and Why it Matters.",
    desc: "Cloud computing has revolutionised the way businesses operate, providing agility, scalability, and cost-effectiveness like never before. However, as more and more ...",
    link: "what-cloud-optimisation-is-and-why-it-matters",
  },
  {
    image: blog23,
    title:
      "Digitization - How Does The Cloud Enable Agile Digital Transformations?",
    desc: "Digitization, basically, is the process of conversion of information embedded in physical documents, from analog to digital. It ensures...",
    link: "digitization-how-does-the-cloud-enable-agile-digital-transformations",
  },
  {
    image: blog14,
    title: "CloudPlexo Achieves AWS ISV Partner Status in AWS Partner Network",
    desc: "Software company CloudPlexo, the cloud management platform that aims to help companies shrink their cloud expenses.",
    date: "20 April, 2021",
    link: "cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network",
  },
  {
    image: blog16,
    title: "Ways Companies Can Save on Their Cloud Computing Costs.",
    desc: "Your cloud expenses are dependent on your organisation's size and use.",
    date: "20th March, 2021",
    link: "ways-companies-can-save-on-their-cloud-computing-costs",
  },
  {
    image: blog17,
    title:
      "Can SMEs(Small-Medium Enterprises) Benefit From Cloud Cost Management Tools?",
    desc: "The introduction of Infrastructure as a Service (IaaS) opened the cloud computing world to enterprises of all sizes with the provision of scalability coupled with a pay-per-use model.",
    date: "18th Jan, 2021",
    link: "can-smes-benefit-from-cloud-cost-management-tools",
  },
  {
    image: blog18,
    title: "The Benefits of Building a Cloud-Native Company",
    desc: "Building a cloud-native company, firm, business or organization implies leveraging the full potential of the cloud to build and run loosely coupled systems that are resilient, manageable, and observable",
    date: "12th May, 2021",
    link: "the-benefits-of-building-a-cloud-native-company",
  },
  {
    image: blog19,
    title: "AWS Well-Architected Alignment using CloudPlexo Platform",
    desc: "Are you using the AWS cloud? Are you confident that you’ve designed secure, lean and reliable applications in the cloud? Do you want to assess and monitor infrastructure for technology risk, resilience and agility, while Optimising cost?",
    date: "25th May, 2021",
    link: "aws-well-architected-framework-alignment",
  },
  {
    image: blog20,
    title: "AWS Service Limits Monitoring using CloudPlexo Platform",
    desc: "Enterprise businesses do not want to experience a downtime in the delivery of their online digital-based services, especially at a time when significant business operations are being carried out remotely and over the cloud",
    date: "25th May, 2021",
    link: "aws-service-limits-monitoring",
  },
  {
    image: blog21,
    title:
      "AWS Cost Optimization While Achieving Your Desired Business and Technical Objectives",
    desc: "Leverage advanced solutions provided by Cloudplexo and AWS native tools for AWS Cost Optimization",
    date: "3rd June, 2021",
    link: "aws-cost-optimization-while-achieving-your-desired-business",
  },
  {
    image: blog22,
    title: "Rightsizing Recommendation - An Approach to Save on Your AWS Cost",
    desc: "The cloud technology is a major breakthrough in scaling IT infrastructure, unleashing opportunities for flexible deployments and resource management.",
    date: "4th June, 2021",
    link: "rightsizing-recommendation-an-approach-to-save-on-your-aws-cost",
  },
  {
    image: blog11,
    title: "Will Cloud Computing Rule the world?",
    desc: "Before we dive into the topic for today’s blog post, let us, first, have a recap into what cloud computing is. I like to define cloud computing as simple as computing, but on the cloud. ",
    date: "4th June, 2022",
    link: "will-cloud-computing-rule-the-world",
  },
  {
    image: blog12,
    title: "Why build on the Cloud?",
    desc: `Before you get into building your application, there are several items that you need to go check to ensure building a successful application. `,
    date: "5th October, 2022",
    link: "why-build-on-the-cloud",
  },
];
