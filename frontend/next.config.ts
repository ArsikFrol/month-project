import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['toughly-laureate-pheasant.cloudpub.ru'],
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;
