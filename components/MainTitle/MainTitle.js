import styles from './MainTitle.module.scss';

export default function MainTitle({ title, slogan, style, className }) {
  return (
    <div className={`${styles.mainTitle} ${styles[style]} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.slogan}>{slogan}</h3>
    </div>
  );
}
