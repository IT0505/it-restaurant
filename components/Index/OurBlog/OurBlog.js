import styles from './OurBlog.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { ourBlogData } from '../../../utils/dataConfig';
import BlogContent from '../../BlogContent/BlogContent';

export default function OurBlog() {
  const { mainContent, title, slogan } = ourBlogData;
  return (
    <div className={`${styles.ourBlog} section`}>
      <div className='container'>
        <div className={styles.ourBlogInner}>
          <MainTitle slogan={slogan} title={title} />
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
