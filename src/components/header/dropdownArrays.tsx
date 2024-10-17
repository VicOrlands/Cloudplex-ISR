import { AiScanIcon, AwsManagedIcon, AwsMaturityIcon, BackupIcon, BlogsIcon, CaseStudyIcon, CloudMigrationIcon, CloudResourceIcon, CloudTrainingIcon, DataAnalyticsIcon, DevopsServiceIcon, EventsIcon, MicrosoftIcon, OmniCallCenterIcon, PressIcon, SecurityComplianceIcon, WenduIcon, WhitepaperIcon } from "./Icons";

type Dropdown = {
    icon: () => React.JSX.Element;
    name: string;
    description?: string;
    link: string;
}

export const solutions: Dropdown[] = [
    {
        icon: WenduIcon,
        name: "Wendu",
        description: "Insights for both developers and management to run a secured, efficient, lean, cost-optimized and reliable cloud.",
        link: "https://wendu.io/"
    },
    {
        icon: MicrosoftIcon,
        name: "Microsoft on AWS",
        description: "Seamlessly run Microsoft workloads on AWS, leveraging the power of cloud computing to achieve unmatched scalability, flexibility, and reliability. Uncover the full potential of your Microsoft applications with AWS's robust and tailored infrastructure support.",
        link: "/microsoft-on-aws"
    },
    {
        icon: BackupIcon,
        name: "Backup and Restore",
        description: "Prevent data loss from anywhere with CloudPlexo Cloud-Native Backup and Restore product.",
        link: "/backup-and-restore"
    },
    {
        icon: AwsManagedIcon,
        name: "AWS Managed Services",
        description: "Experience unparalleled scalability and reliability with AWS Managed service, a cloud service designed to simplify your cloud infrastructure management.",
        link: "/aws-managed-cloud"
    },
    {
        icon: AiScanIcon,
        name: "AI Scan",
        description: "360 Degree Approach Where We Analyse How Your Data Can Be Recycled To Be Beneficial To Your Business.",
        link: "/aws-partnership/data-analytics/"
    },
    {
        icon: AwsMaturityIcon,
        name: "AWS Maturity Services",
        description: "A transformative solution designed to propel your cloud operations towards enhanced efficiency, optimal performance, and strategic growth.",
        link: "/aws-maturity-service"
    },
    {
        icon: CloudMigrationIcon,
        name: "Cloud Migration",
        description: "Automates the coordination of large migrations to Amazon Web Services, including multiple servers, by automating the use of several tools",
        link: "/aws-partnership/cloud-migration"
    },
    {
        icon: CloudResourceIcon,
        name: "Cloud Resource Management",
        description: "Our company information, licensing information, terms, and privacy policy.",
        link: "/aws-partnership/cloud-resource-managament"
    },
    {
        icon: SecurityComplianceIcon,
        name: "Security Compliance",
        description: "Ensure the highest level of security with AWS Config, empowering you to proactively assess, audit, and monitor your infrastructure for compliance with industry standards, mitigating risks and ensuring a robust security posture.",
        link: "/aws-partnership/security-compliance"
    },
]

export const professional: Dropdown[] = [
    {
        icon: DataAnalyticsIcon,
        name: "Data Analytics",
        description: "With real-time data processing and clear visualizations, CloudPlexo enables you to make smart decisions that drive growth.",
        link: "/data-analytics"
    },
    {
        icon: CloudTrainingIcon,
        name: "Cloud Training",
        description: "Our highly experienced Professionals are recognised in the industry to have the highest-rated technical skills by employers",
        link: "/training"
    },
    {
        icon: AiScanIcon,
        name: "Database as a Service",
        description: "We provide tailored architecture design, migration, and optimization services to ensure robust, secure, and cost-effective database operations for your business.",
        link: "/database-as-a-service"
    },
    {
        icon: DevopsServiceIcon,
        name: "DevOps as a Service",
        description: "Streamline your software development lifecycle with CloudPlexo's DevOps solutions on the cloud.",
        link: "/devops-as-a-service"
    },
    {
        icon: OmniCallCenterIcon,
        name: "Omni-Channel Contact Center",
        description: "Cloud-based contact-centre service that makes it easy for any business to deliver better customer service at lower cost.",
        link: "/omni-channel-contact-center"
    }
]

export const resources: Dropdown[] = [
    {
        icon: EventsIcon,
        name: "Events",
        description: "Get updated on the most recent events in hosted & supported by us, concerning news, interviews, cutting-edge technologies, and valuable resources.",
        link: "/events"
    },
    {
        icon: BlogsIcon,
        name: "Blogs",
        description: "Get updated on the most recent developments in the industry, including news, interviews, cutting-edge technologies, and valuable resources.",
        link: "/blog"
    },
    {
        icon: PressIcon,
        name: "Press Releases",
        link: "/press-release"
    },
    {
        icon: WhitepaperIcon,
        name: "White-paper & Ebooks",
        link: "/whitepaper"
    },
    {
        icon: CaseStudyIcon,
        name: "Case studies",
        link: "/case-study"
    }
]