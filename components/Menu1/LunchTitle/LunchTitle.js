import styles from './LunchTitle.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { lunchTitleData } from '../../../utils/dataConfig';
import Parallax from '../../Parallax/Parallax';
import Image from 'next/image';

export default function LunchTitle() {
  return (
    <Parallax
      backgroundImage={lunchTitleData.backgroundImage}
      className={styles.lunchTitle}
    >
      <div className='container'>
        <div className={styles.lunchTitleInner}>
          <figure className={styles.icon}>
            <Image
              src={lunchTitleData.iconSrc}
              alt={lunchTitleData.iconAlt}
              layout='responsive'
            />
          </figure>
          <MainTitle
            slogan={lunchTitleData.slogan}
            title={lunchTitleData.title}
            style={'style1'}
          />
        </div>
      </div>
    </Parallax>
  );
}
