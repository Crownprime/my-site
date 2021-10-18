/* eslint-disable @typescript-eslint/no-var-requires */
// https://github.com/vercel/next.js/issues/25454#issuecomment-903513941
const path = require('path')
const withTM = require('next-transpile-modules')(['remark-html'])
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTM({
  sassOptions: {
    // includePaths: [path.join(__dirname, 'styles/theme.scss')],
    prependData: `@import "styles/variables.scss";@import "styles/theme.scss";`,
  },
})

module.exports = nextConfig
