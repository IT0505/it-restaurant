import styles from './Header.module.scss';
import { headerData } from '../../utils/dataConfig';
import { ShoppingBag } from '../../components/Icons/Icons.js';
// import { FaBitcoin } from 'react-icons/fa';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.headerInner}>
          <div className={styles.topLeft}>
            <div className={styles.socialIcon}>
              {headerData.socialIcon.map((item, index) => (
                <a href={item.url} key={index}>
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
            <p>Call for reservation: {headerData.reservationPhone}</p>
          </div>
          <div className={styles.topRight}>
            <p>Opening Hours : {headerData.openingHours}</p>
            <span className={styles.space}></span>
            <span className={styles.iconWrap}>
              <ShoppingBag size='20px' fill='#fff' strokeWidth='1' />
              <span className={styles.count}>0</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
