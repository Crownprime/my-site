/* eslint-disable @typescript-eslint/no-var-requires */
// https://github.com/vercel/next.js/issues/25454#issuecomment-903513941
const withTM = require('next-transpile-modules')(['remark-html'])
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTM({
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  sassOptions: {
    prependData: `@import "@/styles/variables.scss";@import "@/styles/theme.scss";`,
  },
})

module.exports = nextConfig
