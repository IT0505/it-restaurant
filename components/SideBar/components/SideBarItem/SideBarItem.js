import styles from './SideBarItem.module.scss';
import Image from 'next/image';

export default function SideBarItem({ data, className }) {
  const mainContent = data.contents;

  return (
    <div
      className={`${styles.sideBarItem} ${className} ${
        mainContent[0].imgSrc && 'animate fadeInUp'
      }`}
    >
      <h3 className={styles.title}>{data.title}</h3>
      <ul className={styles.sideBarList}>
        {mainContent.map((item, index) => (
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
    </div>
  );
}
