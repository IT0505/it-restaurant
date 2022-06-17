import styles from './Carousel.module.scss';
import Image from 'next/image';
import { attributes } from '../../../content/home.md';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';

export default function Carousel() {
  const {
    section7: { imgList },
  } = attributes;
  return (
    <div className={styles.carousel}>
      <Swiper
        className={styles.myCarousel}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {imgList.map((item, index) => (
          <SwiperSlide key={index}>
            <figure className={styles.image}>
              <Image
                src={item.imgSrc}
                alt={item.imgAlt}
                layout='responsive'
                width={627}
                height={541}
              />
              <figcaption className={styles.caption}>
                {item.imgCaption}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
