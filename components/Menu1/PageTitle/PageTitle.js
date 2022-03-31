import styles from './PageTitle.module.scss';
import Parallax from '../../Parallax/Parallax';
import MainTitle from '../../MainTitle/MainTitle';
import { menu1PageTitleData } from '../../../utils/dataConfig';

export default function PageTitle() {
  return (
    <Parallax
      backgroundImage={menu1PageTitleData.backgroundImage}
      className={styles.pageTitle}
    >
      <div className='container'>
        <div className={styles.pageTitleInner}>
          <MainTitle
            slogan={menu1PageTitleData.slogan}
            title={menu1PageTitleData.title}
            style={'style1'}
          />
        </div>
      </div>
    </Parallax>
  );
}
