import styles from './OurDeliciousMenu.module.scss';
import React from 'react';
import Parallax from '../../Parallax/Parallax';
import { ourDeliciousMenuData } from '../../../utils/dataConfig';
import Image from 'next/image';
import MenuList from '../../MenuList/MenuList';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

SwiperCore.use([Navigation]);

export default function OurDeliciousMenu() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const mainContent = ourDeliciousMenuData.mainContent;

  return (
    <Parallax
      backgroundImage={ourDeliciousMenuData.backgroundImage}
      className={styles.ourDeliciousMenu}
    >
      <div className='container'>
        <div className={styles.ourDeliciousMenuInner}>
          <div className={styles.swiperWrap}>
            <h2 className={styles.title}>{ourDeliciousMenuData.title}</h2>
            <h3 className={styles.slogan}>{ourDeliciousMenuData.slogan}</h3>
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              // pagination={{ clickable: true }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              className={styles.mySwiper}
            >
              {ourDeliciousMenuData.slideImgs.map((item, index) => (
                <SwiperSlide className={styles.swiperSlide} key={index}>
                  <figure className={styles.image}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      layout='responsive'
                    ></Image>
                  </figure>
                </SwiperSlide>
              ))}
              <div ref={navigationPrevRef} className={styles.prev}>
                <i className='fa-solid fa-angle-left'></i>
              </div>
              <div ref={navigationNextRef} className={styles.next}>
                <i className='fa-solid fa-angle-right'></i>
              </div>
            </Swiper>
          </div>

          <div className={styles.mainContent}>
            <h2 className={styles.title}>{mainContent.title}</h2>
            <MenuList data={mainContent.menuList} style={'style1'} />
          </div>
        </div>
      </div>
    </Parallax>
  );
}
