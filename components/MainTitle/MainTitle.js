import styles from './MainTitle.module.scss';

export default function MainTitle(props) {
  return (
    <div className={`${styles.mainTitle} ${props.classImplement}`}>
      <h2>{props.children}</h2>
      <h3>{props.slogan}</h3>
    </div>
  );
}
