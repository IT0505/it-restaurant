import styles from './PageTitle.module.scss';
import Parallax from '../../Parallax/Parallax';
import MainTitle from '../../MainTitle/MainTitle';
import { pageTitleData } from '../../../utils/dataConfig';

export default function PageTitle() {
  return (
    <Parallax
      backgroundImage={pageTitleData.backgroundImg}
      classImplement={styles.pageTitle}
    >
      <div className='container'>
        <div className={styles.pageTitleInner}>
          <MainTitle
            classImplement={styles.title}
            slogan={pageTitleData.slogan}
            title={pageTitleData.title}
            style={2}
          />
        </div>
      </div>
    </Parallax>
  );
}
