/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["static.mamikos.com", "images.rukita.co", "media.cove.sg"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.mamikos.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "images.rukita.co",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "media.cove.sg",
        pathname: "**"
      },
    ]
  },
};

export default nextConfig;
