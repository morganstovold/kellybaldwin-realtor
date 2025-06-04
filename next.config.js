import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti@^1 we can import .ts files :)
jiti.import("./app/env.ts");

/** @type {import('next').NextConfig} */
const config = {
    experimental: {
        scrollRestoration: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: "barimedia.rapmls.com",
            },
            {
                hostname: "media.mlslmedia.com",
            }
        ]
    }
};

export default config;
 