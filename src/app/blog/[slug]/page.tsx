import { notFound } from 'next/navigation';
import { blogs } from '../array';
import BlogFiftyThree from './blogFiftyThree';
import BlogFiftyTwo from './blogFiftyTwo';
import BlogFiftyOne from './blogFiftyOne';
import BlogFifty from './blogFifty';
import BlogFortyNine from './blogFortyNine';
import BlogOne from './blogOne';


export async function generateStaticParams() {
    return blogs.map(({ link }) => ({
        slug: link || "404"
    }));
}

const paths = [
    {
        comp: <BlogFiftyThree />,
        url: "migrating-your-applications-to-the-cloud-the-7-rs-of-cloud-migration",
    },
    {
        comp: <BlogFiftyTwo />,
        url: "serverless-or-Server-aws-lambda-vs-amazon-ec2-for-cloud-computing",
    },
    {
        comp: <BlogFiftyOne />,
        url: "aws-browser-tools-and-extensions-to-enhance-your-experience",
    },
    {
        comp: <BlogFifty />,
        url: "building-an-email-subscription-and-broadcasting-system-with-react-and-aws-sns",
    },
    {
        comp: <BlogFortyNine />,
        url: "building-fullstack-app-with-react-and-aws-amplify-authentication-and-databases",
    },
    {
        comp: <BlogFortyNine />,
        url: "serverless-compute-comparison-aws-lambda-vs-azure-functions-vs-google-cloud-functions",
    },
    {
        comp: <BlogFortyNine />,
        url: "getting-started-with-dynamodb-a-practical-approach",
    },
    {
        comp: <BlogFortyNine />,
        url: "aws-step-functions-a-practical-guide",
    },
    {
        comp: <BlogFortyNine />,
        url: "how-to-deploy-and-host-your-web-app-on-aws-amplify",
    },
    {
        comp: <BlogFortyNine />,
        url: "uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python",
    },
    {
        comp: <BlogFortyNine />,
        url: "understanding-the-difference-between-aws-sns-and-sqs",
    },
    {
        comp: <BlogFortyNine />,
        url: "uploading-and-downloading-files-from-amazon-sw3-using-boto3",
    },
    {
        comp: <BlogFortyNine />,
        url: "building-a-basic-web-application-on-aws",
    },
    {
        comp: <BlogFortyNine />,
        url: "introduction-to-aws-cli-basic-commands-for-beginners",
    },
    {
        comp: <BlogFortyNine />,
        url: "aws-comprehend-and-its-role-in-nlp",
    },
    {
        comp: <BlogFortyNine />,
        url: "unlocking-the-power-of-aws-managed-cloud",
    },
    {
        comp: <BlogFortyNine />,
        url: "strategies-to-optimizing-aws-costs-for-business-efficiency",
    },
    {
        comp: <BlogFortyNine />,
        url: "optimizing-cloud-costs-for-businesses-with-cloudplexo",
    },
    {
        comp: <BlogFortyNine />,
        url: "maximizing-cloud-benefits-for-businesses",
    },
    {
        comp: <BlogFortyNine />,
        url: "effective-monitoring-of-aws-service-limits",
    },
    {
        comp: <BlogFortyNine />,
        url: "designing-well-architected-aws-solutions",
    },
    {
        comp: <BlogFortyNine />,
        url: "unlocking-efficiency-and-innovation-with-cloudplexo"
    },
    {
        comp: <BlogFortyNine />,
        url: "best-practices-to-ensuring-data-resilience-with-cloud-native-backup"
    },
    {
        comp: <BlogFortyNine />,
        url: "best-practices-building-scalable-apps-with-serverless-architecture"
    },
    {
        comp: <BlogFortyNine />,
        url: "strategies-to-achieving-business-agility-with-cloud-native-culture"
    },
    {
        comp: <BlogFortyNine />,
        url: "advanced-document-processing-with-aws-textract"
    },
    {
        comp: <BlogFortyNine />,
        url: "cloudplexo-receives-aws-lambda-service-delivery-designation"
    },
    {
        comp: <BlogFortyNine />,
        url: "amazon-api-gateway-service-delivery-enhancing-efficiency-and-connectivity"
    },
    {
        comp: <BlogFortyNine />,
        url: "a-beginner's-guide-to-aws-fargate-and-ec2"
    },
    {
        comp: <BlogFortyNine />,
        url: "hands-on-with-aws-comprehend"
    },
    {
        comp: <BlogFortyNine />,
        url: "hands-on-with-aws-transcribe"
    },
    {
        comp: <BlogFortyNine />,
        url: "hands-on-aws-polly"
    },
    {
        comp: <BlogFortyNine />,
        url: "cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws"
    },
    {
        comp: <BlogFortyNine />,
        url: "unravelling-cloud-billing-solutions"
    },
    {
        comp: <BlogFortyNine />,
        url: "continuous-deployment-using-github-actions"
    },
    {
        comp: <BlogFortyNine />,
        url: "10-aws-services"
    },
    {
        comp: <BlogFortyNine />,
        url: "video-detection-with-aws-rekognition"
    },
    {
        comp: <BlogFortyNine />,
        url: "aws-sam-build-test-and-deploy-serveless-applications"
    },
    {
        comp: <BlogFortyNine />,
        url: "aws-lambda-introduction-to-writing-serverless-applications"
    },
    {
        comp: <BlogFortyNine />,
        url: "what-cloud-optimisation-is-and-why-it-matters"
    },
    {
        comp: <BlogFortyNine />,
        url: "how-does-the-cloud-enable-agile-digital-transformations?"
    },
    {
        comp: <BlogFortyNine />,
        url: "cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network"
    },
    {
        comp: <BlogFortyNine />,
        url: "ways-companies-can-save-on-their-cloud-computing-costs"
    },
    {
        comp: <BlogFortyNine />,
        url: "can-smes-benefit-from-cloud-cost-management-tools"
    },
    {
        comp: <BlogFortyNine />,
        url: "the-benefits-of-building-a-cloud-native-company"
    },
    {
        comp: <BlogFortyNine />,
        url: "aws-well-architected-framework-alignment"
    },
    {
        comp: <BlogFortyNine />,
        url: "aws-service-limits-monitoring"
    },
    {
        comp: <BlogFortyNine />,
        url: "aws-cost-optimization-while-achieving-your-desired-business"
    },
    {
        comp: <BlogFortyNine />,
        url: "rightsizing-recommendation-an-approach-to-save-on-your-aws-cost"
    },
    {
        comp: <BlogFortyNine />,
        url: "will-cloud-computing-rule-the-world"
    },
    {
        comp: <BlogOne />,
        url: "why-build-on-the-cloud"
    }
];

const Blog = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const path = paths.find(({ url }) => url === slug);

    if (!path) notFound()

    return path.comp
};

export default Blog;
