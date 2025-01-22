// /** @type {import('next').NextConfig}  */
// const nextConfig = {
//   images: {
//     domains: ["cdn.paziresh24.com"],
//   },
// };

// export default nextConfig;

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
