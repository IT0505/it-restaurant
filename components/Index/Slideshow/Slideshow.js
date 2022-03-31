import { useState } from 'react';
import Image from 'next/image';
import styles from './Slideshow.module.scss';
import Button from '../../Button/Button';
import { slideshowData } from '../../../utils/dataConfig';

import { fadeIn, fadeInUp, slideInLeft, slideInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const classes = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2s',
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: '2s',
  },
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: '2s',
  },
  slideInRight: {
    animationName: slideInRight,
    animationDuration: '2s',
  },
});

export default function SlideShow() {
  const [slide, setSlide] = useState(0);
  const slideLength = slideshowData.slideshowItems.length;
  const slideshowItems = slideshowData.slideshowItems;

  const classNameCustom = (title) => {
    switch (title) {
      case 'The Fresh And Tasty Burgers':
        return 'custom1';
      default:
        return '';
    }
  };

  const animateCustom = (custom) => {
    switch (custom) {
      case 'custom1':
        return css(classes.slideInLeft);
      default:
        return css(classes.fadeIn);
    }
  };

  // setInterval(() => {
  //   setSlide(slide === slideLength - 1 ? 0 : slide + 1);
  // }, 15000);

  return (
    <div className={styles.slideshow}>
      {slideshowItems.map((item, index) => (
        <figure
          className={`${styles.slide} ${css(classes.fadeIn)} ${
            slide === index && styles.active
          }`}
          key={index}
        >
          <Image
            src={item.imgSrc}
            alt={item.imgAlt}
            objectFit='cover'
            layout='fill'
          />
          <div className={styles.textWrap}>
            <div
              className={`${styles.text} ${
                styles[classNameCustom(item.title)]
              }`}
            >
              {item.iconSrc && (
                <figure className={`${styles.image} ${css(classes.fadeInUp)}`}>
                  <Image
                    src={item.iconSrc}
                    alt={item.imgAlt}
                    layout='responsive'
                    // layout='fill'
                    // objectFit='contain'
                  ></Image>
                </figure>
              )}
              <h3 className={`${styles.title} ${css(classes.slideInLeft)}`}>
                {item.title}
              </h3>
              <p
                className={`${styles.description} ${css(classes.slideInRight)}`}
              >
                {item.description}
              </p>
              <Button
                className={`${styles.button} ${animateCustom(
                  classNameCustom(item.title)
                )}`}
              >
                Buy Now
              </Button>
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
        {slideshowItems.map((item, index) => (
          <span
            className={`${styles.dot} ${slide === index && styles.active}`}
            onClick={() => setSlide(index)}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
}
