

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.wattpad.com',
      },
    
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com', 
      },
      {
        protocol: 'https',
     
        hostname: 'm.media-amazon.com', 
      },
      {
        protocol: 'https',
        hostname: 'prodimage.images-bn.com', 
      },
      {
        protocol: 'https',
        hostname: 'cdn.bookbub.com',
      },
      {
        protocol: 'https',
        hostname: 'images.randomhouse.com', 
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
    
    ],
  },

};

export default nextConfig;
