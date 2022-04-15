import styles from './SideBar.module.scss';
import SideBarItem from './components/SideBarItem/SideBarItem';
import { sideBarData } from '../../utils/dataConfig';

export default function SideBar({ className }) {
  const { topRated, categories, archives } = sideBarData;
  return (
    <div className={`${styles.sideBar}  ${className}`}>
      <div className={`${styles.sideBarContent}`}>
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
      <div className={styles.sideBarContent}>
        <h3 className={styles.title}>Categories</h3>
        <div className={styles.sideBarList}>
          {categories.map((item, index) => (
            <SideBarItem data={item} key={index} />
          ))}
        </div>
      </div>
      <div className={styles.sideBarContent}>
        <h3 className={styles.title}>Top Rated</h3>
        <div className={styles.sideBarList}>
          {topRated.map((item, index) => (
            <SideBarItem data={item} key={index} />
          ))}
        </div>
      </div>
      <div className={styles.sideBarContent}>
        <h3 className={styles.title}>Archives</h3>
        <div className={styles.sideBarList}>
          {archives.map((item, index) => (
            <SideBarItem data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
