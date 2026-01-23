'use client';

import { useState } from 'react';
import type { GalleryImage } from '@/lib/gallery';

interface GalleryClientProps {
  images: GalleryImage[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="gallery-section">
        {/* 页面头部 */}
        <div className="gallery-header">
          <div className="gallery-header-content">
            <h1 className="gallery-title">书法作品</h1>
            <div className="gallery-divider"></div>
          </div>
        </div>

        {/* 作品网格 */}
        <div className="gallery-container">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div 
                key={image.filename} 
                className="gallery-card"
                onClick={() => openModal(image)}
              >
                <div className="gallery-card-image">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                  />
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-content">
                      <div className="gallery-card-number">#{String(index + 1).padStart(2, '0')}</div>
                      <div className="gallery-card-title">{image.alt}</div>
                      <div className="gallery-card-action">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span>查看详情</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 模态框 */}
      {selectedImage && (
        <div 
          className="gallery-modal" 
          onClick={closeModal}
        >
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="gallery-modal-image">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
