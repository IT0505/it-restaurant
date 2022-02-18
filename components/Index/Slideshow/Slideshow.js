import { useState } from 'react';
import Image from 'next/image';
import styles from './Slideshow.module.scss';
import Button from '../../Button/Button';
import { slideshowData } from '../../../utils/dataConfig';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper';

export default function SlideShow() {
  const [slide, setSlide] = useState(0);
  const slideLength = slideshowData.slideshowItems.length;
  const slideshowItems = slideshowData.slideshowItems;

  const classNameCustom = (title) => {
    switch (title) {
      case 'The Fresh And Tasty Burgers':
        return 'custom1';
    }
  };
  return (
    <div className={styles.slideshow}>
      {slideshowItems.map((data, index) => (
        <figure
          className={`${styles.slide} ${styles.fade} ${
            slide === index && styles.active
          }`}
          key={index}
        >
          <Image
            src={data.imgSrc}
            alt={data.imgAlt}
            objectFit='cover'
            layout='fill'
          />
          <div className={styles.textWrap}>
            <div
              className={`${styles.text} ${
                styles[classNameCustom(data.title)]
              }`}
            >
              {data.iconSrc && (
                <Image src={data.iconSrc} alt={data.imgAlt}></Image>
              )}
              <h3 className={styles.title}>{data.title}</h3>
              <p className={styles.description}>{data.description}</p>
              <Button classImplement={styles.button}>Buy Now</Button>
            </div>
          </div>
        </figure>
      ))}

      <button
        className={styles.prev}
        onClick={() => setSlide(slide === 0 ? slideLength - 1 : slide - 1)}
      >
        &#10094;
      </button>
      <button
        className={styles.next}
        onClick={() => setSlide(slide === slideLength - 1 ? 0 : slide + 1)}
      >
        &#10095;
      </button>

      <div className={styles.pagination}>
        {slideshowItems.map((data, index) => (
          <span
            className={`${styles.dot} ${slide === index && styles.active}`}
            onClick={() => setSlide(index)}
            key={index}
          ></span>
        ))}
      </div>
      {/* <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={styles.mySwiper}
      >
        {slideshowItems.map((data, index) => (
          <SwiperSlide key={index}>
            <figure
              className={styles.slide}
              // style={{ display: slide === index && 'block' }}
              // key={index}
            >
              <Image
                src={data.imgSrc}
                alt={data.imgAlt}
                objectFit='cover'
                layout='fill'
              />
              <div className={styles.textWrap}>
                <div
                  className={`${styles.text} ${
                    styles[classNameCustom(data.title)]
                  }`}
                >
                  {data.iconSrc && (
                    <Image src={data.iconSrc} alt={data.imgAlt}></Image>
                  )}
                  <h3 className={styles.title}>{data.title}</h3>
                  <p className={styles.description}>{data.description}</p>
                  <Button classImplement={styles.button}>Buy Now</Button>
                </div>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
