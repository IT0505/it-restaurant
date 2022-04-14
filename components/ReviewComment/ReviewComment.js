import styles from './ReviewComment.module.scss';
import Image from 'next/image';
import StarRating from '../StarRating/StarRating';
export default function ReviewComment({ data }) {
  const { imgSrc, imgAlt, starRating, name, date, comment } = data;
  return (
    <div className={styles.reviewComment}>
      <figure className={styles.image}>
        <Image src={imgSrc} alt={imgAlt} layout='responsive' />
      </figure>
      <div className={styles.reviewCommentInner}>
        <StarRating rating={starRating} />
        <p className={styles.inlineText}>
          <span className={styles.highlight}>{name}</span> – {date}
        </p>
        <p className={styles.comment}>{comment}</p>
      </div>
    </div>
  );
}
