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
      {
        protocol: "https",
        hostname: "casafreitas2.vteximg.com.br", // ✅ adicione este
      },
      {
        protocol: "https",
        hostname: "images.tcdn.com.br", // ✅ adicione este
      },
      {
        protocol: "https",
        hostname: "down-br.img.susercontent.com", // ✅ adicione este
      },
      {
        protocol: "https",
        hostname: "cdn.awsli.com.br", // ✅ adicione este
      },
      {
        protocol: "https",
        hostname: "http2.mlstatic.com", // ✅ adicione este
      },
      {
        protocol: "https",
        hostname: "www.havan.com.br", // ✅ adicione este
      },
      {
        protocol: "https",
        hostname: "imgs.extra.com.br", // ✅ adicione este
      },
      
    ],
  },
};

export default nextConfig;
