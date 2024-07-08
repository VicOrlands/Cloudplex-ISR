import Link from "next/link";
import Image from "next/image";
import Partners from "@/components/partners/Partners";
import styles from "../aws-managed-cloud/styles.module.css"

import heroImage from "@/assets/solutions/hero.png";
import heroImage2 from "@/assets/solutions/hero2.png";
import image1 from "@/assets/solutions/image1.png";
import image2 from "@/assets/solutions/image2.png";
import image3 from "@/assets/solutions/image3.png";
import image4 from "@/assets/solutions/image4.png";
import image5 from "@/assets/solutions/image5.png";
import image6 from "@/assets/solutions/image6.png";

export default function DevOps() {
    const devopsSolution = [
        {
            image: image1,
            title: "Continuous Integration and Delivery (CI/CD)",
            desc: "With CI/CD, you can automate the process of building, testing, and deploying code changes, which can save you time, reduce errors, and improve the quality of your applications. Our cloud-based platform makes it easy to implement and scale CI/CD for your organization, so you can focus on delivering value to your customers.",
        },
        {
            image: image2,
            title: "DevOps Consulting Services",
            desc: "Whether you're just starting to adopt DevOps practices or looking to optimize your existing workflows, our experienced consultants can provide the guidance and support you need to succeed. By leveraging industry best practices and proven methodologies, we can help you streamline your software delivery process, reduce costs, and improve collaboration and communication among your teams.",
        },
        {
            image: image3,
            title: "Cloud Infrastructure Design",
            desc: "With so many options and configurations available, it can be difficult to determine the best approach. Our experienced team can help you design and implement a cloud infrastructure that is tailored to your specific requirements, while also maximizing efficiency, scalability, and security. We can provide guidance on choosing the right cloud platform, designing your architecture, selecting appropriate services, and integrating with your existing systems.",
        },
        {
            image: image4,
            title: "Kubernetes Migration & Clusters",
            desc: "We can help you migrate your applications to Kubernetes clusters with minimal disruption and maximum efficiency. We can provide guidance on cluster architecture, security, networking, and storage, as well as help you optimize performance and scalability. With our help, you can take advantage of the benefits of Kubernetes, such as improved resource utilization, greater flexibility, and easier deployment and management of your applications.",
        },
        {
            image: image5,
            title: "Infrastructure as Code (IaC)",
            desc: "A powerful approach to managing your IT infrastructure that allows you to treat your infrastructure as software. With IaC, you can define your infrastructure using code, which can then be version controlled, tested, and deployed just like any other software application. We can provide guidance on choosing the right tools and frameworks, designing your infrastructure code, and integrating IaC with your existing processes and tools. With our help, you can enjoy the benefits of IaC, such as faster deployment times, improved consistency, and easier management of your infrastructure at scale.",
        },
        {
            image: image6,
            title: "Logging and Observability",
            desc: "Our logging and observability consulting services can help you design and implement an effective logging and observability strategy that meets your organization's unique needs. We can provide guidance on choosing the right tools and technologies, designing your logging and monitoring infrastructure, and integrating observability into your development and operations workflows. With our help, you can gain deep insights into your systems, troubleshoot issues faster, and optimize the performance of your applications.",
        },
    ];

    //   <SEO
    //   title="CloudPlexo DevOps as a Service - Streamline Your Software Development Lifecycle"
    //   description="Discover CloudPlexo's cloud-based DevOps solutions, including CI/CD, consulting, cloud infrastructure design, Kubernetes migration, Infrastructure as Code (IaC), and logging/observability services"
    //   keywords="DevOps as a Service, Cloud-Based DevOps, DevOps Solutions, CI/CD, DevOps Consulting, Cloud Infrastructure Design, Kubernetes Migration, Infrastructure as Code (IaC), Logging and Observability"
    // />

    return (
        <section className={styles["solutions"]}>
            <div className={styles["hero"]}>
                <div>
                    <h1>DevOps As a Service</h1>
                    <p>
                        Streamline your software development lifecycle with
                        CloudPlexo's DevOps solutions on the cloud.
                    </p>

                    <div className={styles["hero-button"]}>
                        <Link href="/contact-us">
                            Contact Sales
                        </Link>

                        <Link href="#devops-solutions">
                            Learn More
                        </Link>
                    </div>
                </div>

                <Image
                    src={heroImage}
                    alt="CloudPlexo DevOps as a Service - Streamline Your Software Development Lifecycle"
                />
            </div>

            <Partners />

            <div className={styles["solutions-list"]} id="devops-solutions">
                <h3>
                    Our Cloud-Based DevOps Solutions Includes
                </h3>

                {devopsSolution.map((solution, key) => (
                    <div className={styles["service-row"]} key={key}>
                        <div>
                            <Image
                                src={solution.image}
                                alt={solution.title}
                            />
                            <h4>{solution.title}</h4>
                        </div>

                        <p>{solution.desc}</p>
                    </div>
                ))}
            </div>

            <div>
                <div>
                    <Image
                        src={heroImage2}
                        alt="Why Choose Us"
                    />

                    <div>
                        <h3>Why Choose Us?</h3>
                        <p>
                            We focus on delivering tangible results that align with your
                            business objectives. We work closely with you to understand
                            your unique needs, challenges, and goals, and develop
                            customized solutions that meet your specific requirements.
                        </p>

                        <Link href="/contact-us">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
