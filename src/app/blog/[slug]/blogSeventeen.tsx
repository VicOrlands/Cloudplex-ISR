"use client"
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import image1 from "@/assets/blog/recognition/image1.webp";
import image2 from "@/assets/blog/recognition/image2.webp";
import image3 from "@/assets/blog/recognition/image3.webp";
import image4 from "@/assets/blog/recognition/image4.webp";
import image5 from "@/assets/blog/recognition/image5.webp";
import image6 from "@/assets/blog/recognition/image6.webp";
import image7 from "@/assets/blog/recognition/image7.webp";
import image8 from "@/assets/blog/recognition/image8.webp";
import image9 from "@/assets/blog/recognition/image9.webp";
import image10 from "@/assets/blog/recognition/image10.webp";
import image11 from "@/assets/blog/recognition/image11.webp";
import image12 from "@/assets/blog/recognition/image12.webp";
import image13 from "@/assets/blog/recognition/image13.webp";
import image14 from "@/assets/blog/recognition/image14.webp";
import image15 from "@/assets/blog/recognition/image15.webp";
import image16 from "@/assets/blog/recognition/image16.webp";
import code1 from "@/assets/blog/recognition/code1.webp";
import code2 from "@/assets/blog/recognition/code2.webp";
import code3 from "@/assets/blog/recognition/code3.webp";

{/* <SEO
  title="AWS Rekognition Video Detection Guide - Step-by-Step Configuration"
  description="Learn how to set up AWS Rekognition for video detection with this step-by-step guide. Configure Amazon S3, Amazon SNS, Amazon SQS, and Lambda for efficient video analysis"
  keywords="AWS Rekognition Video Detection, Amazon Rekognition, Video Analysis Setup, AWS Video Detection Guide, Video Recognition Configuration"
/> */}

