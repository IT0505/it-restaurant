import styles from './ChefItem.module.scss';
import Image from 'next/image';
import SocialIcon from '../../../../SocialIcon/SocialIcon';
export default function ChefItem({ data }) {
  const { imgSrc, imgAlt, socialIcons, name, position } = data;
  return (
    <div className={styles.chefItem}>
      <figure className={styles.image}>
        <Image src={imgSrc} alt={imgAlt} layout='responsive' />
        <figcaption className={styles.caption}>
          {socialIcons.map((item, index) => (
            <SocialIcon data={item} key={index} style={'style2'} />
          ))}
        </figcaption>
      </figure>
      <div className={styles.lowerContent}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
}
