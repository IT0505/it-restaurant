import styles from './BlogSingleSection.module.scss';
import Image from 'next/image';
import SideBar from '../../SideBar/SideBar';
import ReviewComment from '../../ReviewComment/ReviewComment';
import ReadMore from '../../ReadMore/ReadMore';

export default function BlogSingleSection({ data: { frontmatter, markdown } }) {
  const { title, imgSrc, imgAlt, date, author, description, url, comments } =
    frontmatter;
  // console.log(data);
  return (
    <div className={`${styles.blogSingleSection} section`}>
      <div className='container'>
        <div className={styles.blogSingleSectionInner}>
          <div className={styles.blogWrap}>
            <figure className={styles.image}>
              <Image
                src={imgSrc}
                alt={imgAlt}
                layout='fill'
                objectFit='contain'
              ></Image>
            </figure>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.date}>
              {date} by <span className={styles.highlight}>{author}</span>
            </h3>
            <p className={styles.description}>
              <ReadMore>{markdown}</ReadMore>
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
