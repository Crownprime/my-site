// https://github.com/vercel/next.js/issues/25454#issuecomment-903513941
const withTM = require('next-transpile-modules')(['remark-html'])
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTM()

module.exports = nextConfig
