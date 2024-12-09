/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    images: { unoptimized: true },
    compress: true,
    swcMinify: true,
    experimental: {
        optimizePackageImports: [
            "react-icons",
            "feather-icons-react",
            "react-phone-number-input"
        ],
    },
    async redirects() {
        return Object.entries(redirectsMap).map(([source, destination]) => ({
            source,
            destination,
            permanent: true,
        }))
    },
};

export default nextConfig;


const redirectsMap = {
    '/cloud-migration': '/aws-partnership/cloud-migration/',
    '/events/bit.ly/penops124/': '/events/penops-executive-workshop/',
    '/introduction-to-aws-cli-basic-commands-for-beginners': '/blog/introduction-to-aws-cli-basic-commands-for-beginners',
    '/aws-well-architected-framework-alignment': '/blog/aws-well-architected-framework-alignment',
    '/optimizing-cloud-costs-for-businesses-with-cloudplexo': '/blog/optimizing-cloud-costs-for-businesses-with-cloudplexo',
    '/why-build-on-the-cloud': '/blog/why-build-on-the-cloud',
    '/aws-service-limits-monitoring': '/blog/aws-service-limits-monitoring',
    '/the-benefits-of-building-a-cloud-native-company': '/blog/the-benefits-of-building-a-cloud-native-company',
    '/will-cloud-computing-rule-the-world': '/blog/will-cloud-computing-rule-the-world',
    '/founderslab': '/founders-lab/',
    '/webinar': '/events/',
    '/cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network': '/blog/cloudplexo-achieves-aws-isv-partner-status-in-aws-partner-network',
    '/cloud-storage': '/backup-and-restore/',
    '/how-does-the-cloud-enable-agile-digital-transformations': '/blog/how-does-the-cloud-enable-agile-digital-transformations',
    '/ways-companies-can-save-on-their-cloud-computing-costs': '/blog/ways-companies-can-save-on-their-cloud-computing-costs',
    '/how-secure-is-your-data': '/whitepaper/how-secure-is-your-data/',
    '/is-migrating-to-the-cloud-chasing-the-clouds': '/whitepaper/is-migrating-to-the-cloud-chasing-the-clouds',
    '/building-fullstack-app-with-react-and-aws-amplify-authentication-and-databases': '/blog/building-fullstack-app-with-react-and-aws-amplify-authentication-and-databases',
    '/can-SMEs-benefit-from-cloud-cost-management-tools': '/blog/can-SMEs-benefit-from-cloud-cost-management-tools',
    '/aws-cost-optimization-while-achieving-your-desired-business': '/blog/aws-cost-optimization-while-achieving-your-desired-business',
    '/rightsizing-recommendation-an-approach-to-save-on-your-aws-cost': '/blog/rightsizing-recommendation-an-approach-to-save-on-your-aws-cost',
    '/cprofessionalservices': '/aws-partnership/cloud-migration/',
    '/ProfessionalServices': '/aws-partnership/cloud-migration/',
    '/uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python': '/blog/uploading-large-files-upto-5tb-to-amazon-s3-using-boto3-in-python',
    '/cloud-management': '/aws-partnership/cloud-resource-managament/',
    '/aws-maturity-assessment/': '/aws-maturity-service/',
    '/aws-step-functions-a-practical-guide': '/blog/aws-step-functions-a-practical-guide',
    '/aws-sam-build-test-and-deploy-serveless-applications': '/blog/aws-sam-build-test-and-deploy-serveless-applications',
    '/video-detection-with-aws-rekognition': '/blog/video-detection-with-aws-rekognition/',
    '/page-terms': '/terms-of-service/',
    '/page-privacy': '/privacy-policy/',
    '/jaguar-and-land-rover-case-study': '/case-study/jaguar-and-land-rover-case-study/',
    '/inttix-case-study': '/case-study/inttix-case-study/',
    '/ilearncloud-case-study': '/case-study/ilearncloud-case-study/',
    '/cloudplexo-receives-aws-lambda-service-delivery-designation': '/blog/cloudplexo-receives-aws-lambda-service-delivery-designation/',
    '/case-study-in-the-edtech-sector': '/case-study/case-study-in-the-edtech-sector/',
    '/case-studies': '/case-study/',
}