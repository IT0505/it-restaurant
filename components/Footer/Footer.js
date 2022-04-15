import Image from 'next/image';
import styles from './Footer.module.scss';
import { footerData } from '../../utils/dataConfig';
import Link from 'next/link';
import LatestBlogContent from './components/LatestBlogContent/LatestBlogContent';
import OpeningHoursContent from './components/OpeningHoursContent/OpeningHoursContent';
import UsefulLinkContent from './components/UsefulLinkContent/UsefulLinkContent';

export default function Footer() {
  const {
    aboutWidget: { logoSrc, logoAlt, phone, email, description },
    latestBlog,
    openingHours,
    usefulLink,
    copyright,
  } = footerData;
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className='container'>
          <div className={styles.footerInner}>
            <div className={`${styles.contentWrap} ${styles.aboutWidget}`}>
              <Link href='/'>
                <a className={styles.logo}>
                  <Image src={logoSrc} alt={logoAlt} layout='responsive' />
                </a>
              </Link>
              <p className={styles.description}>{description}</p>
              <span className={styles.contactInfo}>
                <i className='fas fa-phone' aria-hidden></i> Phone: {phone}
              </span>
              <span className={styles.contactInfo}>
                <i className='fa-solid fa-envelope' aria-hidden></i> Email:{' '}
                {email}
              </span>
            </div>

            <div className={`${styles.contentWrap} ${styles.usefulLink}`}>
              <h2 className={styles.title}>Useful Link</h2>
              {usefulLink.map((item, index) => (
                <UsefulLinkContent data={item} key={index} />
              ))}
            </div>

            <div className={`${styles.contentWrap} ${styles.latestBlog}`}>
              <h2 className={styles.title}>Latest Blog Post</h2>
              {latestBlog.map((item, index) => (
                <LatestBlogContent data={item} key={index} />
              ))}
            </div>

            <div className={`${styles.contentWrap} ${styles.openingHours}`}>
              <h2 className={styles.title}>Opening Hours</h2>
              {openingHours.map((item, index) => (
                <OpeningHoursContent data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className='container'>
          <div className={styles.footerBottomInner}>
            <p className={styles.copyright}>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
