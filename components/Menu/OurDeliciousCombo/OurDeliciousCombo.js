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
          <MainTitle slogan={ourDeliciousComboData.slogan}>
            {ourDeliciousComboData.title}
          </MainTitle>
          <div className={styles.mainContent}>
            {mainContent.map((data, index) => (
              <div
                className={`${styles.content} animate ${
                  // index % 6 === 0 || index % 6 === 1 || index % 6 === 2
                  'fadeInLeft'
                  // : 'fadeInRight'
                }`}
                key={index}
              >
                <a className={styles.image} href={data.url}>
                  {data.status && (
                    <span className={styles.status}>{data.status}</span>
                  )}
                  <Image src={data.imgSrc} alt={data.imgAlt} />
                </a>
                <a href={data.url} className={styles.link}>
                  <p className={styles.name}>{data.name}</p>
                  <span className={styles.price}>{data.price}</span>
                </a>
                <p className={styles.description}>{data.description}</p>
              </div>
            ))}
          </div>
          <Button classImplement={styles.button}>Book My Table</Button>
        </div>
      </div>
    </div>
  );
}
