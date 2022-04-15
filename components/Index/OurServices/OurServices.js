import styles from './OurServices.module.scss';
import { ourServicesData } from '../../../utils/dataConfig';
import Image from 'next/image';
import MainTitle from '../../MainTitle/MainTitle';

export default function OurServices() {
  const { mainContent, title, slogan } = ourServicesData;
  return (
    <div className={styles.ourServices}>
      <div className='container'>
        <div className={`${styles.ourServicesInner} section`}>
          <MainTitle slogan={slogan} title={title} />
          <div className={styles.mainContent}>
            {mainContent.map((item, index) => (
              <div className={styles.content} key={index}>
                <div className={`${styles.image} animate zoomIn`}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    layout='responsive'
                  />
                </div>
                <a className={styles.title}>{item.title}</a>
                <p className={styles.description}>{item.description}</p>
                <a href={item.url} className={styles.url}>
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
