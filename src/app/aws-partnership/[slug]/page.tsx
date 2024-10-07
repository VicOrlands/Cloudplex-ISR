import type { Metadata } from "next";
import { awsservices } from "../awsArray";
import { notFound } from "next/navigation";
import RDSReady from "./rds/page";
import Lambda from "./lambda/page";
import Ec2 from "./awsEc2/page";
import Transfer from "./transfer/page";
import AWSDynamoDb from "./dynamoDb/page";
import CloudFront from "./cloudfront/page";
import CloudResource from "./cloudResource/page";
import DataAnalytics from "./dataAnalytics/page";
import CloudMigration from "./cloudMigration/page";
import AWSWellArchitected from "./wellArchitected/page";
import SecurityCompliance from "./securityCompliance/page";

type PageProps = {
  params: {
    slug: string;
  };
};

const paths = [
  {
    url: "aws-lambda-service",
    comp: <Lambda />,
  },
  {
    url: "data-analytics",
    comp: <DataAnalytics />,
  },
  {
    url: "rds-ready",
    comp: <RDSReady />,
  },
  {
    url: "cloud-migration",
    comp: <CloudMigration />,
  },
  {
    url: "aws-well-architected-framework-alignment",
    comp: <AWSWellArchitected />,
  },
  {
    url: "aws-dynamo-db",
    comp: <AWSDynamoDb />,
  },
  {
    url: "amazon-cloudfront-delivery",
    comp: <CloudFront />,
  },
  {
    url: "cloud-resource-managament",
    comp: <CloudResource />,
  },
  {
    url: "security-compliance",
    comp: <SecurityCompliance />,
  },
  {
    url: "aws-transfer-family",
    comp: <Transfer />,
  },
  {
    url: "amazon-ec2",
    comp: <Ec2 />,
  },
];

export async function generateStaticParams() {
  return awsservices.map(({ link }) => ({
    slug: link || "404",
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;
  const metadata = awsservices.find(({ link }) => link === slug);

  if (!metadata) {
    return {
      title: `Page Not Found - CloudPlexo`,
      description: `The page you're looking for does not exist.`,
    };
  }

  return {
    title:
      metadata.metadataConfig?.title ||
      `${
        slug.charAt(0).toUpperCase() + slug.slice(1).replaceAll("-", " ")
      } | CloudPlexo Services`,
    description:
      metadata.metadataConfig?.description ||
      `Discover in-depth insights on ${slug} with CloudPlexo's expert services. Enhance your knowledge and solutions.`,
    keywords: metadata.metadataConfig?.keywords || [
      slug,
      "cloud solutions",
      "expert services",
    ],
    alternates: {
      canonical:
        metadata.metadataConfig?.canonical ||
        `https://www.cloudplexo.com/aws-partnership/${slug}`,
    },
  };
}

const AWSPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;
  const path = paths.find(({ url }) => url === slug);
  if (!path) notFound();

  return path.comp;
};

export default AWSPage;
