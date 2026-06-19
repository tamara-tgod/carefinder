import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   allowedDevOrigins: ['10.215.141.177', '192.168.100.133'],
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ]
    }
    
};

export default nextConfig;
