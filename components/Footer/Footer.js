import Image from 'next/image';
import logoImg from '../../assets/images/footer-logo.png';
import styles from './Footer.module.scss';
import { footerData } from '../../utils/dataConfig';

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className='container'>
          <div className={styles.footerInner}>
            <div className={`${styles.aboutWidget} ${styles.contentWrap}`}>
              <figure className={styles.logo}>
                <Image src={logoImg} alt='logo' objectFit='contain' />
              </figure>
              <p>{footerData.aboutWidget.text}</p>
              <span className={styles.contactInfo}>
                <i className='fas fa-phone'></i> Phone :
                {footerData.aboutWidget.phone}
              </span>
              <span className={styles.contactInfo}>
                <i className='fa-solid fa-envelope'></i> Email :
                {footerData.aboutWidget.email}
              </span>
            </div>

            <div className={`${styles.usefulLink} ${styles.contentWrap}`}>
              <h2>Useful Link</h2>
              {footerData.usefulLink.map((data, index) => (
                <a href={data.url} key={index}>
                  {data.text}
                </a>
              ))}
            </div>

            <div className={`${styles.latestBlog} ${styles.contentWrap}`}>
              <h2>Latest Blog Post</h2>
              {footerData.latestBlog.map((data, index) => (
                <div className={styles.latestBlogContent} key={index}>
                  <figure className={styles.blogImage}>
                    <Image src={data.imgSrc} alt={data.imgAlt} layout='fill' />
                    <a href={data.url}>
                      <i
                        className='fa-solid fa-link'
                        style={{ fontSize: '16px' }}
                      ></i>
                    </a>
                  </figure>
                  <div className={styles.blogText}>
                    <a href={data.url}>{data.title}</a>
                    <p>{data.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.openingHours} ${styles.contentWrap}`}>
              <h2>Opening Hours</h2>
              {footerData.openingHours.map((data, index) =>
                data.note ? (
                  <p key={index}>{data.note}</p>
                ) : (
                  <div className={styles.openingHoursContent} key={index}>
                    <p>{data.date}</p>
                    <span>..............</span>
                    <p>{data.hours}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className='container'>
          <div className={styles.footerBottomInner}>
            <p>Copyright © 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
