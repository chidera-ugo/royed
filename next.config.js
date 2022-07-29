/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "unsplash.com", "images.prismic.io"],
  },
  publicRuntimeConfig: {
    paystackKey: process.env.NEXT_APP_PAYSTACK_KEY,
  },
};

module.exports = nextConfig;
