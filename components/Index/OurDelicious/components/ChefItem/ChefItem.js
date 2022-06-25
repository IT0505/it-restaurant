import styles from './ChefItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default function ChefItem({ data }) {
  const { imgSrc, imgAlt, social, name, position } = data;
  return (
    <div className={styles.chefItem}>
      <figure className={styles.image}>
        <Image src={imgSrc} alt={imgAlt} layout='responsive' />
        <figcaption className={styles.caption}>
          <Link href={social.facebook}>
            <a className={`${styles.socialIcon}`}>
              <i className='fa-brands fa-facebook-f'></i>
            </a>
          </Link>
          <Link href={social.twitter}>
            <a className={`${styles.socialIcon}`}>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </Link>
          <Link href={social.google}>
            <a className={`${styles.socialIcon}`}>
              <i className='fa-brands fa-google-plus-g'></i>
            </a>
          </Link>
          <Link href={social.tumblr}>
            <a className={`${styles.socialIcon}`}>
              <i className='fa-brands fa-tumblr'></i>
            </a>
          </Link>
          <Link href={social.vimeo}>
            <a className={`${styles.socialIcon}`}>
              <i className='fa-brands fa-vimeo-square'></i>
            </a>
          </Link>
        </figcaption>
      </figure>
      <div className={styles.lowerContent}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
}
