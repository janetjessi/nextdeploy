/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images-intl.prod.aws.idp-connect.com','images-intl.aws.test.idp-connect.com','images-intl.aws.dev.idp-connect.com'], // Add the domain here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-intl.aws.dev.idp-connect.com',
        port: '',
        pathname: '/new-hci-bucket/**',
      },
    ],
  },
};

export default nextConfig;


