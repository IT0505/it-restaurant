import styles from './StarRating.module.scss';

export default function StarRating({ rating }) {
  const handleRating = () => {
    if (typeof rating === 'string' || rating instanceof String) return rating;
    else if (rating < 1 && rating > 0) return rating * 100 + '%';
    else return (rating / 5) * 100 + '%';
  };
  return (
    <div className={styles.starRating}>
      {rating && (
        <>
          <div className={styles.fillRating} style={{ width: handleRating() }}>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
          </div>
          <div className={styles.emptyRating}>
            <i className='fa-regular fa-star'></i>
            <i className='fa-regular fa-star'></i>
            <i className='fa-regular fa-star'></i>
            <i className='fa-regular fa-star'></i>
            <i className='fa-regular fa-star'></i>
          </div>
        </>
      )}
    </div>
  );
}
