import styles from './OurServices.module.scss';
import { ourServicesData } from '../../../utils/dataConfig';
import Image from 'next/image';
import MainTitle from '../../MainTitle/MainTitle';

export default function OurServices() {
  const mainContent = ourServicesData.mainContent;
  return (
    <div className={styles.ourServices}>
      <div className='container'>
        <div className={`${styles.ourServicesInner} section`}>
          <MainTitle slogan={ourServicesData.slogan}>
            {ourServicesData.title}
          </MainTitle>
          <div className={styles.mainContent}>
            {mainContent.map((data, index) => (
              <div className={styles.content} key={index}>
                <div className={`${styles.image} animate zoomIn`}>
                  <Image src={data.imgSrc} alt={data.imgAlt} />
                </div>
                <a className={styles.title}>{data.title}</a>
                <p className={styles.description}>{data.description}</p>
                <a href={data.url} className={styles.url}>
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
