import Parallax from '../../Parallax/Parallax';
import styles from './OurBest.module.scss';
import { ourBestData } from '../../../utils/dataConfig';
import MainTitle from '../../MainTitle/MainTitle';
import { attributes } from '../../../content/home.md';
// import dynamic from 'next/dynamic';

export default function OurBest() {
  const { background1 } = attributes;

  const { title, slogan, backgroundImage } = ourBestData;

  console.log('background1: ', background1);

  const img = 'images/1-1024x750.jpg';
  return (
    <Parallax backgroundImage={background1} className={styles.ourBest}>
      <div className='container'>
        <div className={styles.ourBestInner}>
          <MainTitle slogan={slogan} title={title} style='style1' />
        </div>
      </div>
    </Parallax>
  );
}
