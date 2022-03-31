import Parallax from '../../Parallax/Parallax';
import styles from './OurBest.module.scss';
import { ourBestData } from '../../../utils/dataConfig';
import MainTitle from '../../MainTitle/MainTitle';

export default function OurBest() {
  return (
    <Parallax
      backgroundImage={ourBestData.backgroundImage}
      className={styles.ourBest}
    >
      <div className='container'>
        <div className={styles.ourBestInner}>
          <MainTitle
            slogan={ourBestData.slogan}
            title={ourBestData.title}
            style={'style1'}
          />
        </div>
      </div>
    </Parallax>
  );
}
