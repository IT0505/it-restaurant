import styles from './MenuItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default function MenuItem({ data, style }) {
  const { imgSrc, imgAlt, url, name, price, description, status } = data;
  return (
    <div className={`${styles.menuItem} ${styles[style]}`}>
      <Link href={url}>
        <a className={styles.image}>
          {status === 'new' && <span className={styles.status}>New</span>}
          <Image
            src={imgSrc}
            alt={imgAlt}
            layout='responsive'
            height={1}
            width={1}
          ></Image>
        </a>
      </Link>
      <div className={styles.text}>
        <div className={styles.inlineWrap}>
          <Link href={url}>
            <a className={`${styles.inlineText} ${styles.name}`}>{name}</a>
          </Link>
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
