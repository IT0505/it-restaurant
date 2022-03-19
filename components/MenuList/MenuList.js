import Image from 'next/image';
import styles from './MenuList.module.scss';

export default function MenuList(props) {
  const mainContent = props.data;
  return (
    <div className={styles.mainContent}>
      {mainContent.map((data, index) => (
        <div key={index} className={styles.content}>
          <a className={styles.image} href={data.url}>
            {data.status === 'new' && (
              <span className={styles.status}>New</span>
            )}
            <Image src={data.imgSrc} alt={data.imgAlt}></Image>
          </a>
          <div className={styles.text}>
            <div className={styles.inlineWrap}>
              <a href={data.url} className={styles.inlineText}>
                {data.name}
              </a>
              <span className={`${styles.inlineText} ${styles.dots}`}>
                ...............
              </span>
              <p className={styles.inlineText}>{data.price}</p>
            </div>
            <p className={styles.description}>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
