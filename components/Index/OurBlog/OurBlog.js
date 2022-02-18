import styles from './OurBlog.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { ourBlogData } from '../../../utils/dataConfig';
import Image from 'next/image';

export default function OurBlog() {
  const mainContent = ourBlogData.mainContent;
  return (
    <div className={`${styles.ourBlog} section`}>
      <div className='container'>
        <div className={styles.ourBlogInner}>
          <MainTitle slogan={ourBlogData.slogan}>{ourBlogData.title}</MainTitle>
          <div className={styles.mainContent}>
            {mainContent.map((data, index) => (
              <div className={styles.content} key={index}>
                <figure className={styles.image}>
                  <Image src={data.imgSrc} alt={data.imgAlt}></Image>
                </figure>
                <a href={data.url} className={styles.title}>
                  {data.title}
                </a>
                <h3 className={styles.time}>
                  {data.time} by <span>{data.author}</span>
                </h3>
                <p>{data.description}</p>
                <div className={styles.lowerContent}>
                  <a href={data.url} className={styles.readMore}>
                    Read More
                  </a>
                  <a href={data.url} className={styles.like}>
                    {data.like} Likes
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
