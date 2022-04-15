import styles from './LatestBlogContent.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function LatestBlogContent({ data }) {
  const { title, date, imgSrc, imgAlt, url } = data;
  return (
    <div className={styles.latestBlogContent}>
      <figure className={styles.blogImage}>
        <Image src={imgSrc} alt={imgAlt} layout='responsive' />
        <Link href={url}>
          <a className={styles.overlay}>
            <i
              className='fa-solid fa-link'
              style={{ fontSize: '16px' }}
              aria-hidden
            ></i>
          </a>
        </Link>
      </figure>
      <div className={styles.blogText}>
        <Link href={url}>
          <a className={styles.title}>{title}</a>
        </Link>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
}
