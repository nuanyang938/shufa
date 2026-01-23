/**
 * 文章 Frontmatter 类型定义
 */
export interface PostFrontMatter {
  title: string;
  date: string;
  tags: string[];
  summary: string;
}

/**
 * 文章完整类型定义
 */
export interface Post extends PostFrontMatter {
  slug: string;
  content: string;
  htmlContent: string;
}
