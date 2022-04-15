import styles from './BlogContent.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogContent({ data, className }) {
  const {
    url,
    imgSrc,
    imgAlt,
    title,
    date,
    author,
    description,
    numLikes,
    numComments,
  } = data;
  return (
    <div className={`${styles.blogContent} ${className}`}>
      <div className={styles.aboveContent}>
        <Link href={url}>
          <a className={styles.image}>
            <Image src={imgSrc} alt={imgAlt} layout='responsive'></Image>
          </a>
        </Link>
        <a href={url} className={styles.title}>
          {title}
        </a>
        <h3 className={styles.date}>
          {date} by <span className={styles.highlight}>{author}</span>
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.belowContent}>
        <Link href={url}>
          <a className={styles.url}>Read More</a>
        </Link>

        {numLikes && (
          <Link href={url}>
            <a className={styles.numLikes}>{numLikes} likes</a>
          </Link>
        )}

        {numComments && (
          <Link href={url}>
            <a className={styles.numComments}>{numComments} comments</a>
          </Link>
        )}
      </div>
    </div>
  );
}
