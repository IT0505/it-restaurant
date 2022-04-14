import styles from './DinnerTitle.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { dinnerTitleData } from '../../../utils/dataConfig';
import Parallax from '../../Parallax/Parallax';
import Image from 'next/image';

export default function DinnerTitle() {
  return (
    <Parallax
      backgroundImage={dinnerTitleData.backgroundImage}
      className={styles.dinnerTitle}
    >
      <div className='container'>
        <div className={styles.dinnerTitleInner}>
          <figure className={styles.icon}>
            <Image
              src={dinnerTitleData.iconSrc}
              alt={dinnerTitleData.iconAlt}
              layout='responsive'
            />
          </figure>
          <MainTitle
            slogan={dinnerTitleData.slogan}
            title={dinnerTitleData.title}
            style={'style1'}
          />
        </div>
      </div>
    </Parallax>
  );
}
