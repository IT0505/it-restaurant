import styles from './Button.module.scss';

export default function Button(props) {
  const classImplement = props.classImplement;
  return (
    <button className={`${styles.button} ${classImplement}`}>
      {props.children}
    </button>
  );
}
