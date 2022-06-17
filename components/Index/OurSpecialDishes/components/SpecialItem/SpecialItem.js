import styles from './SpecialItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function SpecialItem({ data, index }) {
  const { imgSrc, imgAlt, title, description, url, price } = data;
  return (
    <div
      className={`${styles.specialItem} ${index % 2 === 0 && styles.reverse}`}
    >
      <figure className={styles.image}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          layout='responsive'
          height={1}
          width={1}
        />
        <div className={styles.overlay}>{price}</div>
      </figure>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link href={url}>
          <a className={styles.url}>Read More</a>
        </Link>
      </div>
    </div>
  );
}
