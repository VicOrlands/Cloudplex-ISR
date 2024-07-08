import { awsservices } from '../awsArray';
import { notFound } from 'next/navigation';
import RDSReady from './rds/page';
import Lambda from './lambda/page';
import Ec2 from './awsEC2/page';
import Transfer from './awsTransfer/page';
import AWSDynamoDb from './awsDynamo/page';
import CloudFront from './awsCloudFront/page';
import CloudResouce from './cloudResouce/page';
import DataAnalytics from './dataAnalytics/page';
import CloudMigration from './cloudMigration/page';
import AWSWellArchitected from './wellArchitected/page';
import SecurityCompliance from './securityCompliance/page';

type PageProps = {
    params: {
        slug: string;
    };
};

type PathsProps = {
    url: string;
    comp: JSX.Element;
}

const paths: PathsProps[] = [
    {
        url: "aws-lambda-service",
        comp: <Lambda />
    },
    {
        url: "data-analytics",
        comp: <DataAnalytics />
    },
    {
        url: "rds-ready",
        comp: <RDSReady />
    },
    {
        url: "cloud-migration",
        comp: <CloudMigration />
    },
    {
        url: "aws-well-architected-framework-alignment",
        comp: <AWSWellArchitected />
    },
    {
        url: "aws-dynamo-db",
        comp: <AWSDynamoDb />
    },
    {
        url: "amazon-cloudfront-delivery",
        comp: <CloudFront />
    },
    {
        url: "cloud-resource-managament",
        comp: <CloudResouce />
    },
    {
        url: "security-compliance",
        comp: <SecurityCompliance />
    },
    {
        url: "aws-transfer-family",
        comp: <Transfer />
    },
    {
        url: "amazon-ec2",
        comp: <Ec2 />
    },
]

export async function generateStaticParams() {
    return awsservices.map(({ link }) => ({
        slug: link,
    }));
}

const AWSPage: React.FC<PageProps> = ({ params }) => {
    const { slug } = params
    const partner = awsservices.find(({ link }) => link === slug);

    if (!partner) notFound()

    const path = paths.find(({ url }) => url === slug);
    if (!path) notFound()

    return path.comp
};

export default AWSPage;
