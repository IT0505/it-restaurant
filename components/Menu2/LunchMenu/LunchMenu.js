import styles from './LunchMenu.module.scss';
import { lunchMenuData } from '../../../utils/dataConfig';
import MenuList from '../../MenuList/MenuList';
export default function LunchMenu() {
  return (
    <div className={`${styles.lunchMenu} section`}>
      <div className='container'>
        <div className={styles.lunchMenuInner}>
          <MenuList data={lunchMenuData.mainContent} />
        </div>
      </div>
    </div>
  );
}
