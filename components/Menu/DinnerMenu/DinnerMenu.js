import styles from './DinnerMenu.module.scss';
import { dinnerMenuData } from '../../../utils/dataConfig';
import MenuList from '../../MenuList/MenuList';
export default function DinnerMenu() {
  return (
    <div className={`${styles.dinnerMenu} section`}>
      <div className='container'>
        <div className={styles.dinnerMenuInner}>
          <MenuList data={dinnerMenuData.mainContent} />
        </div>
      </div>
    </div>
  );
}
