import styles from './RelatedProductItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from '../../../../Icons/Icons';
import StarRating from '../StarRating/StarRating';

export default function RelatedProductItem({ data }) {
  return (
    <div className={styles.relatedProductItem}>
      <figure className={styles.image}>
        <Image src={data.imgSrc} alt={data.imgAlt} layout='responsive' />
        <Link href='#'>
          <a className={styles.addCart}>
            <ShoppingBag
              size='20px'
              fill='#fff'
              stroke='#fff'
              strokeWidth='1'
              className={styles.icon}
            />
            Add to Bag
          </a>
        </Link>
      </figure>
      <Link href='#'>
        <a className={styles.inlineLink}>
          {data.name}
          <span className={styles.inlinePrice}>
            <p className={styles.oldPrice}>{data.oldPrice}</p>
            <p className={styles.price}>{data.price}</p>
          </span>
        </a>
      </Link>
      <p className={styles.description}>
        {data.description.slice(0, 28)}
        {data.description.length >= 28 && '...'}
      </p>
      <StarRating rating={data.starRating} />
    </div>
  );
}
