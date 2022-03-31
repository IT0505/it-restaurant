import styles from './RestaurantDiscover.module.scss';
import Image from 'next/image';
import { restaurantDiscoverData } from '../../../utils/dataConfig';
import Button from '../../Button/Button';
import MainTitle from '../../MainTitle/MainTitle';

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function RestaurantDiscover() {
  const pagination = {
    bulletActiveClass: styles.active,
    clickable: true,
    // bulletClass: styles.pagination,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };

  const mainContent = restaurantDiscoverData.mainContent;
  return (
    <div className={`${styles.restaurantDiscover} section`}>
      <div className='container'>
        <div className={styles.restaurantDiscoverInner}>
          <div className={`${styles.mainContent}`}>
            <MainTitle
              className={styles.title}
              slogan={mainContent.slogan}
              title={mainContent.title}
            />
            <p className={styles.description}>{mainContent.description1}</p>
            <p className={styles.description}>{mainContent.description2}</p>
            <Button className={styles.button}>Read More</Button>
          </div>
          {/* <div className={`${styles.swiperWrap} animate`}> */}
          <Swiper
            // install Swiper modules
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
            {restaurantDiscoverData.swiperImgs.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                {({ isActive }) => (
                  <figure
                    className={`${styles.image} ${isActive && styles.active}`}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      layout='responsive'
                    ></Image>
                  </figure>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
