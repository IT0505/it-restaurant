import styles from './LunchMenu.module.scss';
import { lunchMenuData } from '../../../utils/dataConfig';
import MenuList from '../MenuList/MenuList';
export default function LunchMenu() {
  const { mainContent } = lunchMenuData;
  return (
    <div className={`${styles.lunchMenu} section`}>
      <div className='container'>
        <div className={styles.lunchMenuInner}>
          <MenuList data={mainContent} />
        </div>
      </div>
    </div>
  );
}
