import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug, getAllTags } from '@/lib/posts';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: {
    slug: string;
  };
}

// 生成静态路径
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: encodeURIComponent(slug),
  }));
}

// 生成元数据
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(decodeURIComponent(params.slug));
  
  if (!post) {
    return {
      title: '文章未找到',
    };
  }

  return {
    title: `${post.title} - ${SITE_CONFIG.name}`,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const decodedSlug = decodeURIComponent(params.slug);
  const post = getPostBySlug(decodedSlug);

  if (!post) {
    notFound();
  }

  const allTags = getAllTags();

  return (
    <section className="article-section">
      <div className="article-container">
        <div className="article-layout">
          {/* 文章内容 */}
          <main className="article-main">
            <article className="article-content">
              {/* 文章头部 */}
              <header className="article-header">
                <h1 className="article-title">{post.title}</h1>
                <div className="article-meta-info">
                  <time className="article-date" dateTime={post.date}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {format(new Date(post.date), 'yyyy年MM月dd日')}
                  </time>
                  {post.tags.length > 0 && (
                    <div className="article-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="article-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="article-divider"></div>
              </header>

              {/* 文章正文 */}
              <div 
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
              />
            </article>
          </main>

          {/* 侧边栏 */}
          <aside className="article-sidebar">
            {/* 标签云 */}
            <div className="sidebar-widget">
              <h3 className="widget-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
                标签云
              </h3>
              <div className="tag-cloud">
                {allTags.map((tag) => (
                  <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className="tag">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

