import styles from './OurBlog.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { ourBlogData } from '../../../utils/dataConfig';
import Image from 'next/image';
import Link from 'next/link';
import BlogContent from '../../BlogContent/BlogContent';

export default function OurBlog() {
  const mainContent = ourBlogData.mainContent;
  return (
    <div className={`${styles.ourBlog} section`}>
      <div className='container'>
        <div className={styles.ourBlogInner}>
          <MainTitle slogan={ourBlogData.slogan} title={ourBlogData.title} />
          <div className={styles.mainContent}>
            {mainContent.map((item, index) => (
              <BlogContent
                className={`${styles.blogContent} animate fadeIn`}
                data={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
