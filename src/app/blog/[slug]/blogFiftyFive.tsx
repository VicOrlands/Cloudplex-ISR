import FeatherIcon from "feather-icons-react";
import badge from "@/assets/blog/blog55/AWS Auto Scaling thumbnail.webp";
import Img1 from "@/assets/blog/blog55/1.webp";
import Img2 from "@/assets/blog/blog55/2.webp";
import Img3 from "@/assets/blog/blog55/3.webp";
import Img4 from "@/assets/blog/blog55/4.webp";
import Img5 from "@/assets/blog/blog55/5.webp";
import Img6 from "@/assets/blog/blog55/6.webp";
import Img7 from "@/assets/blog/blog55/7.webp";
import Img8 from "@/assets/blog/blog55/8.webp";
import Img9 from "@/assets/blog/blog55/9.webp";
import Img10 from "@/assets/blog/blog55/10.webp";
import Img11 from "@/assets/blog/blog55/11.webp";
import Img12 from "@/assets/blog/blog55/12.webp";
import Img13 from "@/assets/blog/blog55/13.webp";
import Img14 from "@/assets/blog/blog55/14.webp";
import Img15 from "@/assets/blog/blog55/15.webp";
import Img16 from "@/assets/blog/blog55/16.webp";
import Img17 from "@/assets/blog/blog55/17.webp";
import Img18 from "@/assets/blog/blog55/18.webp";
import Img19 from "@/assets/blog/blog55/19.webp";
import Img20 from "@/assets/blog/blog55/20.webp";
import Img21 from "@/assets/blog/blog55/21.webp";
import Img22 from "@/assets/blog/blog55/22.webp";
import Img23 from "@/assets/blog/blog55/23.webp";
import Img24 from "@/assets/blog/blog55/24.webp";
import Img25 from "@/assets/blog/blog55/25.webp";
import Img26 from "@/assets/blog/blog55/26.webp";
import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogFiftyFive() {
    return (
        <section className={styles["blog"]}>
            <ul className={styles["socials"]}>
                <li>Share</li>
                <li>
                    <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/guide-to-aws-auto-scaling"
                        target="blank"
                    >
                        <FeatherIcon
                            icon="facebook"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/guide-to-aws-auto-scaling"
                        target="blank"
                    >
                        <FeatherIcon
                            icon="twitter"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/guide-to-aws-auto-scaling"
                        target="blank"
                    >
                        <FeatherIcon
                            icon="linkedin"
                        />
                    </a>
                </li>
            </ul>

            <div className={styles["main-content"]}>
                <h1>Guide to AWS Auto Scaling</h1>
                <br />
                <Image src={badge} alt="awslambdabadge" />
                <br />
                <br />
                <h4>What is an Auto Scaling Group?</h4>
                <p>
                    An Auto Scaling group is a collection of Amazon EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management. These groups allow you to automatically adjust the number of EC2 instances in response to changing application demands, ensuring that you have the right number of instances available to handle the load at any given time.
                </p>
                <Image
                    loading="lazy"
                    src={Img1}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <h4>Key Benefits:</h4>
                <ol>
                    <li>
                        <b>Cost Optimization: </b>
                        By dynamically adjusting capacity, you only pay for the resources you need, when you need them.
                    </li>
                    <li>
                        <b>Improved Availability: </b>
                        Auto Scaling can automatically replace unhealthy instances, enhancing your application's reliability.
                    </li>
                    <li>
                        <b>Scalability: </b>
                        Seamlessly handle traffic spikes without manual intervention.
                    </li>
                    <li>
                        <b>Flexibility: </b>
                        Customize scaling policies to match your specific application requirements.
                    </li>
                </ol>
                <Image
                    loading="lazy"
                    src={Img2}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <h4>How Auto Scaling Works:</h4>
                <p>Auto Scaling continuously monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Here's a breakdown of the process:</p>
                <ol>
                    <li>
                        <b>Define Launch Template or Configuration: </b>
                        Specify the EC2 instance type, AMI, security groups, and other parameters.
                    </li>
                    <li>
                        <b>Set Desired Capacity: </b> Determine the initial number of instances you want running.
                    </li>
                    <li>
                        <b>Configure Scaling Policies:</b> Set rules for when to scale out (add instances) or scale in (remove instances).
                    </li>
                    <li>
                        <b>Monitor Metrics:</b> AWS CloudWatch monitors specified metrics (e.g., CPU utilization, network traffic).
                    </li>
                    <li>
                        <b>Execute Scaling Actions:</b> When thresholds are breached, Auto Scaling automatically adjusts the number of instances.
                    </li>
                </ol>
                <Image
                    loading="lazy"
                    src={Img3}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <h4>Implementing Auto Scaling:</h4>
                <h6>Step 1: Sign into the AWS console</h6>
                <p>To begin, sign into the AWS console using your credentials.</p>

                <h6>Step 2: Search and select EC2</h6>
                <p>In the search bar, type "EC2" and select it from the dropdown menu.</p>
                <Image
                    loading="lazy"
                    src={Img4}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <h6>Step 3: Create an Auto Scaling Group</h6>
                <p>
                    Scroll down on the left-hand side and click on "Create Auto Scaling Group".
                </p>

                <h6>Step 4: Configure Auto Scaling Group
                </h6>
                <p>
                    Give a name for the Auto Scaling Group and hit the launch template button.
                </p>
                <Image
                    loading="lazy"
                    src={Img5}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <h6>What is a launch template?</h6>
                <p>A launch template is a pre-configured set of parameters for EC2 instances. It streamlines the instance creation process by storing:</p>
                <ul>
                    <li>AMI selections</li>
                    <li>Instance types</li>
                    <li>Security group settings</li>
                    <li>And other key configurations</li>
                </ul>

                <h6>Benefits:</h6>
                <ul>
                    <li>Time-saving: Avoid repetitive manual setup</li>
                    <li>Consistency: Ensure standardized instance configurations</li>
                    <li>Versioning: Maintain multiple template versions for different needs</li>
                    <li>Flexibility: Easily modify and reuse configurations</li>
                </ul>

                <h6>Step 5: Creating a Launch Template:</h6>
                <p>Click on "Create Launch Template" to open a new tab. Give the  template a name and description.</p>
                <Image
                    loading="lazy"
                    src={Img6}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <h6>Step 6: Customize the Launch Template</h6>
                <p>Select an AMI image for your EC2 instance and choose an instance type. Create a security group to control inbound and outbound traffic.</p>
                <Image
                    loading="lazy"
                    src={Img7}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <p>we went with the Ubuntu AMI</p>
                <Image
                    loading="lazy"
                    src={Img8}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <p>In the image above, we the t2.micro instance type, which is suitable for this demo and falls under the free tier usage.</p>
                <Image
                    loading="lazy"
                    src={Img9}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <p>"Create a key pair". A key pair is essential as it enables SSH access into our instance.</p>
                <Image
                    loading="lazy"
                    src={Img10}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>Enter a name for your key pair, and click "Create". This action will prompt the download of a .pem file. It is recommended to download the file to a directory that you can easily access.
                </p>

                <p>Next, scroll down to network settings:
                </p>
                <Image
                    loading="lazy"
                    src={Img11}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <p>We have opted to create a new security group, which acts as a firewall, controlling the network access to our server/instance.
                </p>

                <p>In the image above, we have provided a name for our security group, entered a description, and selected the VPC where the server/instance will be created.</p>

                <p>Next, we add the rules for our security group:</p>
                <Image
                    loading="lazy"
                    src={Img12}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>In our security group configuration:</p>

                <p>Rule 1 allows SSH access from our specific IP address, using the default port 22.</p>
                <p>Rule 2 permits internet access over the HTTP protocol (port 80) from any source.
                </p>
                <p>Rule 3 does the same as Rule 2 but for HTTPS (port 443).</p>
                <p>Click the "Create launch template" button on the right side. Upon successful creation, you will see a confirmation screen with relevant details.</p>
                <Image
                    loading="lazy"
                    src={Img13}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <p>Congratulations on creating the launch template! Now, let's continue creating the auto-scaling group using the recently created launch template.
                </p>

                <h6>Step 7: Return to Auto Scaling Group Creation</h6>
                <p>Go back to the previous tab and click the refresh button. Select the launch template you just created. Then click next.</p>
                <Image
                    loading="lazy"
                    src={Img14}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <h6>Step 8: Configure Instance Launch Options</h6>
                <p>Choose the VPC in which you want to launch your resources. Select the desired availability zones.</p>
                <Image
                    loading="lazy"
                    src={Img15}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>In the image above, we have selected the default VPC. Normally, you would choose the VPC where you are launching your resources. Additionally, we have selected the availability zones US-east-1a and US-east-1b. Our instance will span across these zones, enhancing redundancy.</p>
                <p>Click the "Next" button to move to the next step.</p>

                <h6>Step 9: Configure Advanced Options</h6>
                <p>In this step, we will attach a new load balancer that distributes traffic across your EC2 instances. Provide a name for the load balancer and select the "Internet-facing" option to receive traffic from the internet. Refer to the image below for visual guidance.</p>
                <Image
                    loading="lazy"
                    src={Img16}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>Now, scroll down on the same page to the network mapping area, where you will find the pre-selected availability zones (AZs). Choose the subnets within these AZs.</p>
                <p>Additionally, in the Listeners and routing section, select the "Create a target group" option to define a group of instances that will receive traffic from the load balancer.
                    Refer to the image below for reference.</p>
                <Image
                    loading="lazy"
                    src={Img17}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <Image
                    loading="lazy"
                    src={Img18}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>Lastly, scroll to the health check section, enable health checks and set a grace period of 300 seconds (you can adjust the duration as per your preference). The grace period allows for ignoring any health check failures immediately after instance launch, giving the instances time to stabilize before being marked as unhealthy.</p>
                <Image
                    loading="lazy"
                    src={Img19}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>Click the "Next" button to move to the next step.
                </p>

                <h6>Step 10: Configure Group Size and Scaling Policies</h6>
                <p>In this step, you will specify the number of instances you want in your Auto Scaling Group. Set the desired capacity, which represents the number of instances you want to maintain at any given time. Define the minimum and maximum capacity, ensuring your Auto Scaling Group operates within your desired bounds. See the image below:</p>
                <Image
                    loading="lazy"
                    src={Img20}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>Furthermore, we would create scaling policies based on metrics such as CPU usage. These policies determine when to add or remove instances, ensuring optimal performance and resource utilization</p>

                <h6>Step 11: Add Notifications:</h6>
                <p>This step is optional, so we would skip it for now.
                    <br />
                    Click the "Next" button to move to the next step.
                </p>

                <h6>Step 12: Add Tags:</h6>
                <p>In this step, we include tags to our Auto Scaling Group for better organization and management.</p>

                <h6>Step 13: Review and Confirm:</h6>
                <p>Before proceeding, please take a moment to review the options you have selected in the previous steps and ensure their accuracy. Once you have confirmed everything, click the "Create Auto Scaling Group" button to finalize the process.</p>
                <Image
                    loading="lazy"
                    src={Img21}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>If everything is set up correctly, you should see a result similar to the image below:</p>
                <Image
                    loading="lazy"
                    src={Img22}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />

                <h6>Step 14: Testing the Setup</h6>
                <p>Navigate back to the EC2 dashboard.
                </p>
                <Image
                    loading="lazy"
                    src={Img23}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>Click on the instance ID to access the instance details.
                </p>
                <Image
                    loading="lazy"
                    src={Img24}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>Copy the instance's public IP address and test it in your browser. Your server should be up and running;</p>

                <h6>Step 15: Testing the Load Balancer</h6>
                <p>Access the Load Balancer section from the left-hand side menu. Copy the Load Balancer DNS and test it in your browser.
                </p>
                <Image
                    loading="lazy"
                    src={Img25}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
                <p>To observe the load balancer in action, refresh your browser multiple times. You will notice that the instance ID changes periodically as the load balancer dynamically distributes traffic between the instances created by the Auto Scaling Group.</p>
                <p>Congratulations! You have successfully implemented auto scaling on AWS 🎉.</p>

                <h2>Best Practices:</h2>
                <ol>
                    <li>
                        Use Target Tracking Policies: These policies are easier to set up and often more effective than simple or step scaling policies.
                    </li>
                    <li>Implement Gradual Scaling: Avoid dramatic changes in capacity to prevent potential service disruptions.</li>
                    <li>Leverage Multiple Metrics: Combine CPU utilization with custom application metrics for more accurate scaling decisions.</li>
                    <li>Test Thoroughly: Simulate various scenarios to ensure your Auto Scaling configuration behaves as expected.</li>
                    <li>Monitor and Refine: Regularly review your Auto Scaling performance and adjust as needed.</li>
                </ol>

                <h2>Advanced Considerations:</h2>
                <ol>
                    <li>Scheduled Scaling: Set up recurring schedules for predictable traffic patterns.</li>
                    <li>Lifecycle Hooks: Perform custom actions before instances are terminated or put into service.</li>
                    <li>Warm Pools: Maintain a pool of pre-initialized instances to improve application scaling speed.</li>
                    <li>Integration with AWS Services: Combine Auto Scaling with services like Elastic Load Balancing and Amazon RDS for a comprehensive scalable architecture.</li>
                </ol>

                <h2>Conclusion:</h2>
                <p>Auto Scaling groups are essential to building resilient, cost-effective applications in AWS. By automatically adjusting capacity to meet demand, they enable you to optimize resource utilization while maintaining high availability and performance.</p>

                <h2>Illustration:</h2>
                <Image
                    loading="lazy"
                    src={Img26}
                    alt="AWS Browser tools and extensions to enhance your experience"
                />
                <br />
                <br />
            </div>
        </section>
    );
}
