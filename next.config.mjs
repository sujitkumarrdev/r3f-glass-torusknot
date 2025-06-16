/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/i,
      use: ['raw-loader'],
    });
    return config;
  },
};

export default nextConfig;
