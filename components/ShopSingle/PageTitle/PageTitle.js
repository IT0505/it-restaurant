import styles from './PageTitle.module.scss';
import { flyingNinjaProductData } from '../../../utils/dataConfig';
import { shopSinglePageTitleData } from '../../../utils/dataConfig';
import Parallax from '../../Parallax/Parallax';
export default function PageTitle() {
  return (
    <Parallax
      className={styles.pageTitle}
      backgroundImage={shopSinglePageTitleData.backgroundImage}
    >
      <div className='container'>
        <div className={styles.pageTitleInner}>
          <h3 className={styles.title}>{flyingNinjaProductData.title}</h3>
        </div>
      </div>
    </Parallax>
  );
}
