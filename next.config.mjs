/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_URL: "http://localhost:3002",
    JWT_KEY: "book_app_jwt",
  }
};

export default nextConfig;
