import styles from './LunchTitle.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { lunchTitleData } from '../../../utils/dataConfig';
import Parallax from '../../Parallax/Parallax';
import Image from 'next/image';

export default function LunchTitle() {
  return (
    <Parallax
      classImplement={styles.lunchTitle}
      backgroundImage={lunchTitleData.backgroundImg}
    >
      <div className='container'>
        <div className={styles.lunchTitleInner}>
          <figure className={styles.icon}>
            <Image src={lunchTitleData.iconSrc} alt={lunchTitleData.iconAlt} />
          </figure>
          <MainTitle
            slogan={lunchTitleData.slogan}
            title={lunchTitleData.title}
            style={2}
          />
        </div>
      </div>
    </Parallax>
  );
}
