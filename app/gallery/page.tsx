import { getAllGalleryImages } from '@/lib/gallery';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: `书法作品 - ${SITE_CONFIG.name}`,
  description: '展示子竹老师的书法作品，传承经典，品味书法之美',
};

export default function GalleryPage() {
  const images = getAllGalleryImages();

  return <GalleryClient images={images} />;
}
