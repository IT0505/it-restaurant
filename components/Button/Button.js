import styles from './Button.module.scss';

export default function Button({ style, className, children, onClick }) {
  // const customStyle = props.style;
  // const classImplement = props.className;
  return (
    <button
      className={`${styles.button} ${styles[style]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
