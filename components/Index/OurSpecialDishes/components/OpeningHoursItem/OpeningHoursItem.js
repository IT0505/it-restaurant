import styles from './OpeningHoursItem.module.scss';

export default function OpeningHoursItem({ data }) {
  const { date, time } = data;
  return (
    <div className={styles.openingHoursItem}>
      <p className={styles.inlineText}>{date}</p>
      <p className={styles.inlineText}>{time}</p>
    </div>
  );
}
