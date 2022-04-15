import styles from './FoodCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from '../Icons/Icons';
import StarRating from '../StarRating/StarRating';

export default function FoodCard({ data }) {
  const {
    status,
    imgSrc,
    imgAlt,
    name,
    description,
    price,
    oldPrice,
    starRating,
  } = data;
  return (
    <div className={styles.foodCard}>
      <Link href='#'>
        <a className={styles.image}>
          {status && <span className={styles.status}>{status}</span>}
          <Image src={imgSrc} alt={imgAlt} layout='responsive' />
          <span className={styles.addCart}>
            <ShoppingBag
              size='20px'
              fill='#fff'
              stroke='#fff'
              strokeWidth='1'
              className={styles.icon}
            />
            Add to Bag
          </span>
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.inlineLink}>
          {name}
          <span className={styles.inlinePrice}>
            <p className={styles.oldPrice}>{oldPrice}</p>
            <p className={styles.price}>{price}</p>
          </span>
        </a>
      </Link>
      <p className={styles.description}>
        {description.slice(0, 28)}
        {description.length >= 28 && '...'}
      </p>
      <StarRating rating={starRating} />
    </div>
  );
}
