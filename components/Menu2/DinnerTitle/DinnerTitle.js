import styles from './DinnerTitle.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { dinnerTitleData } from '../../../utils/dataConfig';
import Parallax from '../../Parallax/Parallax';
import Image from 'next/image';

export default function DinnerTitle() {
  return (
    <Parallax
      classImplement={styles.dinnerTitle}
      backgroundImage={dinnerTitleData.backgroundImg}
    >
      <div className='container'>
        <div className={styles.dinnerTitleInner}>
          <figure className={styles.icon}>
            <Image
              src={dinnerTitleData.iconSrc}
              alt={dinnerTitleData.iconAlt}
            />
          </figure>
          <MainTitle
            slogan={dinnerTitleData.slogan}
            title={dinnerTitleData.title}
            style={2}
          />
        </div>
      </div>
    </Parallax>
  );
}
