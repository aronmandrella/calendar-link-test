/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  assetPrefix: `${process.env.NEXT_PUBLIC_BASE_URL}`,
};

module.exports = nextConfig;
