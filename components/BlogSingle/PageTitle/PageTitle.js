import styles from './PageTitle.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import Parallax from '../../Parallax/Parallax';
import { blogSinglePageTitleData } from '../../../utils/dataConfig';

export default function PageTitle() {
  const { title, slogan, backgroundImage } = blogSinglePageTitleData;
  return (
    <Parallax className={styles.pageTitle} backgroundImage={backgroundImage}>
      <div className='container'>
        <div className={styles.pageTitleInner}>
          <MainTitle slogan={title} style='style1' />
        </div>
      </div>
    </Parallax>
  );
}
