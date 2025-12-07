/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Explicitly configure Turbopack to be disabled for production builds
  // This ensures webpack is used instead
  ...(process.env.NODE_ENV === 'production' && {
    experimental: {
      turbo: undefined,
    },
  }),
};

export default nextConfig; 