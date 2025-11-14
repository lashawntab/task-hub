import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // This block customizes how `.svg` files are processed when using Turbopack.
    // - The rule matches all files ending with `.svg`.
    // - The `@svgr/webpack` loader transforms SVGs into React components.
    // - The `as: '*.js'` tells Next.js to treat the output as JavaScript (not images).
    //   This avoids Next.js attempting to extract static dimensions from SVGs, which
    //   can cause errors when importing them as React components.
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js', // Important: Prevents Next.js from trying to get dimensions
      },
    },
  },
 
};
export default nextConfig;
