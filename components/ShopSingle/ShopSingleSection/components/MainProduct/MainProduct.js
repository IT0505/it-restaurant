import styles from './MainProduct.module.scss';
import StarRating from '../../../../StarRating/StarRating';
import { useState } from 'react';
import Button from '../../../../Button/Button';
import StarRatingInput from './components/StarRatingInput/StarRatingInput';
import ModalImage from '../../../../ModalImage/ModalImage';
import ReadMore from '../../../../ReadMore/ReadMore';
import ReviewComment from '../../../../ReviewComment/ReviewComment';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

const ReviewSchema = Yup.object().shape({
  starRating: Yup.number().required('Required').positive('Required').integer(),
  comment: Yup.string()
    .min(10, 'The comment must be more than 10 and less than 300 characters!')
    .max(300, 'The comment must be more than 10 and less than 300 characters!')
    .required('Required'),
  name: Yup.string()
    .min(5, 'The name must be more than 5 and less than 50 characters!')
    .max(50, 'The name must be more than 5 and less than 50 characters!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function MainProduct({ data, className }) {
  const {
    imgSrc,
    imgAlt,
    title,
    shortDescription,
    totalReviews,
    price,
    oldPrice,
    starRating,
    description,
    reviews,
  } = data;
  const [amountProduct, setAmountProduct] = useState(0);
  const [activeSubContent, setActiveSubContent] = useState('description');

  const handleAmountProduct = (e) => {
    setAmountProduct(e.target.value);
  };

  return (
    <div className={`${styles.mainProduct} ${className}`}>
      <div className={styles.mainInfo}>
        <figure className={styles.image}>
          <ModalImage src={imgSrc} alt={imgAlt} />
        </figure>
        <div className={styles.textWrap}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.inlineWrapReviews}>
            <StarRating rating={starRating} />
            <Link href='#reviews'>
              <a
                className={styles.totalReviews}
                onClick={() => setActiveSubContent('reviews')}
              >
                ({totalReviews} customer reviews)
              </a>
            </Link>
          </div>

          <p className={styles.shortDescription}>
            <ReadMore>{shortDescription}</ReadMore>
          </p>

          <div className={styles.inlineWrapPrice}>
            <p className={styles.oldPrice}>{oldPrice}</p>
            <p className={styles.price}>{price}</p>
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
            Reviews ({totalReviews})
          </Button>
        </div>

        {activeSubContent === 'description' && (
          <div className={styles.descriptionWrap}>
            <h2 className={styles.title}>description</h2>
            <p className={styles.description}>
              <ReadMore length={250}>{description}</ReadMore>
            </p>
          </div>
        )}
        {activeSubContent === 'reviews' && (
          <div className={styles.reviewsWrap} id='reviews'>
            <h2 className={styles.title}>
              {totalReviews} Reviews For {title}
            </h2>
            {reviews.map((item, index) => (
              <ReviewComment data={item} key={index} />
            ))}

            <Formik
              initialValues={{
                comment: '',
                name: '',
                email: '',
                starRating: 0,
              }}
              validationSchema={ReviewSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              <Form className={styles.reviewForm}>
                <p className={styles.reviewNote}>Add a review</p>
                <p className={styles.reviewNote}>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <p className={styles.reviewLabel}>Your rating</p>
                <Field
                  name='starRating'
                  component={StarRatingInput}
                  className={styles.starRatingInput}
                />
                <ErrorMessage
                  name='starRating'
                  render={(msg) => (
                    <span className={styles.errorMessage}>
                      <i className='fa-solid fa-triangle-exclamation'></i>
                      {msg}
                    </span>
                  )}
                />

                <label htmlFor='comment' className={styles.reviewLabel}>
                  Your review *
                </label>
                <Field
                  name='comment'
                  className={styles.textArea}
                  as='textarea'
                />
                <ErrorMessage
                  name='comment'
                  render={(msg) => (
                    <span className={styles.errorMessage}>
                      <i className='fa-solid fa-triangle-exclamation'></i>
                      {msg}
                    </span>
                  )}
                />

                <label htmlFor='name' className={styles.reviewLabel}>
                  Name *
                </label>
                <Field name='name' className={styles.input} />
                <ErrorMessage
                  name='name'
                  render={(msg) => (
                    <span className={styles.errorMessage}>
                      <i className='fa-solid fa-triangle-exclamation'></i>
                      {msg}
                    </span>
                  )}
                />

                <label htmlFor='email' className={styles.reviewLabel}>
                  Email *
                </label>
                <Field name='email' className={styles.input} />
                <ErrorMessage
                  name='email'
                  render={(msg) => (
                    <span className={styles.errorMessage}>
                      <i className='fa-solid fa-triangle-exclamation'></i>
                      {msg}
                    </span>
                  )}
                />

                <Button className={styles.button} type='submit'>
                  Submit
                </Button>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}
