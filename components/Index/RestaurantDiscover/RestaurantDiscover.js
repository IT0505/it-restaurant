import styles from './RestaurantDiscover.module.scss';
import Image from 'next/image';
import { restaurantDiscoverData } from '../../../utils/dataConfig';
import Button from '../../Button/Button';
import MainTitle from '../../MainTitle/MainTitle';
import { useEffect } from 'react';

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

  useEffect(() => {
    document.querySelector('.swiper-slide-active').classList.add(styles.active);
    console.log('Thanh da vao day');
  });

  const mainContent = restaurantDiscoverData.mainContent;
  return (
    <div className={`${styles.restaurantDiscover} section`}>
      <div className='container'>
        <div className={styles.restaurantDiscoverInner}>
          <div className={styles.mainContent}>
            <MainTitle
              slogan={mainContent.slogan}
              classImplement={styles.mainTitle}
            >
              {mainContent.title}
            </MainTitle>
            <p className={styles.description}>{mainContent.description1}</p>
            <p className={styles.description}>{mainContent.description2}</p>
            <Button classImplement={styles.button}>Read More</Button>
          </div>
          {/* <div className={styles.swiper}> */}
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1.5}
            loop={true}
            // autoplay={{
            //   delay: 3500,
            //   disableOnInteraction: false,
            // }}
            pagination={pagination}
            className={styles.mySwiper}
          >
            {restaurantDiscoverData.swiperImgs.map((data, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <figure className={styles.image}>
                  <Image
                    src={data.imgSrc}
                    alt={data.imgAlt}
                    layout='fill'
                  ></Image>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
