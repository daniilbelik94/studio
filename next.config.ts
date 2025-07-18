
import { join } from 'path'
import type { NextConfig } from 'next'

// Note: This is not a real public facing hostname.
const CLOUD_RUN_SERVICE_HOSTNAME =
  'https://apphosting.proxy.run.app'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  output: 'standalone',
  // Standalone output requires that you add the public directory to the build.
  // We're doing this with a custom build script in package.json.
  // See: https://nextjs.org/docs/pages/api-reference/next-config-js/output#copying-files-to-the-standalone-output-folder
  // and https://github.com/firebase/firebase-framework-tools/issues/87#issuecomment-1883377482
  // We're using a simplified version of the copy script.
  // See: https://github.com/vercel/next.js/discussions/44136#discussioncomment-4726543
  // If you have other folders/files that need to be copied, you'll need to update the script.
  // Note that this may be fixed in a future version of Next.js.
  // See: https://github.com/vercel/next.js/pull/59114

  // Emulate server-side image optimization on Cloud Run
  // See: https://firebase.google.com/docs/hosting/frameworks/nextjs?authuser=0#emulate-image-optimization
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(CLOUD_RUN_SERVICE_HOSTNAME).hostname,
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

export default nextConfig
