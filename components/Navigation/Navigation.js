import styles from './Navigation.module.scss';
import Image from 'next/image';
import logoImg from '../../assets/images/logo.png';
import Button from '../Button/Button';
import Submenu from './components/Submenu/Submenu';
import { navigationData } from '../../utils/dataConfig';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className='container'>
        <div className={styles.navigationInner}>
          <a href='#' className={styles.logo}>
            <Image src={logoImg} alt='logo'></Image>
          </a>
          <div className={styles.navigationRight}>
            <ul>
              {navigationData.menuItems.map((data, index) => (
                <li key={index}>
                  {data.url ? (
                    <a className={styles.menuItem} href={data.url}>
                      {data.title}
                    </a>
                  ) : (
                    <span className={styles.menuItem}>
                      {data.title}
                      <Submenu
                        submenu={data.submenu}
                        classImplement={styles.submenu}
                      />
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <Button>Reservation</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
