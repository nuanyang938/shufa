/**
 * 应用常量配置
 */

export const SITE_CONFIG = {
  name: '子竹轩',
  description: '传承经典，品味书法之美',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;

export const ROUTES = {
  home: '/',
  blog: '/blog',
  about: '/about',
  gallery: '/gallery',
} as const;
