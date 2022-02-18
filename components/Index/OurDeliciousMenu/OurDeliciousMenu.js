import styles from './OurDeliciousMenu.module.scss';
import React from 'react';
import Parallax from '../../Parallax/Parallax';
import backgroundImage from '../../../assets/images/2-860x1024.jpg';
import { ourDeliciousMenuData } from '../../../utils/dataConfig';
import Image from 'next/image';

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
      classImplement={styles.ourDeliciousMenu}
      backgroundImage={backgroundImage}
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
              {ourDeliciousMenuData.slideImgs.map((data, index) => (
                <SwiperSlide className={styles.swiperSlide} key={index}>
                  <figure className={styles.image}>
                    <Image src={data.imgSrc} alt={data.imgAlt}></Image>
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
            {mainContent.menuList.map((data, index) => (
              <div key={index} className={styles.content}>
                <a className={styles.image} href={data.url}>
                  {data.new && <p>New</p>}
                  <Image
                    src={data.imgSrc}
                    alt={data.imgAlt}
                    layout='fill'
                  ></Image>
                </a>
                <div className={styles.text}>
                  <div className={styles.inlineWrap}>
                    <a href={data.url} className={styles.inlineText}>
                      {data.name}
                    </a>
                    <span className={styles.inlineText}>...............</span>
                    <p className={styles.inlineText}>{data.price}</p>
                  </div>
                  <p className={styles.description}>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Parallax>
  );
}
