import styles from './RestaurantDiscover.module.scss';
import Image from 'next/image';
import { restaurantDiscoverData } from '../../../utils/dataConfig';
import Button from '../../Button/Button';
import MainTitle from '../../MainTitle/MainTitle';
import { attributes } from '../../../content/home.md';

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function RestaurantDiscover() {
  const {
    section1: { title, slogan, description1, description2, swiperImages },
  } = attributes;
  console.log(attributes);

  const pagination = {
    bulletActiveClass: styles.active,
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };

  return (
    <div className={`${styles.restaurantDiscover} section`}>
      <div className='container'>
        <div className={styles.restaurantDiscoverInner}>
          <div className={`${styles.mainContent}`}>
            <MainTitle
              className={styles.title}
              style='style2'
              slogan={slogan}
              title={title}
            />
            <p className={styles.description}>{description1}</p>
            <p className={styles.description}>{description2}</p>
            <Button className={styles.button}>Read More</Button>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            className={`${styles.mySwiper} animate fadeInRight`}
            breakpoints={{
              992: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
            }}
          >
            {swiperImages.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                {({ isActive }) => (
                  <figure
                    className={`${styles.image} ${isActive && styles.active}`}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      // layout='responsive'
                      layout='fill'
                      objectFit='contain'
                    ></Image>
                  </figure>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
