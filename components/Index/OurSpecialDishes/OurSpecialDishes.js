import styles from './OurSpecialDishes.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { ourSpecialDishesData } from '../../../utils/dataConfig';
import OpeningHoursItem from './components/OpeningHoursItem/OpeningHoursItem';
import SpecialItem from './components/SpecialItem/SpecialItem';
import { attributes } from '../../../content/home.md';

export default function OurSpecialDishes() {
  const {
    section6: { title, slogan, openingHours, note, phone, specialDishes },
  } = attributes;

  return (
    <div className={styles.ourSpecialDishes}>
      <div className='container'>
        <div className={`${styles.ourSpecialDishesInner} section`}>
          <MainTitle slogan={slogan} title={title} />
          <div className={styles.mainContent}>
            <div className={`${styles.openingHours} animate fadeInLeft`}>
              <h2 className={styles.title}>Opening Hours</h2>
              <div className={styles.openingHoursWrap}>
                {openingHours.map((item, index) => (
                  <OpeningHoursItem data={item} key={index} />
                ))}
                <p className={styles.note}>{note}</p>
                <p className={styles.phone}>{phone}</p>
              </div>
            </div>
            <div className={styles.specialList}>
              {specialDishes.map((item, index) => (
                <SpecialItem data={item} key={index} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
