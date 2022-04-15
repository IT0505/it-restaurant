import styles from './SideBarItem.module.scss';
import Image from 'next/image';

export default function SideBarItem({ data, className }) {
  const { imgSrc, imgAlt, url, text } = data;

  return (
    <div className={`${styles.sideBarItem} ${imgSrc && styles.imgItem}`}>
      {imgSrc && (
        <a className={styles.image}>
          <Image src={imgSrc} alt={imgAlt} layout='fill' />
        </a>
      )}
      <a href={url} className={styles.link}>
        {text}
      </a>
    </div>
  );
}
