import styles from './BlogSection.module.scss';
import { blogSectionData } from '../../../utils/dataConfig';
import BlogContent from '../../BlogContent/BlogContent';
import SideBar from '../../SideBar/SideBar';
export default function BlogSection() {
  return (
    <div className={`${styles.blogSection} section`}>
      <div className='container'>
        <div className={styles.blogSectionInner}>
          <div className={styles.blogList}>
            {blogSectionData.mainContent.map((item, index) => (
              <BlogContent
                className={styles.blogContent}
                data={item}
                key={index}
              />
            ))}
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
}
