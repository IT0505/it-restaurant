import styles from './MainTitle.module.scss';

export default function MainTitle(props) {
  const style = props.style;
  return (
    <div
      className={`${styles.mainTitle} ${style === 2 && styles.style2} ${
        props.classImplement
      }`}
    >
      <h2>{props.title}</h2>
      <h3>{props.slogan}</h3>
    </div>
  );
}
