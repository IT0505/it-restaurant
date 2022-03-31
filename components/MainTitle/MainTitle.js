import styles from './MainTitle.module.scss';

export default function MainTitle({ title, slogan, style, className }) {
  // const customStyle = props.style;
  // const classImplement = props.className;
  return (
    <div className={`${styles.mainTitle} ${styles[style]} ${className}`}>
      <h2>{title}</h2>
      <h3>{slogan}</h3>
    </div>
  );
}
