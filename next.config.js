const nextConfig = {
  output: 'standalone', // Change output to 'standalone' as per the allowed values
  distDir: 'dist',
  images:{
    unoptimized: true,
  },
  // Remove the experimental 'images' option if not needed
};

module.exports = nextConfig;
