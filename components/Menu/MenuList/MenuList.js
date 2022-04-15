import styles from './MenuList.module.scss';
import MenuItem from '../../MenuItem/MenuItem';

export default function MenuList({ data }) {
  return (
    <div className={styles.menuList}>
      {data.map((item, index) => (
        <MenuItem data={item} key={index} />
      ))}
    </div>
  );
}
