/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["static.mamikos.com", "images.rukita.co", "media.cove.sg"],
  },
};

export default nextConfig;
