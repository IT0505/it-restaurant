import styles from './PageTitle.module.scss';
import { flyingNinjaProductData } from '../../../utils/dataConfig';
import Parallax from '../../Parallax/Parallax';
export default function PageTitle() {
  const { backgroundImage, title } = flyingNinjaProductData;
  return (
    <Parallax className={styles.pageTitle} backgroundImage={backgroundImage}>
      <div className='container'>
        <div className={styles.pageTitleInner}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </Parallax>
  );
}
