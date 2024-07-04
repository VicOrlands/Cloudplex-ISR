import { awsservices } from '../awsArray';
import { notFound } from 'next/navigation';
import Lambda from './lambda/page';
import DataAnalytics from './dataAnalytics/page';
import RDSReady from './rds/page';

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
    // {
    //     url: "cloud-migration",
    //     comp: <Lambda />
    // },
    // {
    //     url: "aws-well-architected-framework-alignment",
    //     comp: <Lambda />
    // },
    // {
    //     url: "https://wendu.io",
    //     comp: <Lambda />
    // },
    // {
    //     url: "aws-dynamo-db",
    //     comp: <Lambda />
    // },
    // {
    //     url: "amazon-cloudfront-delivery",
    //     comp: <Lambda />
    // },
    // {
    //     url: "cloud-resource-managament",
    //     comp: <Lambda />
    // },
    // {
    //     url: "security-compliance",
    //     comp: <Lambda />
    // },
    // {
    //     url: "aws-transfer-family",
    //     comp: <Lambda />
    // },
    // {
    //     url: "amazon-ec2",
    //     comp: <Lambda />
    // },
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
