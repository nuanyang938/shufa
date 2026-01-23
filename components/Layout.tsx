'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  
  // 首页使用侧边栏，其他页面使用 Header
  const isHomePage = pathname === '/';
  
  // 不显示 Footer 的页面
  const hideFooter = 
    pathname === '/' || 
    pathname === '/blog' || 
    pathname.startsWith('/blog/') || 
    pathname === '/about' ||
    pathname === '/gallery';
  
  return (
    <>
      {isHomePage ? <Sidebar /> : <Header />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
