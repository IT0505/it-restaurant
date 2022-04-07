import styles from './Navigation.module.scss';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import logoImg from '../../assets/images/logo.png';
import logoImg2 from '../../assets/images/logo-2.png';
import Button from '../Button/Button';
import Submenu from './components/Submenu/Submenu';
// import SocialIcon from './components/SocialIcon/SocialIcon';
import { navigationData } from '../../utils/dataConfig';
import Link from 'next/link';

export default function Navigation() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    window.addEventListener('load', (e) => {
      if (window.pageYOffset <= 200) {
        setTop(true);
      } else setTop(false);
    });
    window.addEventListener('scroll', () => {
      if (window.pageYOffset <= 200) {
        setTop(true);
      } else setTop(false);
    });
  }, [top]);

  return (
    <div
      className={`${styles.navigation} ${!top && styles.nonTop}`}
      // style={{ position: !top && 'fixed' }}
    >
      <div className='container'>
        <div className={styles.navigationInner}>
          <Link href='/'>
            <a className={styles.logo}>
              <Image src={logoImg} alt='logo' layout='responsive'></Image>
            </a>
          </Link>
          <div
            className={`${styles.navigationRight} ${
              navigationOpen && styles.open
            }`}
          >
            <button
              type='button'
              className={styles.closeButton}
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <i className='fa-solid fa-xmark'></i>
            </button>
            <Link href='/'>
              <a className={styles.logo1}>
                <Image src={logoImg2} alt='logo' layout='responsive'></Image>
              </a>
            </Link>

            {navigationData.menuItems.map((item, index) => (
              <div className={styles.menuItemWrap} key={index}>
                {item.url ? (
                  <Link href={item.url}>
                    <a className={styles.menuItem}>{item.title}</a>
                  </Link>
                ) : (
                  <>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      id={item.title}
                      name={item.title}
                    ></input>
                    <label className={styles.icon} htmlFor={item.title}>
                      <i className='fa-solid fa-angle-right'></i>
                    </label>
                    <p className={styles.menuItem}>{item.title}</p>
                    <Submenu
                      submenu={item.submenu}
                      className={styles.submenu}
                    />
                  </>
                )}
              </div>
            ))}

            <div className={styles.socialIconWrap}>
              {navigationData.socialIcon.map((item, index) => (
                <a href={item.url} key={index} className={styles.socialIcon}>
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>

            <Button className={styles.button}>Reservation</Button>
          </div>
          <button
            type='button'
            className={styles.menuButton}
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>
      </div>
    </div>
  );
}
