/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig,{
  async headers(){
return [
  {
    source:`/:path*`,
    headers:{
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    }
  }
]
  },
env : {

}}
