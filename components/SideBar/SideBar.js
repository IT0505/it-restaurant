import styles from './SideBar.module.scss';
import SideBarItem from './components/SideBarItem/SideBarItem';
import { sideBarData } from '../../utils/dataConfig';

export default function SideBar({ className }) {
  return (
    <div className={`${styles.sideBar}  ${className}`}>
      <div className={`${styles.sideBarItem}`}>
        <div className={`${styles.searchBar}`}>
          <input
            type='text'
            className={styles.searchInput}
            name='search'
            placeholder='Search'
          />
          <button type='submit' className={styles.searchBtn}>
            <i className='fa fa-search' aria-hidden></i>
          </button>
        </div>
      </div>
      {sideBarData.mainContent.map((item, index) => (
        <SideBarItem data={item} key={index} className={styles.sideBarItem} />
      ))}
    </div>
  );
}
