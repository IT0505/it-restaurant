import styles from './PageTitle.module.scss';
import Parallax from '../../Parallax/Parallax';
import MainTitle from '../../MainTitle/MainTitle';
import { blogPageTitleData } from '../../../utils/dataConfig';

export default function PageTitle() {
  return (
    <Parallax
      backgroundImage={blogPageTitleData.backgroundImage}
      className={styles.pageTitle}
    >
      <div className='container'>
        <div className={styles.pageTitleInner}>
          <MainTitle
            // className={styles.title}
            title={blogPageTitleData.title}
            slogan={blogPageTitleData.slogan}
            style={'style1'}
          />
        </div>
      </div>
    </Parallax>
  );
}
