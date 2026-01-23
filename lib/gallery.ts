import fs from 'fs';
import path from 'path';

const galleryDirectory = path.join(process.cwd(), 'public/gallery');

export interface GalleryImage {
  filename: string;
  src: string;
  alt: string;
}

/**
 * 获取所有相册图片
 */
export function getAllGalleryImages(): GalleryImage[] {
  try {
    if (!fs.existsSync(galleryDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(galleryDirectory);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    
    const images = fileNames
      .filter((fileName) => {
        const ext = path.extname(fileName).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map((fileName) => ({
        filename: fileName,
        src: `/gallery/${fileName}`,
        alt: path.parse(fileName).name,
      }));
    
    return images;
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return [];
  }
}
