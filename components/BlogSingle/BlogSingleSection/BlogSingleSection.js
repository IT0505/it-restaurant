import styles from './BlogSingleSection.module.scss';
import Image from 'next/image';
import SideBar from '../../SideBar/SideBar';
import ReviewComment from '../../ReviewComment/ReviewComment';
import ReadMore from '../../ReadMore/ReadMore';
import Link from 'next/link';
import { blogSingleSectionData } from '../../../utils/dataConfig';
export default function BlogSingleSection() {
  const { title, imgSrc, imgAlt, date, author, description, url, comments } =
    blogSingleSectionData;
  return (
    <div className={`${styles.blogSingleSection} section`}>
      <div className='container'>
        <div className={styles.blogSingleSectionInner}>
          <div className={styles.blogWrap}>
            <figure className={styles.image}>
              <Image src={imgSrc} alt={imgAlt} layout='responsive'></Image>
            </figure>
            <Link href={url}>
              <a className={styles.title}>{title}</a>
            </Link>
            <h3 className={styles.date}>
              {date} by <span className={styles.highlight}>{author}</span>
            </h3>
            <p className={styles.description}>
              <ReadMore>{description}</ReadMore>
            </p>
            <div className={styles.comments}>
              <h2 className={styles.title}>
                {comments.length} Comments For {title}
              </h2>
              {comments.map((item, index) => (
                <ReviewComment data={item} key={index} />
              ))}
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
}
