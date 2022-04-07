import styles from './BlogContent.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogContent({ data, className }) {
  return (
    <div className={`${styles.blogContent} ${className}`}>
      <div className={styles.aboveContent}>
        <Link href={data.url}>
          <a className={styles.image}>
            <Image
              src={data.imgSrc}
              alt={data.imgAlt}
              layout='responsive'
            ></Image>
          </a>
        </Link>
        <a href={data.url} className={styles.title}>
          {data.title}
        </a>
        <h3 className={styles.date}>
          {data.date} by <span>{data.author}</span>
        </h3>
        <p>{data.description}</p>
      </div>
      <div className={styles.belowContent}>
        <Link href={data.url}>
          <a className={styles.url}>Read More</a>
        </Link>

        {data.numLikes && (
          <Link href={data.url}>
            <a className={styles.numLikes}>{data.numLikes} likes</a>
          </Link>
        )}

        {data.numComments && (
          <Link href={data.url}>
            <a className={styles.numComments}>{data.numComments} comments</a>
          </Link>
        )}
      </div>
    </div>
  );
}
