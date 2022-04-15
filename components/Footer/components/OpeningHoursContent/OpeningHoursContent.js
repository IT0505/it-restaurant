import styles from './OpeningHoursContent.module.scss';

export default function OpeningHoursContent({ data }) {
  const { note, date, time } = data;
  return (
    <div className={styles.openingHoursContent}>
      {note ? (
        <p className={styles.inlineText}>{note}</p>
      ) : (
        <>
          <p className={styles.inlineText}>{date}</p>
          <span className={styles.inlineText}>..............</span>
          <p className={styles.inlineText}>{time}</p>
        </>
      )}
    </div>
  );
}
