import styles from './OurSpecialDishes.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { ourSpecialDishesData } from '../../../utils/dataConfig';
import Image from 'next/image';
import Link from 'next/link';

export default function OurSpecialDishes() {
  const openingHours = ourSpecialDishesData.openingHours;
  const specialDishes = ourSpecialDishesData.specialDishes;
  return (
    <div className={styles.ourSpecialDishes}>
      <div className='container'>
        <div className={`${styles.ourSpecialDishesInner} section`}>
          <MainTitle
            slogan={ourSpecialDishesData.slogan}
            title={ourSpecialDishesData.title}
          />
          <div className={styles.mainContent}>
            <div className={`${styles.openingHours} animate fadeInLeft`}>
              <h2 className={styles.title}>Opening Hours</h2>
              <ul>
                {openingHours.map((item, index) => (
                  <li key={index}>
                    {item.phone ? (
                      <p className={styles.phone}>{item.phone}</p>
                    ) : item.note ? (
                      <p className={styles.text}>{item.note}</p>
                    ) : (
                      <>
                        <p className={styles.text}>{item.date}</p>
                        <p className={styles.text}>{item.hours}</p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.specialList}>
              {specialDishes.map((item, index) => (
                <div
                  className={`${styles.content} ${
                    index % 2 === 0 && styles.reverse
                  } ${index === specialDishes.length - 1 && styles.last}`}
                  key={index}
                >
                  <figure className={styles.image}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      layout='responsive'
                    />
                    <div className={styles.overlay}>{item.price}</div>
                  </figure>
                  <div className={styles.text}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                    <Link href={item.url}>
                      <a className={styles.url}>Read More</a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
