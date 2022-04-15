import styles from './PageTitle.module.scss';
import Parallax from '../../Parallax/Parallax';
import MainTitle from '../../MainTitle/MainTitle';
import { blogPageTitleData } from '../../../utils/dataConfig';

export default function PageTitle() {
  const { title, slogan, backgroundImage } = blogPageTitleData;
  return (
    <Parallax backgroundImage={backgroundImage} className={styles.pageTitle}>
      <div className='container'>
        <div className={styles.pageTitleInner}>
          <MainTitle title={title} slogan={slogan} style={'style1'} />
        </div>
      </div>
    </Parallax>
  );
}
