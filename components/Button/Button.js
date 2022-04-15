import styles from './Button.module.scss';

export default function Button({ className, children, onClick }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
