/** @type {import('next').NextConfig} */
const nextConfig = {
  // 使用 SSG 静态站点生成
  // 如果需要静态导出，取消下面的注释
  // output: 'export',
  
  // 图片优化配置
  images: {
    // 如果需要使用 Next.js Image 组件，可以配置域名
    // domains: ['example.com'],
  },
  
  // 优化配置
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

