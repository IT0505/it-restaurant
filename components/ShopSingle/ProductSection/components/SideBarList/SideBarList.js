import styles from './SideBarList.module.scss';
import Image from 'next/image';

export default function SideBarList({ data }) {
  return (
    <ul className={styles.sideBarList}>
      {data.map((item, index) => (
        <li
          className={`${styles.sideBarItem} ${item.imgSrc && styles.imgItem}`}
          key={index}
        >
          {item.imgSrc && (
            <a className={styles.image}>
              <Image src={item.imgSrc} alt={item.imgAlt} layout='fill' />
            </a>
          )}
          <a href={item.url} className={styles.link}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
