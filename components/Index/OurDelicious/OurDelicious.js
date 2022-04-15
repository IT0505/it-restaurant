import styles from './OurDelicious.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { ourDeliciousData } from '../../../utils/dataConfig';
import ChefItem from './components/ChefItem/ChefItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

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
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <ChefItem data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
