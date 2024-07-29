"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import cover from "@/assets/blog/awstranscribe.webp";
import transcribedashboard from "@/assets/blog/aws_transcribe_job_dashboard.webp";
import transcribeconfigure from "@/assets/blog/aws_transcribe_job_configure.webp";
import transcribedashboard2 from "@/assets/blog/aws_transcribe_dashboard.webp";
import awstranscribecode from "@/assets/blog/awstranscribecode.webp";

export default class BlogTwentyThree extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/hands-on-with-aws-transcribe"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/hands-on-with-aws-transcribe"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/hands-on-with-aws-transcribe"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </Link>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h2>Hands on with Transcribe: A Step-by-Step Guide</h2>
          <br />
          <Image src={cover} alt="Hands on with Transcribe: A Step-by-Step Guide" />
          <br />
          <br />
          <p>
            In the fast-paced world of technology, speech-to-text
            conversion has become an indispensable tool for businesses
            and individuals alike. Automatic Speech Recognition (ASR)
            services, such as Amazon Web Services (AWS) Transcribe,
            offer a powerful and convenient way to convert spoken
            language into written text. Whether it's transcribing
            meetings, podcasts, or customer service interactions, AWS
            Transcribe has you covered. In this article, we'll take a
            hands-on approach to using AWS Transcribe and explore the
            key steps involved in the process.
          </p>
          <ol>
            <li>
              <strong> Setting Up an AWS Account:</strong> If you
              don't already have an AWS account, head over to the{" "}
              <Link href="https://aws.amazon.com/">AWS website</Link> and
              sign up. Once you've created an account, you'll be able
              to access a wide range of cloud-based services,
              including AWS Transcribe.
            </li>

            <li>
              <strong>Navigating to AWS Transcribe:</strong> After
              logging into your AWS account, you can access AWS
              Transcribe by either searching for it in the AWS
              Management Console or by directly visiting the service's
              homepage.
            </li>

            <li>
              <strong>Creating a Transcription Job:</strong> To get
              started with AWS Transcribe, you'll need an audio or
              video file that you want to transcribe. Supported
              formats include MP3, MP4, WAV, FLAC, and more. Once you
              have your file ready, follow these steps to create a
              transcription job:
              <ul>
                <li>
                  <strong>Step 1:</strong> Click on "Create
                  transcription job" from the AWS Transcribe
                  dashboard.
                </li>
                <li>
                  <strong>Step 2:</strong> Give your job a unique name
                  and provide the location of the audio or video file
                  you want to transcribe. You can upload your file
                  directly to an S3 bucket or provide a public URL.
                </li>
                <li>
                  <strong>Step 3:</strong> Choose the language spoken
                  in the audio or video. AWS Transcribe supports a
                  wide range of languages, making it suitable for
                  diverse global applications.
                </li>
                <li>
                  <strong>Step 4:</strong> Configure the output
                  settings. You can choose the desired output format
                  (JSON, plain text, or other options), and you have
                  the option to enable automatic content redaction for
                  sensitive information.
                </li>
                <li>
                  <strong>Step 5:</strong> (Optional) You can also
                  configure a language model to improve transcription
                  accuracy for specialized domains.
                </li>
                <li>
                  <strong>Step 6:</strong> Review your settings and
                  click "Create" to initiate the transcription job.
                </li>
              </ul>
            </li>

            <li>
              <strong>Monitoring the Transcription Job:</strong> Once
              the job is created, AWS Transcribe will start processing
              the audio or video file. You can monitor the status and
              progress of the transcription job from the AWS
              Transcribe dashboard. The duration of the job will
              depend on the size and complexity of the input file.
            </li>

            <li>
              <strong>
                Retrieving and Analyzing the Transcription:
              </strong>{" "}
              After the job is completed, you can retrieve the
              transcription output from the AWS Transcribe dashboard.
              The output will be in the format you selected during job
              creation (JSON, plain text, etc.). You can also download
              the output for further analysis or integration with
              other applications.
            </li>

            <li>
              <strong>Improving Transcription Accuracy:</strong> AWS
              Transcribe is designed to deliver accurate
              transcriptions, but there might be cases where the
              output may require some corrections. You can use Amazon
              Transcribe's Custom Vocabulary feature to fine-tune the
              service for specific domain-specific terms or jargon.
            </li>
          </ol>
          <h4>Images:</h4>
          <ol>
            <li>
              <strong>AWS Transcribe Dashboard</strong>
            </li>
            <br />
            <Image
              src={transcribedashboard}
              alt="transcribedashboard"
            />
            <p>
              This image shows the AWS Transcribe dashboard, where you
              can create and manage transcription jobs.
            </p>
            <li>
              {" "}
              <strong>Configuring Transcription Job:</strong>
            </li>
            <br />
            <Image
              src={transcribeconfigure}
              alt="transcribeconfigure"
            />
            <p>
              This image illustrates the configuration settings when
              creating a transcription job, including language
              selection and output format.
            </p>
            <li>
              <strong>Monitoring Transcription Progress:</strong>
            </li>
            <br />
            <Image
              src={transcribedashboard2}
              alt="transcribedashboard2"
            />
            <p>
              Here, you can see the progress of an ongoing
              transcription job, including the job status and
              percentage completed.
            </p>
          </ol>
          <h4>Working with the transcribe API</h4>
          <p>
            Working with the Amazon Transcribe API allows developers
            to integrate automatic speech recognition capabilities
            directly into their applications, enabling real-time
            transcription and analysis of audio content. The
            Transcribe API, part of the Amazon Web Services (AWS)
            ecosystem, offers a more programmatic interface to
            interact with the Transcribe service.
          </p>
          <h6>Example in lambda</h6>
          <p>
            The code below shows the implementation of a
            speech-to-text services with AWS Transcribe:
          </p>
          <br />
          <Image
            src={awstranscribecode}
            alt="awstranscribe"
          />

          <h4>Conclusion</h4>
          <p>
            AWS Transcribe is a valuable tool that efficiently
            converts spoken language into written text, offering
            significant benefits across different applications.
            Throughout this guide, we explored the process of creating
            transcription jobs, monitoring progress, and obtaining
            transcription outputs. The service's availability and
            language support make it suitable for various industries
            and use cases. It's worth giving it a try to experience
            how it simplifies your speech-to-text conversion
            requirements.
          </p>
        </div>
      </section >
    );
  }
}
