import styles from './OurDeliciousCombo.module.scss';
import Image from 'next/image';
import MainTitle from '../../MainTitle/MainTitle';
import Button from '../../Button/Button';
import { ourDeliciousComboData } from '../../../utils/dataConfig';
export default function OurDeliciousCombo() {
  const mainContent = ourDeliciousComboData.mainContent;
  return (
    <div className={`${styles.ourDeliciousCombo} section`}>
      <div className='container'>
        <div className={styles.ourDeliciousComboInner}>
          <MainTitle
            slogan={ourDeliciousComboData.slogan}
            title={ourDeliciousComboData.title}
          />
          <div className={styles.mainContent}>
            {mainContent.map((item, index) => (
              <div
                className={`${styles.content} animate ${'fadeInLeft'}`}
                key={index}
              >
                <a className={styles.image} href={item.url}>
                  {item.status && (
                    <span className={styles.status}>{item.status}</span>
                  )}
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    layout='responsive'
                  />
                </a>
                <a href={item.url} className={styles.link}>
                  <p className={styles.name}>{item.name}</p>
                  <span className={styles.price}>{item.price}</span>
                </a>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
          <Button className={styles.button}>Book My Table</Button>
        </div>
      </div>
    </div>
  );
}
