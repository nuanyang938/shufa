# 项目结构说明

## 目录结构

```
ablog/
├── app/                          # Next.js App Router 目录
│   ├── layout.tsx               # 根布局
│   ├── page.tsx                 # 首页
│   ├── globals.css              # 全局样式（导入 static/style.css）
│   ├── about/                   # 关于页面
│   │   └── page.tsx
│   └── blog/                    # 博客路由
│       ├── page.tsx             # 博客列表页 (/blog)
│       └── [slug]/              # 动态路由
│           └── page.tsx         # 博客详情页 (/blog/[slug])
│
├── components/                   # React 组件
│   ├── Header.tsx               # 头部导航组件
│   ├── Footer.tsx               # 页脚组件
│   ├── Sidebar.tsx              # 侧边栏组件（首页使用）
│   └── Layout.tsx               # 布局组件（统一管理 Header/Footer/Sidebar）
│
├── content/                      # 内容目录
│   └── posts/                   # Markdown 文章存放目录
│       ├── 书法艺术的魅力与传承.md
│       ├── 楷书入门指南.md
│       ├── 王羲之兰亭序的艺术价值.md
│       ├── 书法与修身养性.md
│       └── 隶书的演变与艺术特色.md
│
├── lib/                          # 工具函数库
│   ├── posts.ts                 # 文章读取和解析模块
│   ├── constants.ts             # 常量配置
│   └── gallery.ts               # 作品图片列表生成
│
├── types/                        # TypeScript 类型定义
│   └── index.ts                 # 类型定义文件
│
├── public/                       # Next.js 公共资源目录
│   ├── static/                  # 静态样式与图像
│   │   ├── style.css
│   │   └── images/
│   └── gallery/                 # 画廊图片
│
├── package.json                 # 项目配置和依赖
├── tsconfig.json                # TypeScript 配置
├── next.config.js               # Next.js 配置
├── .gitignore                   # Git 忽略文件
├── README.md                    # 项目说明文档
└── PROJECT_STRUCTURE.md         # 项目结构说明（本文件）
```

## 核心文件说明

### lib/posts.ts

这是核心的数据读取模块，提供以下功能：

- `getAllPostSlugs()` - 获取所有文章的 slug 列表
- `getPostBySlug(slug)` - 根据 slug 获取单篇文章（包含 HTML 内容）
- `getAllPosts()` - 获取所有文章（按日期降序排列）
- `getAllTags()` - 获取所有标签（去重）

### lib/gallery.ts

负责从 `public/gallery` 目录读取图片，并为前端提供可渲染的 metadata：

- `getAllGalleryImages()` - 枚举允许的图片扩展名并返回图片路径、名称、alt 等信息

### app/blog/page.tsx

博客列表页，显示所有文章的：
- 标题（链接到详情页）
- 发布日期
- 标签
- 摘要
- "阅读更多" 链接

### app/blog/[slug]/page.tsx

博客详情页，使用动态路由：
- `generateStaticParams()` - 在构建时生成所有静态路径
- `generateMetadata()` - 生成 SEO 元数据
- 显示完整的文章内容和标签云

## Markdown 文件格式

每篇文章必须包含 frontmatter：

```markdown
---
title: 文章标题
date: 2024-01-15
tags: ["标签1", "标签2"]
summary: 文章摘要
---

文章正文内容...
```

## 路由说明

- `/` - 首页
- `/blog` - 博客列表页
- `/blog/[slug]` - 博客详情页（slug 是文件名，不含 .md 扩展名）

## SSG 工作原理

1. **构建时**：Next.js 调用 `generateStaticParams()` 获取所有文章的 slug
2. **预渲染**：为每个 slug 生成静态 HTML 页面
3. **部署**：所有页面都是静态 HTML，可直接由 CDN 提供服务

## SEO 优化

- 每个页面都有动态生成的 `<title>` 和 `<meta description>`
- 使用语义化 HTML 标签
- 文章日期使用 `<time>` 标签
- 支持结构化数据（可扩展）
