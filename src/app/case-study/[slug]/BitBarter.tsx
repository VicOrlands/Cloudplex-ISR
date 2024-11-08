import logo from "@/assets/casestudies/logo.webp";
import bp from "@/assets/casestudies/bitbartercover.webp";
import landerImg from "@/assets/casestudies/AlarrtBg.webp";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";

export default function Bitbarter() {
    return (
        <>
            <section className={styles["gtb-pensions-page"]}>
                <h1>From Monolith to Microservices: BitBarter’s Journey to a Scalable Cloud Architecture</h1>

                <section className={styles["logo-images"]}>
                    <Image
                        src={bp}
                        alt="From Monolith to Microservices: BitBarter’s Journey to a Scalable Cloud Architecture"
                        className={styles["phastImg"]}
                    />

                    <Image
                        src={logo}
                        alt="From Monolith to Microservices: BitBarter’s Journey to a Scalable Cloud Architecture"
                    />
                </section>

                <section className={styles["main-body"]}>
                    <Image
                        src={landerImg}
                        alt="From Monolith to Microservices: BitBarter’s Journey to a Scalable Cloud Architecture"
                    />

                    <h2>About BitBarter:</h2>
                    <p>BitBarter is a digital service provider that connects users through a cryptocurrency-based barter system, allowing individuals and businesses to trade goods and services using digital assets. Through a dynamic digital asset marketplace, BitBarter bridges the gap between cryptocurrencies, fiat currencies, and digital assets, providing a seamless payment infrastructure across Africa and Asia.</p>
                    <p>Initially, BitBarter’s system was built on a monolithic application architecture, but as the company rapidly grew, it faced challenges in scaling its infrastructure to meet the demands of a larger audience.</p>
                    <p>To overcome these infrastructure challenges, BitBarter partnered with CloudPlexo, a leading cloud service provider and trusted AWS partner to modernize their system architecture. CloudPlexo’s solution involved transitioning BitBarter’s monolithic infrastructure to a more flexible and scalable microservices architecture using AWS cloud services.</p>

                    <h2>Challenges:</h2>
                    <ol>
                        <li>Cost Management: The company struggled with high operational costs, including over-provisioned and underutilized servers, leading to unnecessary increase in costs.
                        </li>
                        <li>Security Concerns: The monolithic architecture posed security challenges as well. Given that all components of the application were tightly coupled in a single codebase, a vulnerability in one part of the system could potentially expose the entire application to risk.</li>
                        <li>Scalability Issues: The monolithic setup was not designed for scalability, meaning that BitBarter's infrastructure could not dynamically scale based on changing traffic patterns or increasing user demand.</li>
                        <li>Lack of DevOps Expertise: BitBarter lacked the specialized DevOps skills and tools required to efficiently manage and optimize its cloud infrastructure.</li>
                    </ol>

                    <h2>Solutions:</h2>
                    <p>CloudPlexo worked with BitBarter to:</p>
                    <ol>
                        <li>Re-Architect and Deploy a Scalable Infrastructure: CloudPlexo redesigned BitBarter’s cloud infrastructure to ensure it could dynamically scale with user demand and the application could add more features as required.</li>
                        <li>Optimize Cloud Costs: One of the key successes was optimizing BitBarter's cloud expenses. CloudPlexo identified and eliminated redundant server instances, resized underutilized resources, and ensured the company's infrastructure only used what was necessary. This significantly reduced the company’s monthly cloud costs.</li>
                        <li>Improve Security and Performance: With better management of microservices and API security, CloudPlexo helped BitBarter strengthen the security layer of its infrastructure while enhancing overall system performance. Automated deployment processes were established to ensure efficient application delivery across different environments.</li>
                        <li>Implement Automated DevOps Practices: CloudPlexo’s solution involved automating a lot of processes to streamline operations.</li>
                    </ol>

                    <h2>AWS Services Used:</h2>
                    <ol></ol>
                    <li>Amazon EKS: To enable the platform to deploy and manage microservices efficiently. This allowed BitBarter to scale individual services independently.
                    </li>
                    <li>Application Load Balancers (ALBs): ALBs were implemented to improve traffic distribution across the microservices. The ALBs optimized server resources based on real-time traffic and usage patterns.</li>
                    <li>Amazon EC2 and ECR: EC2 instance configurations to better support performance needs and ECR for streamlined container management. This is to ensure consistency across environments and simplify version control.</li>
                    <li>Disaster Recovery: This is to increase platform resilience and minimise the risk of downtime during unexpected failures.</li>

                    <h2>Results:</h2>
                    <p>The collaboration between BitBarter and CloudPlexo led to several key improvements:</p>
                    <ul>
                        <li>Enhanced Scalability: BitBarter’s infrastructure became more responsive to varying traffic loads, with the ability to scale resources to meet user demands, ensuring a smooth experience for customers even during peak periods.</li>
                        <li>Cost Efficiency: The company significantly reduced its cloud spending. This helped BitBarter maintain a cost-effective platform while expanding its user base.</li>
                        <li>Improved Security: With better management of microservices and enhanced security measures, BitBarter’s infrastructure became more resilient, reducing the risk of downtime and data breaches.</li>
                        <li>Streamlined Deployment and Operations: Automated CI/CD pipelines improved deployment times and reduced human error. Development teams had better control over the infrastructure and access to the right tools, leading to faster innovation and smoother operational processes.</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>The transition from a monolithic to a modern microservice architecture enabled BitBarter to achieve better scalability, reduced operational costs, and an improved user experience. This resulted in handling growing traffic demands, streamlining its operations, and continuing to deliver a high-quality service to its users.</p>
                    <p>For businesses facing similar challenges like cost optimization, scalability, or managing complex infrastructure, CloudPlexo serves as your trusted partner. Just like BitBarter, having the right cloud infrastructure combined with expert guidance from CloudPlexo can transform these challenges into opportunities for growth, efficiency, and innovation.</p>
                </section>
            </section>

            <Footer />
        </>
    );
}