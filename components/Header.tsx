import Link from 'next/link';
import { ROUTES, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href={ROUTES.home} className="header-brand">
          {SITE_CONFIG.name}
        </Link>
        <nav className="header-nav">
          <Link href={ROUTES.home} className="nav-link">
            首页
          </Link>
          <Link href={ROUTES.gallery} className="nav-link">
            作品
          </Link>
          <Link href={ROUTES.blog} className="nav-link">
            文章
          </Link>
          <Link href={ROUTES.about} className="nav-link">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}

