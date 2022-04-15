import styles from './PageTitle.module.scss';
import Parallax from '../../Parallax/Parallax';
import MainTitle from '../../MainTitle/MainTitle';
import { menuPageTitleData } from '../../../utils/dataConfig';

export default function PageTitle() {
  const { backgroundImage, title, slogan } = menuPageTitleData;
  return (
    <Parallax backgroundImage={backgroundImage} className={styles.pageTitle}>
      <div className='container'>
        <div className={styles.pageTitleInner}>
          <MainTitle slogan={slogan} title={title} style={'style1'} />
        </div>
      </div>
    </Parallax>
  );
}
