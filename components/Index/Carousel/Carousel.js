import styles from './Carousel.module.scss';
import { carouselData } from '../../../utils/dataConfig';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function Carousel() {
  const imgList = carouselData.imgList;
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        className={styles.myCarousel}
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
      >
        {imgList.map((data, index) => (
          <SwiperSlide key={index}>
            <figure className={styles.image}>
              <Image src={data.imgSrc} alt={data.imgAlt} />
              <figcaption className={styles.caption}>
                {data.imgCaption}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
