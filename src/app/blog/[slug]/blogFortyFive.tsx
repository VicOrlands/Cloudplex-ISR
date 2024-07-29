"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import badge from "@/assets/blog/blog45/searchAWSamplify.webp";
import badge2 from "@/assets/blog/Aws amplify.webp";
import Img1 from "@/assets/blog/blog45/HostAWEBapp.webp";
import Img2 from "@/assets/blog/blog45/chooseAmplifyPlatfom.webp";
import Img3 from "@/assets/blog/blog45/authorizeGithubAmplify.webp";
import Img4 from "@/assets/blog/blog45/amplifySelectRepo.webp";
import Img5 from "@/assets/blog/blog45/amplifySelectBranch.webp";
import Img6 from "@/assets/blog/blog45/amplifyReview.webp";
import Img7 from "@/assets/blog/blog45/amplifyPomodoroApp.webp";
import { CopyBlock, a11yDark } from "react-code-blocks";

const code1 = `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
`;

export default class BlogFortyFive extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/how-to-deploy-and-host-your-web-app-on-aws-amplify"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/how-to-deploy-and-host-your-web-app-on-aws-amplify"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/how-to-deploy-and-host-your-web-app-on-aws-amplify"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </Link>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h1>How to Deploy and Host Your Web App on AWS Amplify</h1>
          <br />
          <Image src={badge2} alt="awspartnerbadge" />
          <br />
          <br />
          <p>
            AWS Amplify is a powerful service that simplifies the
            process of deploying and hosting web applications. With
            its ease of use and integration with various frontend
            frameworks, deploying your app becomes straightforward. In
            this tutorial, we'll walk through the steps required to
            deploy a web app using AWS Amplify.
          </p>
          <p>Step 1: Sign in to the AWS Management Console</p>
          <p>
            Navigate to the{" "}
            <Link href="https://console.aws.amazon.com">
              AWS Management Console
            </Link>{" "}
            and sign in to your AWS account. If you don’t have an
            account, you'll need to sign up.
          </p>
          <p>Step 2: Access AWS Amplify Console</p>
          <p>
            Once logged in, search for "Amplify" in the AWS services
            search bar.
            <Image
              src={badge}
              alt="ilearn cloud"
            />
          </p>
          <p>
            Step 2: Click "New app" button and choose host a web app
            <Image
              src={Img1}
              alt="ilearn cloud"
            />
          </p>
          <p>Step 3: Choose the platform your code is hosted</p>
          <p>
            Select your preferred Git provider (GitHub, Bitbucket,
            GitLab, or AWS CodeCommit). In our case, we will be using
            Github. Choose and click continue.
            <Image
              src={Img2}
              alt="ilearn cloud"
            />
          </p>
          <p>Step 4: Authorize Amplify</p>
          <p>
            Authorize AWS Amplify to access your repository.
            <Image
              src={Img3}
              alt="ilearn cloud"
            />
          </p>

          <p>
            Choose the repository and branch that contains your web
            app code.
            <Image
              src={Img4}
              alt="ilearn cloud"
            />
            <br />
            <br />
            <Image
              src={Img5}
              alt="ilearn cloud"
            />
          </p>

          <p>Click "Next."</p>
          <ol>
            <li>
              Define your build settings:
              <ul>
                <li>
                  Select the framework or environment of your app
                  (React, Angular, Vue.js, etc.).
                </li>
                <li>
                  Configure the build settings like build commands,
                  output directory, etc.
                </li>
              </ul>
            </li>
            <li>Click "Next."</li>
          </ol>

          <p>
            Framework and build settings can be auto detected, this
            steps can be skipped if it does.
          </p>

          <p>
            Also, if you require a custom build setting, In your
            project root, you can add a amplify.yml where your can
            have something like this:
          </p>
          <CopyBlock
            text={code1}
            language="javascript"
            showLineNumbers={false}
            theme={a11yDark}
            wrapLongLines={true} />
          <br />
          <br />

          <p>
            Step 5: Review and Deploy
            <Image
              src={Img6}
              alt="ilearn cloud"
            />
          </p>

          <ol>
            <li>Review the settings to ensure they're correct.</li>
            <li>
              Click "Save and deploy" to trigger the deployment
              process.
            </li>
          </ol>

          <p>Step 6: Monitor the Deployment</p>
          <p>
            AWS Amplify will start the deployment process. You can
            monitor the deployment progress in the Amplify Console. It
            will automatically build and deploy your app based on the
            configuration you provided.
          </p>

          <p>Step 7: View Your Deployed App</p>
          <p>
            Once the deployment is completed successfully: <br /> Here
            is our pomodoro site built with nextjs
            <Image
              src={Img7}
              alt="ilearn cloud"
            />
          </p>

          <ol>
            <li>
              Click on the link provided in the Amplify Console to
              view your live web app.
            </li>
            <li>Ensure everything looks and works as expected.</li>
          </ol>

          <p>Step 8: Set Up Custom Domains (Optional)</p>
          <p>If you want to use a custom domain for your app:</p>

          <ol>
            <li>
              In the Amplify Console, go to "Domain management."
            </li>
            <li>
              Follow the instructions to add and configure your custom
              domain.
            </li>
          </ol>

          <p>Step 9: Continuous Deployment (Optional)</p>
          <p>
            AWS Amplify supports continuous deployment, allowing
            automatic updates whenever you push changes to your
            repository:
          </p>
          <ol>
            <li>
              Enable the "Continuous deployment" option in the Amplify
              Console.
            </li>
            <li>Choose the branch to monitor for changes.</li>
            <li>
              Any new commits to that branch will trigger automatic
              redeployment.
            </li>
          </ol>

          <p>
            Congratulations! You've successfully deployed and hosted
            your web app on AWS Amplify. Remember to manage your app
            settings and monitor its performance regularly through the
            Amplify Console.
          </p>
          <p>
            Customize your deployment settings further based on your
            app’s specific requirements. AWS Amplify offers a variety
            of features for scaling, monitoring, and managing your
            applications, making it a robust choice for hosting web
            apps.
          </p>
        </div>
      </section >
    );
  }
}
