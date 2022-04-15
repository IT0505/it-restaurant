// import './Testimonial.scss';
import styles from './Testimonial.module.scss';
import Parallax from '../../Parallax/Parallax';
import { testimonialData } from '../../../utils/dataConfig';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
export default function Testimonial() {
  const pagination = {
    bulletActiveClass: styles.active,
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };

  return (
    <Parallax
      backgroundImage={testimonialData.backgroundImage}
      className={styles.testimonial}
    >
      <div className='container'>
        <div className={styles.testimonialInner}>
          <Swiper
            className={styles.mySwiper}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            modules={[Autoplay, Pagination]}
            loop={true}
          >
            {testimonialData.mainContent.map((item, index) => (
              <SwiperSlide key={index}>
                <p className={styles.text}>
                  <i className='fa-solid fa-quote-left'></i>
                  <br />
                  {item.text}
                </p>
                <h3 className={styles.name}>
                  <span>- </span>
                  {item.name}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Parallax>
  );
}
