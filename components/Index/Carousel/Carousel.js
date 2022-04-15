import styles from './Carousel.module.scss';
import { carouselData } from '../../../utils/dataConfig';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';

export default function Carousel() {
  const { imgList } = carouselData;
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
              <Image src={item.imgSrc} alt={item.imgAlt} layout='responsive' />
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
