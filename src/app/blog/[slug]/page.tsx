import { notFound } from 'next/navigation';
import { blogs } from '../array';
import BlogFiftyThree from './blogFiftyThree';
import BlogFiftyTwo from './blogFiftyTwo';
import BlogFiftyOne from './blogFiftyOne';
import BlogFifty from './blogFifty';
import BlogFortyNine from './blogFortyNine';
import BlogOne from './blogOne';
import BlogEight from './blogEight';
import BlogEighteen from './blogEighteen';
import BlogEleven from './blogEleven';
import BlogFifteen from './blogFifteen';
import BlogFive from './blogFive';
import BlogTwo from './blogTwo';
import BlogThree from './blogThree';
import BlogForty from './blogForty';
import BlogFortyEight from './blogFortyEight';
import BlogFortyFive from './blogFortyFive';
import BlogFortyFour from './blogFortyFour';
import BlogFortyOne from './blogFortyOne';
import BlogFortySeven from './blogFortySeven';
import BlogFortySix from './blogFortySix';
import PageBlogFortyThree from './blogFortyThree';
import BlogFortyTwo from './blogFourtyTwo';
import BlogNine from './blogNine';
import BlogNineteen from './blogNineteen';
import BlogSeven from './blogSeven';
import BlogSeventeen from './blogSeventeen';
import BlogSix from './blogSix';
import BlogSixteen from './blogSixteen';
import BlogTen from './blogTen';
import BlogThirteen from './blogThirteen';
import BlogThirty from './blogThirty';
import BlogThirtyEight from './blogThirtyEight';
import BlogThirtyFive from './blogThirtyFive';
import BlogThirtySeven from './blogThirtySeven';
import BlogThirtySix from './blogThirtySix';
import BlogThirtyFour from './blogThirtyfour';
import BlogThirtyNine from './blogThirtyNine';
import BlogThirtyOne from './blogThirtyone';
import BlogThirtyTwo from './blogThirtytwo';
import BlogThirtyThree from './blogThirtyThree';
import BlogTwelve from './blogTwelve';
import BlogTwenty from './blogTwenty';
import BlogTwentyEight from './blogTwentyeight';
import BlogTwentyFive from './blogTwentyfive';
import BlogTwentyFour from './blogTwentyfour';
import BlogTwentyNine from './blogTwentynine';
import BlogTwentySeven from './blogTwentyseven';
import BlogTwentySix from './blogTwentysix';
import BlogTwentyOne from './blogTwentyone';
import BlogTwentyThree from './blogTwentythree';
import BlogTwentyTwo from './blogTwentytwo';
import BlogFour from './blogFour';


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
        comp: <BlogFortyEight />,
        url: "serverless-compute-comparison-aws-lambda-vs-azure-functions-vs-google-cloud-functions",
    },
    {
        comp: <BlogFortySeven />,
        url: "getting-started-with-dynamodb-a-practical-approach",
    },
    {
        comp: <BlogFortySix />,
        url: "aws-step-functions-a-practical-guide",
    },
    {
        comp: <BlogFortyFive />,
        url: "how-to-deploy-and-host-your-web-app-on-aws-amplify",
    },
    {
        comp: <BlogFortyFour />,
        url: "uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python",
    },
    {
        comp: <PageBlogFortyThree />,
        url: "understanding-the-difference-between-aws-sns-and-sqs",
    },
    {
        comp: <BlogFortyTwo />,
        url: "uploading-and-downloading-files-from-amazon-sw3-using-boto3",
    },
    {
        comp: <BlogFortyOne />,
        url: "building-a-basic-web-application-on-aws",
    },
    {
        comp: <BlogForty />,
        url: "introduction-to-aws-cli-basic-commands-for-beginners",
    },
    {
        comp: <BlogThirtyNine />,
        url: "aws-comprehend-and-its-role-in-nlp",
    },
    {
        comp: <BlogThirtyEight />,
        url: "unlocking-the-power-of-aws-managed-cloud",
    },
    {
        comp: <BlogThirtySeven />,
        url: "strategies-to-optimizing-aws-costs-for-business-efficiency",
    },
    {
        comp: <BlogThirtySix />,
        url: "optimizing-cloud-costs-for-businesses-with-cloudplexo",
    },
    {
        comp: <BlogThirtyFive />,
        url: "maximizing-cloud-benefits-for-businesses",
    },
    {
        comp: <BlogThirtyFour />,
        url: "effective-monitoring-of-aws-service-limits",
    },
    {
        comp: <BlogThirtyThree />,
        url: "designing-well-architected-aws-solutions",
    },
    {
        comp: <BlogThirtyTwo />,
        url: "unlocking-efficiency-and-innovation-with-cloudplexo"
    },
    {
        comp: <BlogThirtyOne />,
        url: "best-practices-to-ensuring-data-resilience-with-cloud-native-backup"
    },
    {
        comp: <BlogThirty />,
        url: "best-practices-building-scalable-apps-with-serverless-architecture"
    },
    {
        comp: <BlogTwentyNine />,
        url: "strategies-to-achieving-business-agility-with-cloud-native-culture"
    },
    {
        comp: <BlogTwentyEight />,
        url: "advanced-document-processing-with-aws-textract"
    },
    {
        comp: <BlogTwentySeven />,
        url: "cloudplexo-receives-aws-lambda-service-delivery-designation"
    },
    {
        comp: <BlogTwentySix />,
        url: "amazon-api-gateway-service-delivery-enhancing-efficiency-and-connectivity"
    },
    {
        comp: <BlogTwentyFive />,
        url: "a-beginner's-guide-to-aws-fargate-and-ec2"
    },
    {
        comp: <BlogTwentyFour />,
        url: "hands-on-aws-polly"
    },
    {
        comp: <BlogTwentyThree />,
        url: "hands-on-with-aws-transcribe"
    },
    {
        comp: <BlogTwentyTwo />,
        url: "hands-on-with-aws-comprehend"
    },
    {
        comp: <BlogTwentyOne />,
        url: "cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws"
    },
    {
        comp: <BlogTwenty />,
        url: "unravelling-cloud-billing-solutions"
    },
    {
        comp: <BlogNineteen />,
        url: "continuous-deployment-using-github-actions"
    },
    {
        comp: <BlogEighteen />,
        url: "10-aws-services"
    },
    {
        comp: <BlogSeventeen />,
        url: "video-detection-with-aws-rekognition"
    },
    {
        comp: <BlogSixteen />,
        url: "aws-sam-build-test-and-deploy-serveless-applications"
    },
    {
        comp: <BlogFifteen />,
        url: "aws-lambda-introduction-to-writing-serverless-applications"
    },
    {
        comp: <BlogThirteen />,
        url: "what-cloud-optimisation-is-and-why-it-matters"
    },
    {
        comp: <BlogTwelve />,
        url: "why-build-on-the-cloud"
    },
    {
        comp: <BlogEleven />,
        url: "will-cloud-computing-rule-the-world"
    },
    {
        comp: <BlogTen />,
        url: "digitization-how-does-the-cloud-enable-agile-digital-transformations"
    },
    {
        comp: <BlogNine />,
        url: "rightsizing-recommendation-an-approach-to-save-on-your-aws-cost"
    },
    {
        comp: <BlogEight />,
        url: "aws-cost-optimization-while-achieving-your-desired-business"
    },
    {
        comp: <BlogSeven />,
        url: "aws-service-limits-monitoring"
    },
    {
        comp: <BlogSix />,
        url: "aws-well-architected-framework-alignment"
    },
    {
        comp: <BlogFive />,
        url: "the-benefits-of-building-a-cloud-native-company"
    },
    {
        comp: <BlogThree />,
        url: "can-smes-benefit-from-cloud-cost-management-tools"
    },
    {
        comp: <BlogTwo />,
        url: "ways-companies-can-save-on-their-cloud-computing-costs"
    },
    {
        comp: <BlogOne />,
        url: "cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network"
    },
    {
        comp: <BlogFour />,
        url: "moving-successfully-to-the-amazon-cloud"
    },
];

const Blog = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const path = paths.find(({ url }) => url === slug);

    if (!path) notFound()

    return path.comp
};

export default Blog;
