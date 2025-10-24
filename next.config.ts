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
        hostname: "casafreitas2.vteximg.com.br",
      },
      {
        protocol: "https",
        hostname: "images.tcdn.com.br",
      },
      {
        protocol: "https",
        hostname: "down-br.img.susercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.awsli.com.br",
      },
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.havan.com.br",
      },
      {
        protocol: "https",
        hostname: "imgs.extra.com.br",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "cdn.vnda.com.br",
      },
      {
        protocol: "https",
        hostname: "fernet.vteximg.com.br",
      },
      {
        protocol: "https",
        hostname: "cdn.leroymerlin.com.br",
      },
      {
        protocol: "https",
        hostname: "imgs.casasbahia.com.br",
      },
      {
        protocol: "https",
        hostname: "reidacutelaria.vtexassets.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn3.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn1.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
