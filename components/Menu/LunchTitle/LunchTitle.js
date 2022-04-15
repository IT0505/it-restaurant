import styles from './LunchTitle.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { lunchTitleData } from '../../../utils/dataConfig';
import Parallax from '../../Parallax/Parallax';
import Image from 'next/image';

export default function LunchTitle() {
  const { imgSrc, imgAlt, title, slogan, backgroundImage } = lunchTitleData;
  return (
    <Parallax backgroundImage={backgroundImage} className={styles.lunchTitle}>
      <div className='container'>
        <div className={styles.lunchTitleInner}>
          <figure className={styles.icon}>
            <Image src={imgSrc} alt={imgAlt} layout='responsive' />
          </figure>
          <MainTitle slogan={slogan} title={title} style={'style1'} />
        </div>
      </div>
    </Parallax>
  );
}
