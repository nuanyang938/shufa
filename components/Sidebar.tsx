'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES, SITE_CONFIG } from '@/lib/constants';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === ROUTES.home) {
      return pathname === ROUTES.home;
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="sidebar">
      {/* Logo区域 */}
      <div className="sidebar-logo">
        <div className="logo-icon"></div>
        <div className="logo-text">{SITE_CONFIG.name}</div>
      </div>
      
      {/* 上方占位元素 */}
      <div className="sidebar-spacer"></div>
      
      {/* 印章展示区域 */}
      <div className="seal-display">
        <img src="/static/images/logo.png" alt="印章" className="seal-image" style={{ width: '140px', height: '220px', objectFit: 'contain' }} />
        <div className="seal-caption">/</div>
      </div>
      
      {/* 下方占位元素 */}
      <div className="sidebar-spacer" style={{ flex: 0.5 }}></div>
      
      {/* 导航区域 */}
      <nav className="sidebar-nav">
        <Link href={ROUTES.home} className={`nav-item ${isActive(ROUTES.home) ? 'active' : ''}`}>
          <div className="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span>首页</span>
        </Link>
        <Link href={ROUTES.gallery} className={`nav-item ${isActive(ROUTES.gallery) ? 'active' : ''}`}>
          <div className="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
          <span>作品</span>
        </Link>
        <Link href={ROUTES.blog} className={`nav-item ${isActive(ROUTES.blog) ? 'active' : ''}`}>
          <div className="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <span>文章</span>
        </Link>
        <Link href={ROUTES.about} className={`nav-item ${isActive(ROUTES.about) ? 'active' : ''}`}>
          <div className="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span>关于</span>
        </Link>
      </nav>
      
      {/* 社交图标区域 */}
      <div className="social-icons">
        <a href="#" className="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="#" className="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="#" className="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
        <a href="#" className="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </aside>
  );
}
