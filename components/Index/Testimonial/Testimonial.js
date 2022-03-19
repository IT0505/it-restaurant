// import './Testimonial.scss';
import styles from './Testimonial.module.scss';
import Parallax from '../../Parallax/Parallax';
import { testimonialData } from '../../../utils/dataConfig';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function Testimonial() {
  const pagination = {
    bulletActiveClass: styles.active,
    clickable: true,
    // bulletClass: styles.pagination,
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.pagination}"></span>`;
    },
  };

  return (
    <Parallax
      classImplement={styles.testimonial}
      backgroundImage={testimonialData.backgroundImg}
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
            {testimonialData.mainContent.map((data, index) => (
              <SwiperSlide key={index}>
                <p className={styles.text}>
                  <i className='fa-solid fa-quote-left'></i>
                  <br />
                  {data.text}
                </p>
                <h3 className={styles.name}>
                  <span>- </span>
                  {data.name}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Parallax>
  );
}
