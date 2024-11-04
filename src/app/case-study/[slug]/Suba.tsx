import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";
import bp from "@/assets/casestudies/suba.webp";
import logo from "@/assets/casestudies/logo.webp";
import landerImg from "@/assets/casestudies/suba_cover.webp";

const Suba = () => {
    return (
        <>
            <section className={styles["gtb-pensions-page"]}>
                <h1>
                    Suba Capital’s Transformation with AWS</h1>

                <section className={styles["logo-images"]}>
                    <Image
                        src={bp}
                        alt="Suba Capital’s Transformation with AWS" style={{ width: "auto", height: "auto" }}
                    />

                    <Image
                        src={logo}
                        alt="Suba Capital’s Transformation with AWS"
                    />
                </section>

                <section className={styles["main-body"]}>
                    <Image
                        src={landerImg}
                        alt="Suba Capital’s Transformation with AWS"
                    />
                    <h2>Strategic Project Overview</h2>
                    <p>
                        Suba Capital was on a mission to modernize its wealth management application by moving from a monolithic structure to a flexible, scalable microservices architecture using AWS. This initiative focuses on leveraging Amazon ECS (Elastic Container Service) to manage containers efficiently, ensuring the application is agile, maintainable, and ready for future growth. CloudPlexo played a pivotal role in this transformation, ensuring a seamless transition to the new architecture.
                    </p>

                    <h2>Detailed Migration Steps</h2>
                    <p>CloudPlexo's comprehensive approach to the migration included the following steps:
                    </p>
                    <ul>
                        <li>Initial Assessment: CloudPlexo's technical team conducted a thorough analysis of the existing monolithic application to identify components suitable for microservices. This involved a detailed examination of the application’s architecture and dependencies.</li>
                        <li>Architectural Redesign: The monolithic application was broken down into smaller, manageable microservices, each responsible for a specific function. CloudPlexo designed the new architecture to ensure optimal performance and scalability.</li>
                        <li>Implementation of ECS: Amazon ECS was utilized to orchestrate and manage the containerized microservices seamlessly. CloudPlexo configured ECS to handle the deployment, scaling, and management of containers efficiently.</li>
                        <li>Migration Execution: CloudPlexo managed the gradual transition of application components to the new microservices-based architecture on AWS. This approach minimized disruption and ensured a smooth migration process.</li>
                        <li>Comprehensive Testing: Rigorous testing of each microservice was conducted to ensure functionality and integration. CloudPlexo's testing protocols ensured that all components worked seamlessly in the new environment.</li>
                        <li>Deployment and Monitoring: The final deployment was followed by continuous monitoring for performance and stability. CloudPlexo provided ongoing support to ensure optimal performance and address any issues promptly.</li>
                    </ul>


                    <h2>Key Advantages of AWS Migration</h2>
                    <p>The migration to AWS, expertly managed by CloudPlexo, brought several key benefits to Suba Capital:
                    </p>
                    <ul>
                        <li>
                            Improved Agility: By adopting a microservices architecture, Suba Capital can respond quickly to changes and new requirements. CloudPlexo's design ensured that each microservice could be updated and deployed independently.
                        </li>
                        <li>
                            Enhanced Scalability: AWS's scalable infrastructure supports Suba Capital’s growth, allowing resources to be adjusted as needed. CloudPlexo's configuration enabled automatic scaling based on demand.
                        </li>
                        <li>
                            Better Maintainability: Smaller, independent services make the application easier to maintain and update. CloudPlexo's approach to modular design facilitated easier troubleshooting and enhancements.
                        </li>
                        <li>
                            Increased Efficiency: Microservices enable more efficient development, testing, and deployment processes. CloudPlexo implemented CI/CD pipelines to streamline these processes.
                        </li>
                        <li>
                            Robust and Adaptable Architecture: Aligning with AWS best practices ensures a modern, adaptable architecture ready for future innovations. CloudPlexo ensured the architecture was built for longevity and adaptability.
                        </li>
                        <li>Cost Efficiency: Moving to a microservices model on AWS helps in optimizing resource utilization and reducing overall costs. CloudPlexo provided cost management strategies to maximize budget efficiency.</li>
                    </ul>

                    <h2>Cloudplexo's Role</h2>
                    <p>CloudPlexo led the entire migration process for Suba Capital, providing their expertise to ensure a seamless transition to the new microservices architecture. By managing the setup and implementation, CloudPlexo enabled Suba Capital to benefit from a more efficient, scalable, and maintainable application infrastructure.
                    </p>
                    <p>CloudPlexo’s involvement reduced initial migration costs and expedited project execution, allowing Suba Capital to quickly reap the benefits of AWS’s capabilities. This strategic partnership has positioned Suba Capital for future success, enabling them to offer high-quality, uninterrupted services to their clients in the financial services industry.</p>
                </section>
            </section>

            <Footer />
        </>
    );
}

export default Suba;
