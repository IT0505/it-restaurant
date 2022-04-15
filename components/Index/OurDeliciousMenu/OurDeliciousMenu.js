import styles from './OurDeliciousMenu.module.scss';
import React from 'react';
import Parallax from '../../Parallax/Parallax';
import { ourDeliciousMenuData } from '../../../utils/dataConfig';
import Image from 'next/image';
import MenuItem from '../../MenuItem/MenuItem';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

SwiperCore.use([Navigation]);

export default function OurDeliciousMenu() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const {
    title,
    slogan,
    backgroundImage,
    swiperImgs,
    mainContent: { subTitle, menuList },
  } = ourDeliciousMenuData;

  return (
    <Parallax
      backgroundImage={backgroundImage}
      className={styles.ourDeliciousMenu}
    >
      <div className='container'>
        <div className={styles.ourDeliciousMenuInner}>
          <div className={styles.swiperWrap}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.slogan}>{slogan}</h3>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
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
              {swiperImgs.map((item, index) => (
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
            <h2 className={styles.title}>{subTitle}</h2>
            <div className={styles.menuList}>
              {menuList.map((item, index) => (
                <MenuItem data={item} key={index} style={'style1'} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
