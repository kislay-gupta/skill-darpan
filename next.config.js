/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'camo.githubusercontent.com',
          },


          {
            protocol: 'https',
            hostname: 'skilldarpan.com',
            port: '',
            pathname: '/public/uploads/**',
          },
        ],
      },

}

module.exports = nextConfig
