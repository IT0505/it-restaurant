import styles from './StarRatingInput.module.scss';
// import { useState } from 'react';
export default function StarRatingInput({
  className,
  field,
  form: { values },
}) {
  const value = values.starRating;

  return (
    <div className={`${styles.starRatingInput} ${className}`}>
      <div className={styles.emptyRating}>
        <i className={`fa-regular fa-star ${styles.firstStar}`}></i>
        <i className={`fa-regular fa-star ${styles.secondStar}`}></i>
        <i className={`fa-regular fa-star ${styles.thirdStar}`}></i>
        <i className={`fa-regular fa-star ${styles.fourthStar}`}></i>
        <i className={`fa-regular fa-star ${styles.fifthStar}`}></i>
      </div>
      <div className={styles.fillRating}>
        <label
          className={`${styles.oneStar} ${value === '1' && styles.active}`}
        >
          <input type='radio' {...field} value='1' />
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
        </label>

        <label
          className={`${styles.twoStars} ${value === '2' && styles.active}`}
        >
          <input type='radio' {...field} value='2' />
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
        </label>

        <label
          className={`${styles.threeStars} ${value === '3' && styles.active}`}
        >
          <input type='radio' {...field} value='3' />
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
          <i className={`fa-solid fa-star ${styles.thirdStar}`}></i>
        </label>

        <label
          className={`${styles.fourStars} ${value === '4' && styles.active}`}
        >
          <input type='radio' {...field} value='4' />
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
          <i className={`fa-solid fa-star ${styles.thirdStar}`}></i>
          <i className={`fa-solid fa-star ${styles.fourthStar}`}></i>
        </label>

        <label
          className={`${styles.fiveStars} ${value === '5' && styles.active}`}
        >
          <input type='radio' {...field} value='5' />
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
          <i className={`fa-solid fa-star ${styles.thirdStar}`}></i>
          <i className={`fa-solid fa-star ${styles.fourthStar}`}></i>
          <i className={`fa-solid fa-star ${styles.fifthStar}`}></i>
        </label>
      </div>
    </div>
  );
}
