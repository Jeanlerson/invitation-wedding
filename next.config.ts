import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // caso use imagens do Firebase
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // útil se tiver imagens do Google
      },
    ],
  },
};

export default nextConfig;
