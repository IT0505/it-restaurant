import styles from './StarRatingInput.module.scss';
import { useState } from 'react';
export default function StarRatingInput({ className }) {
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
          checked={starRating === '1'}
          value='1'
          onChange={handleStarRating}
        />
        <label
          htmlFor='oneStar'
          className={`${styles.oneStar} ${starRating === '1' && styles.active}`}
        >
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
        </label>
        <input
          type='radio'
          id='twoStars'
          name='starRating'
          checked={starRating === '2'}
          value='2'
          onChange={handleStarRating}
        />
        <label
          htmlFor='twoStars'
          className={`${styles.twoStars} ${
            starRating === '2' && styles.active
          }`}
        >
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
        </label>
        <input
          type='radio'
          id='threeStars'
          name='starRating'
          checked={starRating === '3'}
          value='3'
          onChange={handleStarRating}
        />
        <label
          htmlFor='threeStars'
          className={`${styles.threeStars} ${
            starRating === '3' && styles.active
          }`}
        >
          <i className={`fa-solid fa-star ${styles.firstStar}`}></i>
          <i className={`fa-solid fa-star ${styles.secondStar}`}></i>
          <i className={`fa-solid fa-star ${styles.thirdStar}`}></i>
        </label>
        <input
          type='radio'
          id='fourStars'
          name='starRating'
          checked={starRating === '4'}
          value='4'
          onChange={handleStarRating}
        />
        <label
          htmlFor='fourStars'
          className={`${styles.fourStars} ${
            starRating === '4' && styles.active
          }`}
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
          checked={starRating === '5'}
          value='5'
          onChange={handleStarRating}
        />
        <label
          htmlFor='fiveStars'
          className={`${styles.fiveStars} ${
            starRating === '5' && styles.active
          }`}
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
