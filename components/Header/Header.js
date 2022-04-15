import styles from './Header.module.scss';
import { headerData } from '../../utils/dataConfig';
import { ShoppingBag } from '../../components/Icons/Icons.js';
import Navigation from './components/Navigation/Navigation';
import SocialIcon from '../SocialIcon/SocialIcon';
export default function Header() {
  const {
    navigation,
    socialIcons,
    headerInfo: { reservationPhone, openingHours },
  } = headerData;
  // const { reservationPhone, openingHours } = headerInfo;
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className='container'>
          <div className={styles.headerInner}>
            <div className={styles.topLeft}>
              <div className={styles.socialIcons}>
                {socialIcons.map((item, index) => (
                  <SocialIcon data={item} key={index} />
                ))}
              </div>
              <p>Call for reservation: {reservationPhone}</p>
            </div>
            <div className={styles.topRight}>
              <p>Opening Hours : {openingHours}</p>
              <span className={styles.space}></span>
              <span className={styles.iconWrap}>
                <ShoppingBag size='20px' fill='#fff' strokeWidth='1' />
                <span className={styles.count}>0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Navigation data={{ navigation, socialIcons }} />
    </header>
  );
}
