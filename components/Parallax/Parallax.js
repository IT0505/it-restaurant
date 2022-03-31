import styles from './Parallax.module.scss';

export default function Parallax({
  style,
  className,
  backgroundImage,
  children,
}) {
  // const customStyle = props.style;
  // const classImplement = props.className;
  // const backgroundImageSrc = props.backgroundImage.src;
  return (
    <div
      className={`${styles.parallax} ${styles[style]} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {children}
    </div>
  );
}
