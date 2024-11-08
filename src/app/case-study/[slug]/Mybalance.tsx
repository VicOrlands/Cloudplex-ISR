import logo from "@/assets/casestudies/logo.webp";
import bp from "@/assets/casestudies/mybalancecover.webp";
import landerImg from "@/assets/casestudies/BillyronkBg.webp";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";

const MyBalance = () => {
    return (
        <>
            <section className={styles["gtb-pensions-page"]}>
                <h1>Re-Architecting MyBalance’s Infrastructure for Cost Efficiency and Downtime Mitigation</h1>

                <section className={styles["logo-images"]}>
                    <Image
                        src={bp}
                        alt="Re-Architecting MyBalance’s Infrastructure for Cost Efficiency and Downtime Mitigation"
                        className={styles["phastImg"]}
                    />

                    <Image
                        src={logo}
                        alt="Re-Architecting MyBalance’s Infrastructure for Cost Efficiency and Downtime Mitigation"
                    />
                </section>

                <section className={styles["main-body"]}>
                    <Image
                        src={landerImg}
                        alt="Re-Architecting MyBalance’s Infrastructure for Cost Efficiency and Downtime Mitigation"
                    />

                    <h2>Overview</h2>
                    <p>MyBalance offers digital tools to help individuals and businesses manage their finances. The platform enables users to track spending, set budgets, and make informed financial decisions. The company’s services cater to a wide range of users, from everyday consumers to small and medium-sized enterprises, enabling them to gain greater control over their financial health.</p>
                    <p>As the user base grew, the platform started facing challenges in managing increasing traffic, which led to system downtime and negatively impacted user experience.</p>
                    <p>To address these issues, MyBalance partnered with CloudPlexo, a cloud consulting company, to redesign their infrastructure for better performance, scalability, and cost-efficiency.</p>

                    <h2>Problem:</h2>
                    <p>MyBalance's existing infrastructure struggled to handle sudden spikes in traffic, causing high CPU usage and system crashes. This downtime disrupted access to the platform, leading to poor user experiences and financial risks.</p>

                    <h2>Solution:</h2>
                    <p>CloudPlexo helped MyBalance redesign their platform using a dynamic auto-scaling solution. The new infrastructure automatically adjusts the number of servers based on real-time traffic needs:</p>
                    <ul>
                        <li>During periods of high demand, the system automatically added more servers to handle the load.</li>
                        <li>When traffic decreased, the system scaled down by reducing the number of active servers, saving costs during quieter times.</li>
                    </ul>
                    <br />
                    <br />

                    <h2>Solution</h2>
                    <p>
                        The primary goal of this project is to develop a highly optimized
                        cloud infrastructure on AWS, significantly boosting the
                        capabilities of the Alarrt platform.
                    </p>

                    <h2>Architectural Changes:</h2>
                    <p>With CloudPlexo’s guidance, MyBalance adopted a range of AWS services and DevOps practices:</p>
                    <ul>
                        <li>AWS CodeDeploy: Automated app deployments, ensuring smooth and reliable updates.</li>
                        <li>GitHub Actions: Enabled continuous integration and deployment (CI/CD) for faster updates.</li>
                        <li>Amazon S3: Stored deployment artifacts securely.</li>
                        <li>Amazon EC2: Provided scalable hosting for MyBalance’s applications.</li>
                        <li>Elastic Load Balancer (ELB): Distributed incoming traffic evenly to avoid overloading any individual server.</li>
                        <li>Amazon VPC: Enhanced network security and isolation.</li>
                        <li>Amazon ECR: Managed container images for consistent application deployment.</li>
                    </ul>
                    <br />
                    <br />

                    <h2>Benefits</h2>
                    <ol>
                        <li>Scalability: The auto-scaling system allowed MyBalance to adjust to varying traffic loads and maintain a smooth user experience during peak times.
                        </li>
                        <li>Reduced Downtime: The new infrastructure significantly decreased system outages, improving reliability and user trust.</li>
                        <li>Cost Efficiency: The system automatically scaled down during low-traffic periods, cutting unnecessary costs.</li>
                        <li>Faster Deployment: Automation of deployment processes reduced manual intervention and sped up updates.</li>
                        <li>Improved Performance: Load balancing and containerized deployment improved system performance and resource utilization.</li>
                    </ol>
                    <br />
                    <br />
                    <p>By working with CloudPlexo to re-architect its infrastructure, MyBalance improved cost management, minimized downtime, and enhanced the user experience—leading to greater customer satisfaction and long-term operational success.</p>
                </section>
            </section>

            <Footer />
        </>
    );
}

export default MyBalance;
