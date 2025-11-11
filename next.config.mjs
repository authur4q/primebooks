/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add the hostnames you want to allow here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com', // Only add this if you MUST use Google search result URLs
      },
      {
        protocol: 'https',
        hostname: 'img.wattpad.com', // Replace with the actual image host if known
      },
      // You may need to add more hostnames based on your specific images
    ],
  },
}
export default nextConfig