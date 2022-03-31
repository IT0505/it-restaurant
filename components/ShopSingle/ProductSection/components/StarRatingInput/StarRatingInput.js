import styles from './StarRatingInput.module.scss';
import { useState } from 'react';
export default function StarRatingInput({ className, onChange, value }) {
  const [starRating, setStarRating] = useState(0);

  const handleStarRating = (e) => {
    setStarRating(e.target.value);
  };
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
        <input
          type='radio'
          id='oneStar'
          name='starRating'
          checked={value === '1'}
          value='1'
          onChange={onChange}
        />
        <label
          htmlFor='oneStar'
          className={`${styles.oneStar} ${value === '1' && styles.active}`}
        >
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
        </label>
        <input
          type='radio'
          id='twoStars'
          name='starRating'
          checked={value === '2'}
          value='2'
          onChange={onChange}
        />
        <label
          htmlFor='twoStars'
          className={`${styles.twoStars} ${value === '2' && styles.active}`}
        >
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
        </label>
        <input
          type='radio'
          id='threeStars'
          name='starRating'
          checked={value === '3'}
          value='3'
          onChange={onChange}
        />
        <label
          htmlFor='threeStars'
          className={`${styles.threeStars} ${value === '3' && styles.active}`}
        >
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
          <i className={`fa-solid fa-star ${styles.thirdStar}`}></i>
        </label>
        <input
          type='radio'
          id='fourStars'
          name='starRating'
          checked={value === '4'}
          value='4'
          onChange={onChange}
        />
        <label
          htmlFor='fourStars'
          className={`${styles.fourStars} ${value === '4' && styles.active}`}
        >
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
          <i className={`fa-solid fa-star ${styles.thirdStar}`}></i>
          <i className={`fa-solid fa-star ${styles.fourthStar}`}></i>
        </label>
        <input
          type='radio'
          id='fiveStars'
          name='starRating'
          checked={value === '5'}
          value='5'
          onChange={onChange}
        />
        <label
          htmlFor='fiveStars'
          className={`${styles.fiveStars} ${value === '5' && styles.active}`}
        >
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
