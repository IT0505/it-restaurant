import Image from 'next/image';
import styles from './MenuList.module.scss';

export default function MenuList({ data, style, className }) {
  return (
    <div className={`${styles.menuList} ${styles[style]} ${className}`}>
      {data.map((item, index) => (
        <div key={index} className={styles.menuItem}>
          <a className={styles.image} href={item.url}>
            {item.status === 'new' && (
              <span className={styles.status}>New</span>
            )}
            <Image
              src={item.imgSrc}
              alt={item.imgAlt}
              layout='responsive'
            ></Image>
          </a>
          <div className={styles.text}>
            <div className={styles.inlineWrap}>
              <a
                href={item.url}
                className={`${styles.inlineText} ${styles.name}`}
              >
                {item.name}
              </a>
              <span className={`${styles.inlineText} ${styles.dots}`}>
                ..................................
              </span>
              <p className={`${styles.inlineText} ${styles.price}`}>
                {item.price}
              </p>
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
