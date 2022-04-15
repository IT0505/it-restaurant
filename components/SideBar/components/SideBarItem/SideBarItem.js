import styles from './SideBarItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function SideBarItem({ data }) {
  const { imgSrc, imgAlt, url, text } = data;

  return (
    <div className={`${styles.sideBarItem} ${imgSrc && styles.imgItem}`}>
      {imgSrc && (
        <Link href={url}>
          <a className={styles.image}>
            <Image src={imgSrc} alt={imgAlt} layout='fill' />
          </a>
        </Link>
      )}
      <Link href={url}>
        <a className={styles.link}>{text}</a>
      </Link>
    </div>
  );
}
