import styles from './OurDeliciousCombo.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import Button from '../../Button/Button';
import { ourDeliciousComboData } from '../../../utils/dataConfig';
import FoodCard from '../../FoodCard/FoodCard';
export default function OurDeliciousCombo() {
  const mainContent = ourDeliciousComboData.mainContent;
  return (
    <div className={`${styles.ourDeliciousCombo} section`}>
      <div className='container'>
        <div className={styles.ourDeliciousComboInner}>
          <MainTitle
            slogan={ourDeliciousComboData.slogan}
            title={ourDeliciousComboData.title}
          />
          <div className={styles.mainContent}>
            {mainContent.map((item, index) => (
              <FoodCard data={item} key={index} />
            ))}
          </div>
          <Button className={styles.button}>Book My Table</Button>
        </div>
      </div>
    </div>
  );
}
