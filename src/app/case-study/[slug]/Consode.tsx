import logo from "@/assets/casestudies/logo.webp";
import bp from "@/assets/casestudies/consode-cover.webp";
import landerImg from "@/assets/casestudies/fundusBg.svg";
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

                    <h2>Introduction</h2>
                    <p>Consode Digital, an IT solutions provider, specializes in delivering digital solutions by designing and configuring tailored models that help medium-sized enterprises streamline operations and achieve scalable growth. Known for its effective ERP solutions, they recognized the need to enhance their core ERP application by migrating from Namecheap to Amazon Web Services (AWS).</p>

                    <h2>Challenge</h2>
                    <p>Recognizing the complexity and potential risks associated with this migration, Consode employed the expertise of CloudPlexo, a trusted AWS Advanced partner in cloud consulting and migration solutions</p>
                    <p>The primary goal of this migration is to ensure that the application becomes more scalable, reliable, and resilient, in order to enhance user experience and support business expansion.</p>

                    <h2>Solutions</h2>
                    <p>CloudPlexo developed a comprehensive migration strategy. This included:</p>
                    <ol>
                        <li><b>Infrastructure Assessment: </b>Analyzing the current ERP setup to identify dependencies and performance metrics.</li>
                        <li><b>Architectural Design: </b>Creating a tailored AWS architecture optimized for cost and performance, the following AWS services were used:<br />
                            AWS Amplify for the frontend, Application Load Balancer for efficient traffic distribution, Amazon EC2 for scalable compute resources, RDS MySQL for a managed database solution, Secrets Manager for secure management of sensitive information, Amazon S3 for scalable storage, Route 53 for DNS management, VPC for a secure network configuration, and Amazon ElastiCache for enhancing caching and data storage performance.</li>
                        <li><b>Data Migration: </b>Utilizing AWS Database Migration Service for secure, real-time data transfer.</li>
                        <li><b>Testing: </b>Conducting thorough testing to ensure all functionalities worked seamlessly before the final migration.</li>
                        <li><b>Monitoring and Support: </b>Implementing monitoring tools to ensure the system operated smoothly post-migration and providing ongoing support.</li>
                        <br />
                        <br />
                    </ol>

                    <h2>Results</h2>
                    <p>The migration to AWS resulted in improved performance and reliability for Consode Digital’s ERP application. The new infrastructure allowed for greater scalability, enabling the company to respond quickly to changing business needs. Additionally, the high availability of AWS services reduced the risk of downtime, enhancing user satisfaction. Cost optimization strategies implemented by CloudPlexo also helped Consode manage expenses effectively.</p>

                    <h2>Conclusion</h2>
                    <p>The successful migration of Consode’s ERP application from Namecheap to AWS aligns with the company’s vision for growth and operational excellence and employing the expertise of CloudPlexo not only mitigated risks but also optimized the ERP system for future growth.</p>
                </section>
            </section>

            <Footer />
        </>
    );
}

export default Climdes;
