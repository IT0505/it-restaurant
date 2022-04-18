import Parallax from '../../Parallax/Parallax';
import styles from './OurBest.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { attributes } from '../../../content/home.md';

export default function OurBest() {
  const {
    section2: { title, slogan, background1 },
  } = attributes;

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
