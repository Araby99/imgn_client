/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER: "http://localhost:8000"
  }
}

module.exports = nextConfig
