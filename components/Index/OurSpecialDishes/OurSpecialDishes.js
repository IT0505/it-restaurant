import styles from './OurSpecialDishes.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { ourSpecialDishesData } from '../../../utils/dataConfig';
import Image from 'next/image';

export default function OurSpecialDishes() {
  const openingHours = ourSpecialDishesData.openingHours;
  const specialDishes = ourSpecialDishesData.specialDishes;
  return (
    <div className={styles.ourSpecialDishes}>
      <div className='container'>
        <div className={`${styles.ourSpecialDishesInner} section`}>
          <MainTitle slogan={ourSpecialDishesData.slogan}>
            {ourSpecialDishesData.title}
          </MainTitle>
          <div className={styles.mainContent}>
            <div className={`${styles.openingHours} animate fadeInLeft`}>
              <h2 className={styles.title}>Opening Hours</h2>
              <ul>
                {openingHours.map((data, index) => (
                  <li key={index}>
                    {data.phone ? (
                      <p className={styles.phone}>{data.phone}</p>
                    ) : data.note ? (
                      <p className={styles.text}>{data.note}</p>
                    ) : (
                      <>
                        <p className={styles.text}>{data.date}</p>
                        <p className={styles.text}>{data.hours}</p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.specialDishes}>
              {specialDishes.map((data, index) => (
                <div
                  className={`${styles.content} ${
                    index % 2 === 0 && styles.reverse
                  } ${index === specialDishes.length - 1 && styles.last}`}
                  key={index}
                >
                  <figure className={styles.image}>
                    <Image src={data.imgSrc} alt={data.imgAlt} />
                    <div className={styles.overlay}>{data.price}</div>
                  </figure>
                  <div className={styles.text}>
                    <h3 className={styles.title}>{data.title}</h3>
                    <p className={styles.description}>{data.description}</p>
                    <a href={data.url} className={styles.url}>
                      Read More
                    </a>
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
