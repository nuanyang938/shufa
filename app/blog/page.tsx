import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `文章列表 - ${SITE_CONFIG.name}`,
  description: '浏览所有书法相关文章',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* 页面头部 */}
        <div className="blog-header">
          <h1 className="blog-title">文章列表</h1>
          <div className="blog-divider"></div>
          <div className="blog-count">
            <span className="blog-count-number">{posts.length}</span>
            <span className="blog-count-label">篇文章</span>
          </div>
        </div>

        {/* 文章列表 */}
        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <div className="blog-card-content">
                <div className="blog-card-header">
                  <h2 className="blog-card-title">
                    <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <div className="blog-card-meta">
                    <time className="blog-card-date" dateTime={post.date}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {format(new Date(post.date), 'yyyy年MM月dd日')}
                    </time>
                  </div>
                </div>
                
                <p className="blog-card-excerpt">{post.summary}</p>
                
                {post.tags.length > 0 && (
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                )}
                
                <Link 
                  href={`/blog/${encodeURIComponent(post.slug)}`} 
                  className="blog-card-link"
                >
                  <span>阅读全文</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

