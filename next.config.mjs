/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
     remotePatterns:[
      {
        protocol:"https",
        hostname:"www.technolife.ir",
        port:"",
        pathname:"/image/**"
      }
     ]
    },
  };
  
  module.exports = nextConfig;
  
  
  