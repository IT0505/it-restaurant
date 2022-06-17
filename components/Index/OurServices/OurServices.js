import styles from './OurServices.module.scss';
import Image from 'next/image';
import MainTitle from '../../MainTitle/MainTitle';
import Link from 'next/link';
import { attributes } from '../../../content/home.md';

export default function OurServices() {
  const {
    section4: { title, slogan, listServices },
  } = attributes;

  return (
    <div className={styles.ourServices}>
      <div className='container'>
        <div className={`${styles.ourServicesInner} section`}>
          <MainTitle slogan={slogan} title={title} />
          <div className={styles.mainContent}>
            {listServices.map((item, index) => (
              <div className={styles.content} key={index}>
                <div className={`${styles.image} animate zoomIn`}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <Link href={item.url}>
                  <a className={styles.title}>{item.title}</a>
                </Link>
                <p className={styles.description}>{item.description}</p>
                <Link href={item.url}>
                  <a className={styles.url}>Read More</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
