import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    output: "export",
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
};

export default withBundleAnalyzer(nextConfig);
