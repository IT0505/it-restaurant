import Parallax from '../../Parallax/Parallax';
import styles from './OurBest.module.scss';
import backgroundImage from '../../../assets/images/1-1024x750.jpg';

export default function OurBest() {
  return (
    <Parallax classImplement={styles.ourBest} backgroundImage={backgroundImage}>
      <div className='container'>
        <div className={styles.ourBestInner}>
          <h2 className={styles.title}>Healthy Fresh And Hot Dishes.</h2>
          <h3 className={styles.slogan}>Best offers from the house chef.</h3>
        </div>
      </div>
    </Parallax>
  );
}
