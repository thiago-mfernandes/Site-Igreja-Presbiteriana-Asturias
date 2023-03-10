/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //no build, o next entende que somente as paginas com page sao page de fato
  compiler: {
    styledComponents: true,
  },
  webpack: (config, options) =>
  {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
    })

    return config
  }
}

module.exports = nextConfig
