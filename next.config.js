/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
    images: {
        loader: 'akamai',
        path: '',
      },    
}

module.exports = nextConfig