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
          <MainTitle slogan={ourBlogData.slogan} title={ourBlogData.title} />
          <div className={styles.mainContent}>
            {mainContent.map((item, index) => (
              <div className={`${styles.content} animate fadeIn`} key={index}>
                <a className={styles.image} href={item.url}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    layout='responsive'
                  ></Image>
                </a>
                <a href={item.url} className={styles.title}>
                  {item.title}
                </a>
                <h3 className={styles.time}>
                  {item.time} by <span>{item.author}</span>
                </h3>
                <p>{item.description}</p>
                <div className={styles.lowerContent}>
                  <a href={item.url} className={styles.url}>
                    Read More
                  </a>
                  <a href={item.url} className={styles.like}>
                    {item.like} Likes
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
