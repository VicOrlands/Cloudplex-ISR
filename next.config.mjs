/** @type {import('next').NextConfig} */

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

export default nextConfig;
