import styles from './OurDelicious.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { ourDeliciousData } from '../../../utils/dataConfig';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function OurDelicious() {
  const chefList = ourDeliciousData.chefList;
  return (
    <div className={`${styles.ourDelicious} section`}>
      <div className='container'>
        <div className={styles.ourDeliciousInner}>
          <MainTitle
            slogan={ourDeliciousData.slogan}
            title={ourDeliciousData.title}
          />
          <div className={styles.mainContent}>
            <Swiper
              className={styles.mySwiper}
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              loop={true}
              breakpoints={{
                654: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {chefList.map((item, index) => (
                <SwiperSlide key={index}>
                  <figure className={styles.image}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      layout='responsive'
                    />
                    <figcaption className={styles.caption}>
                      <a
                        className='fa-brands fa-facebook-f'
                        href={item.facebook}
                      ></a>
                      <a
                        className='fa-brands fa-twitter'
                        href={item.twitter}
                      ></a>
                      <a
                        className='fa-brands fa-linkedin-in'
                        href={item.linkedin}
                      ></a>
                      <a
                        className='fa-brands fa-instagram-square'
                        href={item.instagram}
                      ></a>
                      <a
                        className='fa-brands fa-vimeo-square'
                        href={item.vimeo}
                      ></a>
                    </figcaption>
                  </figure>
                  <div className={styles.lowerContent}>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.position}>{item.position}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
