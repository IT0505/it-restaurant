import styles from './MenuItem.module.scss';
import Image from 'next/image';

export default function MenuItem({ data, style }) {
  const { imgSrc, imgAlt, url, name, price, description, status } = data;
  return (
    <div className={`${styles.menuItem} ${styles[style]}`}>
      <a className={styles.image} href={url}>
        {status === 'new' && <span className={styles.status}>New</span>}
        <Image src={imgSrc} alt={imgAlt} layout='responsive'></Image>
      </a>
      <div className={styles.text}>
        <div className={styles.inlineWrap}>
          <a href={url} className={`${styles.inlineText} ${styles.name}`}>
            {name}
          </a>
          <span className={`${styles.inlineText} ${styles.dots}`}>
            ..................................
          </span>
          <p className={`${styles.inlineText} ${styles.price}`}>{price}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
