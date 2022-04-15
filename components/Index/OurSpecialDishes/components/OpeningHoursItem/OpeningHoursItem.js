import styles from './OpeningHoursItem.module.scss';

export default function OpeningHoursItem({ data }) {
  const { phone, note, date, time } = data;
  return (
    <div className={styles.openingHoursItem}>
      {phone ? (
        <p className={styles.phone}>{phone}</p>
      ) : (
        <>
          <p className={styles.inlineText}>{note}</p>
          <p className={styles.inlineText}>{date}</p>
          <p className={styles.inlineText}>{time}</p>
        </>
      )}
    </div>
  );
}
