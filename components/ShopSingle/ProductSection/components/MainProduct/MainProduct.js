import styles from './MainProduct.module.scss';
// import { flyingNinjaProductData } from '../../../../../utils/dataConfig';
import Image from 'next/image';
import StarRating from '../StarRating/StarRating';
import { useState } from 'react';
import Button from '../../../../Button/Button';
import StarRatingInput from '../StarRatingInput/StarRatingInput';
export default function MainProduct({ data, className }) {
  const [amountProduct, setAmountProduct] = useState(0);
  const handleAmountProduct = (e) => {
    setAmountProduct(e.target.value);
  };

  const [activeSubContent, setActiveSubContent] = useState('description');

  return (
    <div className={`${styles.mainProduct} ${className}`}>
      <div className={styles.mainInfo}>
        <figure className={styles.image}>
          <Image src={data.imgSrc} alt={data.imgAlt} layout='responsive' />
        </figure>
        <div className={styles.textWrap}>
          <h3 className={styles.title}>{data.title}</h3>

          <div className={styles.inlineWrapReviews}>
            <StarRating rating={data.starRating} />
            <a className={styles.totalReviews} href='#'>
              ({data.totalReviews} customer reviews)
            </a>
          </div>

          <p className={styles.shortDescription}>{data.shortDescription}</p>

          <div className={styles.inlineWrapPrice}>
            <p className={styles.oldPrice}>{data.oldPrice}</p>
            <p className={styles.price}>{data.price}</p>
          </div>

          <div className={styles.inlineWrapFunc}>
            <input
              className={styles.input}
              type='number'
              name='amountProduct'
              value={amountProduct}
              onChange={(e) => handleAmountProduct(e)}
            />
            <Button className={styles.button}>Add To Cart</Button>
          </div>
        </div>
      </div>

      <div className={styles.subInfo}>
        <div className={styles.buttonWrap}>
          <Button
            className={`${styles.button} ${
              activeSubContent === 'description' && styles.active
            }`}
            onClick={() => setActiveSubContent('description')}
          >
            Description
          </Button>
          <Button
            className={`${styles.button} ${
              activeSubContent === 'reviews' && styles.active
            }`}
            onClick={() => setActiveSubContent('reviews')}
          >
            Reviews ({'4'})
          </Button>
        </div>

        {activeSubContent === 'description' && (
          <div className={styles.descriptionWrap}>
            <h2 className={styles.title}>description</h2>
            <p>{data.description}</p>
          </div>
        )}
        {activeSubContent === 'reviews' && (
          <div className={styles.reviewsWrap}>
            <h2 className={styles.title}>
              {data.totalReviews} Reviews For {data.title}
            </h2>
            {data.reviews.map((item, index) => (
              <div className={styles.review} key={index}>
                <figure className={styles.image}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    layout='responsive'
                  />
                </figure>
                <div className={styles.reviewInner}>
                  <StarRating rating={item.starRating} />
                  <p className={styles.inlineText}>
                    <b>{item.name}</b> – {item.date}
                  </p>
                  <p className={styles.comment}>{item.comment}</p>
                </div>
              </div>
            ))}

            <p>Add a review</p>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>

            <form className={styles.reviewForm}>
              <h3 className={styles.ratingTitle}>Your rating</h3>
              <StarRatingInput className={styles.starRatingInput} />
              <label htmlFor='reviewComment' className={styles.reviewLabel}>
                Your review *
              </label>
              <textarea
                className={styles.textArea}
                id='reviewComment'
                name='reviewComment'
                cols='45'
                rows='8'
                required
              />
              <label htmlFor='reviewName' className={styles.reviewLabel}>
                Name *
              </label>
              <input
                className={styles.input}
                id='reviewName'
                name='reviewName'
                size='30'
                required
              />
              <label htmlFor='reviewEmail' className={styles.reviewLabel}>
                Email *
              </label>
              <input
                className={styles.input}
                id='reviewEmail'
                name='reviewEmail'
                size='30'
                required
              />
              <Button className={styles.button}>Submit</Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
