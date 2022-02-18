import styles from './Parallax.module.scss';

export default function Parallax(props) {
  const classImplement = props.classImplement;
  const backgroundImageSrc = props.backgroundImage.src;
  return (
    <div
      className={`${styles.parallax} ${classImplement}`}
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    >
      {props.children}
    </div>
  );
}
