import styles from './Header.module.scss';
import { headerData } from '../../utils/dataConfig';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.headerInner}>
          <div className={styles.topLeft}>
            <div className={styles.socialIcon}>
              {headerData.socialIcon.map((data, index) => (
                <a href={data.url} key={index}>
                  <i className={data.icon}></i>
                </a>
              ))}
            </div>
            <p>Call for reservation: {headerData.reservationPhone}</p>
          </div>
          <div className={styles.topRight}>
            <p>Opening Hours : {headerData.openingHours}</p>
            <span></span>
            <span className={styles.icon}>
              <i className='fas fa-bag-shopping'></i>
              <span className={styles.count}>0</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
