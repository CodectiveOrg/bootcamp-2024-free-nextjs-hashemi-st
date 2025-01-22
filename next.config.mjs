/** @type {import('next').NextConfig}  */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.paziresh24.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
