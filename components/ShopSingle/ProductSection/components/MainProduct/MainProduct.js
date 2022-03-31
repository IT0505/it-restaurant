import styles from './MainProduct.module.scss';
// import { flyingNinjaProductData } from '../../../../../utils/dataConfig';
import Image from 'next/image';
import StarRating from '../StarRating/StarRating';
import { useState, useEffect } from 'react';
import Button from '../../../../Button/Button';
import StarRatingInput from '../StarRatingInput/StarRatingInput';
import ModalImage from '../../../../ModalImage/ModalImage';

export default function MainProduct({ data, className }) {
  const [amountProduct, setAmountProduct] = useState(0);
  const [reviewInput, setReviewInput] = useState({
    name: '',
    email: '',
    comment: '',
    starRating: 0,
  });
  const [activeSubContent, setActiveSubContent] = useState('description');
  const [modalImage, setModalImage] = useState(false);

  const handleAmountProduct = (e) => {
    setAmountProduct(e.target.value);
  };

  const handleReviewInput = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setReviewInput({
      ...reviewInput,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    console.log(reviewInput);
  });

  return (
    <div className={`${styles.mainProduct} ${className}`}>
      <div className={styles.mainInfo}>
        <figure className={styles.image} onClick={() => setModalImage(true)}>
          <Image src={data.imgSrc} alt={data.imgAlt} layout='responsive' />
        </figure>
        {modalImage && (
          <ModalImage
            src={data.imgSrc}
            alt={data.imgAlt}
            setVisibility={setModalImage}
            // visibility={modalImage}
          />
        )}
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
            Reviews ({data.totalReviews})
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
              <StarRatingInput
                className={styles.starRatingInput}
                value={reviewInput.starRating}
                onChange={(e) => handleReviewInput(e)}
              />
              <label htmlFor='comment' className={styles.reviewLabel}>
                Your review *
              </label>
              <textarea
                className={styles.textArea}
                id='comment'
                name='comment'
                type='text'
                cols='45'
                rows='8'
                value={reviewInput.comment}
                onChange={(e) => handleReviewInput(e)}
                required
              />
              <label htmlFor='name' className={styles.reviewLabel}>
                Name *
              </label>
              <input
                className={styles.input}
                id='name'
                name='name'
                type='text'
                size='30'
                value={reviewInput.name}
                onChange={(e) => handleReviewInput(e)}
                required
              />
              <label htmlFor='email' className={styles.reviewLabel}>
                Email *
              </label>
              <input
                className={styles.input}
                id='email'
                name='email'
                type='text'
                size='30'
                value={reviewInput.email}
                onChange={(e) => handleReviewInput(e)}
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
