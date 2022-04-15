import styles from './DinnerTitle.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { dinnerTitleData } from '../../../utils/dataConfig';
import Parallax from '../../Parallax/Parallax';
import Image from 'next/image';

export default function DinnerTitle() {
  const { title, slogan, backgroundImage, imgSrc, imgAlt } = dinnerTitleData;
  return (
    <Parallax backgroundImage={backgroundImage} className={styles.dinnerTitle}>
      <div className='container'>
        <div className={styles.dinnerTitleInner}>
          <figure className={styles.icon}>
            <Image src={imgSrc} alt={imgAlt} layout='responsive' />
          </figure>
          <MainTitle slogan={slogan} title={title} style={'style1'} />
        </div>
      </div>
    </Parallax>
  );
}
