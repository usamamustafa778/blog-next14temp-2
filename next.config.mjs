/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cheerup2.theme-sphere.com",
      },
      {
        protocol: "https",
        hostname: "zoya.qodeinteractive.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
