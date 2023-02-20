require('dotenv').config();

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  env: {
    SECRET_JWT: process.env.SECRET_JWT
  },
  publicRuntimeConfig: {
    SECRET_JWT: process.env.SECRET_JWT,
  },
}
module.exports =  nextConfig
