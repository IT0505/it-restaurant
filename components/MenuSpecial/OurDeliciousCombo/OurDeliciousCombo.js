import styles from './OurDeliciousCombo.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import Button from '../../Button/Button';
import { ourDeliciousComboData } from '../../../utils/dataConfig';
import FoodCard from '../../FoodCard/FoodCard';
export default function OurDeliciousCombo() {
  const { mainContent, title, slogan } = ourDeliciousComboData;
  return (
    <div className={`${styles.ourDeliciousCombo} section`}>
      <div className='container'>
        <div className={styles.ourDeliciousComboInner}>
          <MainTitle slogan={slogan} title={title} />
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
