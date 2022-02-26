import styles from './Navigation.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.png';
import logoImg2 from '../../assets/images/logo-2.png';
import Button from '../Button/Button';
import Submenu from './components/Submenu/Submenu';
import SocialIcon from './components/SocialIcon/SocialIcon';
import { navigationData } from '../../utils/dataConfig';

export default function Navigation() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    // window.onscroll = () => {
    //   if (window.pageYOffset === 0) {
    //     setTop(true);
    //   } else {
    //     setTop(false);
    //   }
    // };
    window.addEventListener('scroll', () => {
      if (window.pageYOffset === 0) {
        setTop(true);
      } else setTop(false);
    });
    console.log(top);
  }, [top]);

  return (
    <div
      className={`${styles.navigation} ${!top && styles.nonTop}`}
      // style={{ position: !top && 'fixed' }}
    >
      <div className='container'>
        <div className={styles.navigationInner}>
          <a href='#' className={styles.logo}>
            <Image src={logoImg} alt='logo'></Image>
          </a>
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
            <a href='#' className={styles.logo}>
              <Image src={logoImg2} alt='logo'></Image>
            </a>

            {navigationData.menuItems.map((data, index) => (
              <div className={styles.menuItemWrap} key={index}>
                {data.url ? (
                  <a className={styles.menuItem} href={data.url}>
                    {data.title}
                  </a>
                ) : (
                  <>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      id={data.title}
                      name={data.title}
                    ></input>
                    <label className={styles.menuItem} htmlFor={data.title}>
                      {data.title}
                      <span className={styles.icon}>
                        <i className='fa-solid fa-angle-right'></i>
                      </span>
                    </label>
                    <Submenu
                      submenu={data.submenu}
                      classImplement={styles.submenu}
                    />
                  </>
                )}
              </div>
            ))}
            <SocialIcon />
            <Button classImplement={styles.button}>Reservation</Button>
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
