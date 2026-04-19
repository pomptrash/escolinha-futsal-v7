import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.js",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // Isso silencia o erro do Turbopack, permitindo que o Next use o Webpack
  // para processar o Service Worker do Serwist.
  webpack: (config) => {
    return config;
  },
};

export default withSerwist(nextConfig);