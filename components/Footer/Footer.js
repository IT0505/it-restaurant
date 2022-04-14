import Image from 'next/image';
import styles from './Footer.module.scss';
import { footerData } from '../../utils/dataConfig';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className='container'>
          <div className={styles.footerInner}>
            <div className={`${styles.aboutWidget} ${styles.contentWrap}`}>
              <Link href='/'>
                <a className={styles.logo}>
                  <Image
                    src={footerData.aboutWidget.logoSrc}
                    alt={footerData.aboutWidget.logoAlt}
                    layout='responsive'
                  />
                </a>
              </Link>
              <p>{footerData.aboutWidget.text}</p>
              <span className={styles.contactInfo}>
                <i className='fas fa-phone' aria-hidden></i> Phone :
                {footerData.aboutWidget.phone}
              </span>
              <span className={styles.contactInfo}>
                <i className='fa-solid fa-envelope' aria-hidden></i> Email :
                {footerData.aboutWidget.email}
              </span>
            </div>

            <div className={`${styles.usefulLink} ${styles.contentWrap}`}>
              <h2>Useful Link</h2>
              {footerData.usefulLink.map((item, index) => (
                <a href={item.url} key={index}>
                  {item.text}
                </a>
              ))}
            </div>

            <div className={`${styles.latestBlog} ${styles.contentWrap}`}>
              <h2>Latest Blog Post</h2>
              {footerData.latestBlog.map((item, index) => (
                <div className={styles.latestBlogContent} key={index}>
                  <figure className={styles.blogImage}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      layout='responsive'
                    />
                    <a href={item.url}>
                      <i
                        className='fa-solid fa-link'
                        style={{ fontSize: '16px' }}
                        aria-hidden
                      ></i>
                    </a>
                  </figure>
                  <div className={styles.blogText}>
                    <a href={item.url}>{item.title}</a>
                    <p>{item.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.openingHours} ${styles.contentWrap}`}>
              <h2>Opening Hours</h2>
              {footerData.openingHours.map((item, index) =>
                item.note ? (
                  <p key={index}>{item.note}</p>
                ) : (
                  <div className={styles.openingHoursContent} key={index}>
                    <p>{item.date}</p>
                    <span>..............</span>
                    <p>{item.hours}</p>
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
    </footer>
  );
}