export default class BlogSeventeen extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/video-detection-with-aws-rekognition"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/video-detection-with-aws-rekognition"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/video-detection-with-aws-rekognition"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </a>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h1>Video Detection with AWS Rekognition</h1>

          <h2>Introduction</h2>
          <p>
            Amazon Rekognition is a fully managed computer vision
            service that enables developers to analyze images and
            videos for a variety of use. AWS Rekognition provides a
            cloud-based pre-trained AI model that uses deep learning
            to analyze and extract information from images, videos,
            and text.
          </p>
          <p>
            With the Rekognition API, it becomes much easier to build
            a solution that moderates content on your platforms. It
            offers a ready-to-use and wide range of computer vision
            capabilities, including object detection, text detection,
            image comparison, and much more.
          </p>
          <p>
            Rekognition also becomes handy when building an automated
            identity verification system, with its image comparison
            API, it extracts features from images and matches them
            against one another.
          </p>

          <h2>Video Label Detection</h2>
          <p>
            <strong>Amazon S3 Configuration:</strong>
          </p>
          <p>
            Before we begin our video analysis, we will first upload
            the video we want to analyze. To do that, go to the
            Buckets section in your Amazon S3. You can quickly
            navigate to your Buckets by searching for S3 in the Search
            bar at the nav section.
          </p>
          <Image
            src={image1}
            alt="blogImage"
          />

          <p>
            In your Buckets page, we will be creating a new Bucket
            called "Mezie-video-rekognition". You can name yours
            anything or decide to use an existing Bucket.
          </p>
          <Image
            src={image2}
            alt="blogImage"
          />
          <p>
            Next, we navigate into the Bucket we created and upload
            our video. Be sure to rename your video to a more
            easier-to-remember name. This is because we will be
            needing the video name and our Bucket name too.
          </p>
          <Image
            src={image3}
            alt="blogImage"
          />
          <p>
            <strong>Amazon SNS Configuration:</strong>
          </p>
          <p>
            After successfully uploading the video, we will then
            navigate to our SNS (Simple Notification Service) page to
            create an SNS topic. You can use the Search bar too for
            easier navigation.
          </p>
          <p>
            The SNS is a service that allows message delivery from
            publishers to subscribers. It enables the easy creation,
            publishing, and consumption of messages or notifications
            to and from various endpoints or subscribers.
          </p>
          <Image
            src={image4}
            alt="blogImage"
          />
          <p>
            SNS allows us to send the results of the video analysis to
            an SNS topic. This then allows the analysis results to be
            easily consumed by other components or systems that are
            subscribed to the SNS topic. Use cases of this service
            will be alerting or sending an email message of the
            analysis report to the topic subscribers on completion of
            the analysis.
          </p>
          <p>
            Inside the SNS page, select Topics as you will see the
            number of Topics available.
          </p>
          <Image
            src={image5}
            alt="blogImage"
          />
          <p>I’ve created a new Topic called AmazonRekognitionSNS.</p>
          <Image
            src={image6}
            alt="blogImage"
          />
          <p>
            Navigate into the Topic and copy the ARN as we will need
            it for our analysis.
          </p>
          <Image
            src={image6}
            alt="blogImage"
          />
          <p>
            <strong>Amazon SQS Configuration:</strong>
          </p>
          <p>
            Next, we navigate to Queues located inside our Amazon SQS
            page.
          </p>
          <Image
            src={image7}
            alt="blogImage"
          />
          <p>
            Inside the page, we will create a Queue. I’ve created one
            and called it “AmazonRekognitionQueue” See image below.
          </p>
          <Image
            src={image8}
            alt="blogImage"
          />
          <p>
            Navigate inside the created Queue
            (AmazonRekognitionQueue). At the bottom, you will find a
            “Subscribe to Amazon SNS topic” button. Click on it so we
            can subscribe to the Topic we created earlier.
          </p>
          <Image
            src={image9}
            alt="blogImage"
          />
          <p>
            Click on the “Choose a topic” dropdown and select the ARN
            of the Topic we created. The ARN ends in the topic’s name
            so look for the one that matches your topic and subscribe
            to it. <br /> See image below for clarity
          </p>
          <Image
            src={image10}
            alt="blogImage"
          />
          <p>
            After subscribing to the Topic, copy the ARN and URL of
            your Queue. You can find both at the Details
            section(located at the top of your Queue page).
          </p>
          <br />
          <p>
            <strong>Lambda Configuration:</strong>
          </p>
          <p>
            Finally, we will be navigating to the Lambda page where we
            will be writing our codes and performing our video
            detection.
          </p>
          <p>
            I’ve created a function called “DetectVideos” that runs in
            a Python environment.
          </p>
          <Image
            src={image11}
            alt="blogImage"
          />
          <p>
            After navigating inside the function, go down to the
            Configurations section and choose Permissions.
          </p>
          <Image
            src={image12}
            alt="blogImage"
          />
          <p>
            Click on the Role Name and you will be navigated to the
            IAM Roles page on another tab. We are going to be
            assigning certain roles to the user so that we can be able
            to perform the video detection analysis. These roles
            include AmazonRekognitionFullAccess, AmazonSQSFullAccess,
            and so on.
          </p>
          <p>
            In the Permissions Policies section, click on the “Add
            Permissions” button seen on the right side and then
            “Attach Permissions”.
          </p>
          <Image
            src={image13}
            alt="blogImage"
          />
          <p>
            We are going to be adding the following permissions:
            AmazonRekognitionFullAccess, AmazonS3ReadOnlyAccess,
            AmazonSQSFullAccess, and AmazonRekognitionServiceRole.
          </p>
          <p>
            For the last permission, we will be creating a custom
            policy. This is to add a permission that isn’t available.
            This permission “rekognition:StartLabelDetection” allows
            us to start our label detection analysis for our videos.
          </p>
          <p>
            To add the custom permission, click on the “Add
            Permissions” button and this time, click on the “Create
            Inline Policy” button instead. Select JSON and paste the
            code below;
          </p>
          <Image
            src={code1}
            alt="blogImage"
          />
          <Image
            src={image14}
            alt="blogImage"
          />
          <p>
            Review policy and save. You should have these permissions
            as your preferred permissions.
          </p>
          <Image
            src={image15}
            alt="blogImage"
          />
          <p>
            Copy your role’s ARN. You can locate it at the top of the
            page (Summary section). Then, go back to the Lambda’s home
            page and select the Code section so we can begin writing
            our code.
          </p>
          <p>
            In your lambda_function.py editor, copy and paste the code
            below;
          </p>
          <Image
            src={code2}
            alt="blogImage"
          />
          <p>
            Change the video bucket and video name to yours. Also,
            replace the SNS topic name and Role’s ARN to yours. Deploy
            your code and test.
          </p>
          <p>
            Note: Lambda's default execution time is less than 3 secs
            so your test might not complete (test will timeout) before
            the video has been fully analyzed. To fix this, go over to
            Configuration, select General configuration and then
            change the timeout to a longer time to allow the function
            to run and complete the analysis.
          </p>

          <h2>Celebrity Detection</h2>
          <p>
            We can also perform Celebrity detection in our lambda.
            Amazon Rekognition provides us with an API called
            start_celebrity_recognition and get_celebrity_recognition
            that allows us to detect which celebrity is in our video.
          </p>
          <Image
            src={code3}
            alt="blogImage"
          />
          <p>
            In this case, it ran and detected Donald Trump as the
            celebrity present in the Video with a confidence of 99.
          </p>
          <Image
            src={image16}
            alt="blogImage"
          />
        </div>
      </section >
    );
  }
}
