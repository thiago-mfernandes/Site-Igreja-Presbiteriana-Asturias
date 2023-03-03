/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //no build, o next entende que somente as paginas com page sao page de fato
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
