import Parallax from '../../Parallax/Parallax';
import styles from './OurBest.module.scss';
import { ourBestData } from '../../../utils/dataConfig';
import MainTitle from '../../MainTitle/MainTitle';

export default function OurBest() {
  const { title, slogan, backgroundImage } = ourBestData;
  return (
    <Parallax backgroundImage={backgroundImage} className={styles.ourBest}>
      <div className='container'>
        <div className={styles.ourBestInner}>
          <MainTitle slogan={slogan} title={title} style={'style1'} />
        </div>
      </div>
    </Parallax>
  );
}
