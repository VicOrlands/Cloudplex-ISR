/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    experimental: {
        optimizePackageImports: ["react-icons/*"]
    },
};

export default nextConfig;
