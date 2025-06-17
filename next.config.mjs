/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // 🔑 Enables static HTML export
  reactStrictMode: true,
  images: {
    unoptimized: true          // 🔑 Required if you're using <Image />
  },
  assetPrefix: './',           // 🪄 Fixes broken CSS/JS in static preview
};

export default nextConfig;
