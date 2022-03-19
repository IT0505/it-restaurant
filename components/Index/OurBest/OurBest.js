import Parallax from '../../Parallax/Parallax';
import styles from './OurBest.module.scss';
import { ourBestData } from '../../../utils/dataConfig';
import MainTitle from '../../MainTitle/MainTitle';

export default function OurBest() {
  return (
    <Parallax
      classImplement={styles.ourBest}
      backgroundImage={ourBestData.backgroundImg}
    >
      <div className='container'>
        <div className={styles.ourBestInner}>
          <MainTitle
            classImplement={styles.title}
            slogan={ourBestData.slogan}
            title={ourBestData.title}
            style={2}
          />
        </div>
      </div>
    </Parallax>
  );
}
