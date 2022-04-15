import styles from './Button.module.scss';

export default function Button({ style, className, children, onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[style]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
