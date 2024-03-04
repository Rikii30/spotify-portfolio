const nextConfig = {
  output: 'standalone', // Change output to 'standalone' as per the allowed values
  distDir: 'dist',
  images: {
    domains: ['example.com'],
    deviceSizes: [320, 420, 768, 1024, 1200], // Optional: Specify device sizes for image optimization
    imageSizes: [16, 32, 48, 64, 96], // Optional: Specify image sizes for image optimization
    loader: 'default', // Optional: Specify custom image loader (e.g., 'imgix', 'cloudinary', 'akamai')
  },
  
  // Remove the experimental 'images' option if not needed
};

module.exports = nextConfig;
