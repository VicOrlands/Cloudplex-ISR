import logo from "@/assets/casestudies/logo.webp";
import bp from "@/assets/casestudies/climdes-cover.webp";
import landerImg from "@/assets/casestudies/staycon_cover.webp";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";

const Climdes = () => {
    return (
        <>
            <section className={styles["gtb-pensions-page"]}>
                <h1>Case Study: Empowering Climate Decision-Making with AWS IoT for Climdes</h1>

                <section className={styles["logo-images"]}>
                    <Image
                        src={bp}
                        alt="Case Study: Empowering Climate Decision-Making with AWS IoT for Climdes"
                        className={styles["phastImg"]}
                    />

                    <Image
                        src={logo}
                        alt="Case Study: Empowering Climate Decision-Making with AWS IoT for Climdes"
                    />
                </section>

                <section className={styles["main-body"]}>
                    <Image
                        src={landerImg}
                        alt="Case Study: Empowering Climate Decision-Making with AWS IoT for Climdes"
                    />

                    <h2>Overview</h2>
                    <p>The Climate-Smart Decision Support Systems (Climdes) Research Group is a leader in using technology and climate science to support sustainable decision-making. They focus on creating accessible, data-driven tools that help communities and organizations make informed choices to adapt to climate variability, ensuring resilience and equity in climate solutions.</p>
                    <p>CloudPlexo, an AWS Advance Partner, was engaged to transform Climdes’ climate-monitoring application using AWS IoT Core, DynamoDB, S3, API Gateway, and Lambda services</p>
                    <p>CloudPlexo’s expertise enabled Climdes to implement a cost-effective solution that automated data collection, minimized manual effort, and provided real-time access to climate data.
                    </p>

                    <h2>Challenges Faced Before AWS IoT Integration</h2>
                    <p>Prior to AWS, Climdes relied on manual data collection and offline storage, which led to several challenges:</p>
                    <ol>
                        <li>Delayed Data Access: Manual collection resulted in delays, preventing the team from accessing real-time climate insights.</li>
                        <li>High Resource Consumption: Data processing was resource-intensive, limiting the research team’s capacity to focus on analysis.</li>
                        <li>Limited Scalability: Climdes struggled with data management, especially with their plans to expand monitoring devices.</li>
                        <br />
                        <br />
                    </ol>

                    <h2>Solution with AWS IoT Core</h2>
                    <p>CloudPlexo designed a tailored solution with AWS services to simplify Climdes' data workflow and enhance scalability</p>
                    <ol>
                        <li>AWS IoT Core securely collected data from one climate-monitoring device, enabling bidirectional communication</li>
                        <li>AWS Lambda processed data upon arrival, storing it in Amazon DynamoDB for rapid retrieval and in Amazon S3 for historical records.</li>
                        <li>Amazon API Gateway provided secure access, allowing Climdes to view and share climate data remotely.</li>
                        <br />
                        <br />
                    </ol>

                    <h2>Benefits</h2>
                    <ol>
                        <li>Real-Time Monitoring: The AWS IoT setup enabled Climdes to access data in real time, empowering them to act promptly on climate data.</li>
                        <li>Improved Efficiency: Automated processes cut down manual labor, allowing the research team to concentrate on analysis and insight generation</li>
                        <li>Scalability for Future Growth: CloudPlexo's serverless architecture provided Climdes with a foundation for scaling their climate-monitoring efforts.</li>
                        <br />
                        <br />
                    </ol>

                    <h2>Key Metrics Achieved</h2>
                    <ol>
                        <li>Data Access Speed: Climdes reported an improvement in data retrieval times.</li>
                        <li>Operational Efficiency: Manual data-handling efforts were reduced, freeing up time for strategic tasks.</li>
                        <li>Scalability: The architecture supported an increase in data throughput</li>
                        <br />
                        <br />
                    </ol>

                    <h2>Future Plans</h2>
                    <p>Building on this successful application, CloudPlexo and Climdes plan to expand the project by:</p>
                    <ol>
                        <li>Scaling with Kinesis Data Streams for multi-device support and enhanced real-time data processing.</li>
                        <li>Introducing Edge Processing with AWS IoT Greengrass, enabling local data processing for remote or disconnected devices</li>
                        <li>Implementing Predictive Analytics with Amazon SageMaker for climate forecasting and proactive insights</li>
                    </ol>
                    <p>Through CloudPlexo’s partnership, Climdes has adopted a scalable, AWS-powered IoT solution, advancing their mission to drive climate resilience and enabling data-driven decisions for a sustainable future.</p>
                </section>
            </section>

            <Footer />
        </>
    );
}

export default Climdes;
