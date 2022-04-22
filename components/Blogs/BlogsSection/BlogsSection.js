// import fs from 'fs';
// import matter from 'gray-matter';
import styles from './BlogsSection.module.scss';
// import { blogsSectionData } from '../../../utils/dataConfig';
import BlogContent from '../../BlogContent/BlogContent';
import SideBar from '../../SideBar/SideBar';

export default function BlogsSection({ blogs }) {
  console.log(blogs);
  // const { mainContent } = blogsSectionData;
  return (
    <div className={`${styles.blogsSection} section`}>
      <div className='container'>
        <div className={styles.blogsSectionInner}>
          <div className={styles.blogList}>
            {blogs.map((item, index) => (
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

// export async function getStaticProps() {
//   // List of files in blgos folder
//   const filesInBlogs = fs.readdirSync('./content/blogs');

//   // Get the front matter and slug (the filename without .md) of all files
//   const blogs = filesInBlogs.map((filename) => {
//     const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8');
//     const { attributes } = require(`../../../content/blogs/${filename}`);

//     return {
//       ...attributes, // matterData.data contains front matter
//       slug: filename.slice(0, filename.indexOf('.')),
//     };
//   });

//   return {
//     props: {
//       blogs,
//     },
//   };
// }
