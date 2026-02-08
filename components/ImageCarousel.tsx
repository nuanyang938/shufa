'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
  '/static/images/b1.jpg',
  '/static/images/b2.jpg',
  '/static/images/b3.jpg',
  '/static/images/b4.jpg',
];

export default function ImageCarousel() {
  return (
    <div className="image-carousel">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={12}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <img src={src} alt="书法艺术" className="gallery-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
