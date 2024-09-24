/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    // SERVER_URL: "http://localhost:3002",
    SERVER_URL: "https://book-project-ozgc.onrender.com",

    
    JWT_KEY: "book_app_jwt",
  }
};

export default nextConfig;
