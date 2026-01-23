import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `关于我们 - ${SITE_CONFIG.name}`,
  description: `了解${SITE_CONFIG.name}网站，${SITE_CONFIG.description}`,
};

export default function AboutPage() {
  return (
    <main className="about-container">
      <h1 className="page-title">关于我们</h1>

      {/* 网站说明 */}
      <section className="site-info">
        <h2 className="section-title">网站介绍</h2>
        <p className="site-description">
          子竹书法网站是一个致力于书法艺术传承与推广的平台，旨在为广大书法爱好者提供一个学习、交流和欣赏的空间。我们秉承"弘扬传统，创新发展"的理念，通过展示经典碑帖、分享书法知识、交流学习心得，让更多的人了解和喜爱书法艺术。
        </p>
        <div className="site-features">
          <div className="feature-item">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">经典碑帖</h3>
            <p className="feature-description">收录历代经典碑帖，提供高清图片和详细解读，帮助您深入了解书法艺术的精髓。</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✍️</div>
            <h3 className="feature-title">书法教程</h3>
            <p className="feature-description">提供从入门到进阶的书法教程，涵盖基本笔画、结字规律、章法布局等各个方面。</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">作品展示</h3>
            <p className="feature-description">展示子竹老师及学员的优秀作品，分享创作心得和艺术感悟。</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💬</div>
            <h3 className="feature-title">交流互动</h3>
            <p className="feature-description">提供书法爱好者交流的平台，分享学习经验，探讨书法艺术的魅力。</p>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="contact-info">
        <h2 className="section-title">联系方式</h2>
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-content">
              <div className="contact-label">工作室地址</div>
              <div className="contact-value">北京市朝阳区艺术区子竹书法工作室</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-content">
              <div className="contact-label">联系电话</div>
              <div className="contact-value">138-0013-8000</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-content">
              <div className="contact-label">电子邮箱</div>
              <div className="contact-value">
                <a href="mailto:info@zizhushufa.com">info@zizhushufa.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
