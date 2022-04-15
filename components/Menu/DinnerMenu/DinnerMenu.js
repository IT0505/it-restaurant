import styles from './DinnerMenu.module.scss';
import { dinnerMenuData } from '../../../utils/dataConfig';
import MenuList from '../MenuList/MenuList';

export default function DinnerMenu() {
  const { mainContent } = dinnerMenuData;
  return (
    <div className={`${styles.dinnerMenu} section`}>
      <div className='container'>
        <div className={styles.dinnerMenuInner}>
          <MenuList data={mainContent} />
        </div>
      </div>
    </div>
  );
}
