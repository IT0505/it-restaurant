import styles from './SocialIcon.module.scss';
import { headerData } from '../../../../utils/dataConfig';

export default function SocialIcon() {
  return (
    <div className={styles.socialIconWrap}>
      {headerData.socialIcon.map((data, index) => (
        <a href={data.url} key={index} className={styles.socialIcon}>
          <i className={data.icon}></i>
        </a>
      ))}
    </div>
  );
}
