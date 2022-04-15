import styles from './ContactSection.module.scss';
import { contactSectionData } from '../../../utils/dataConfig';
import Image from 'next/image';
import Button from '../../Button/Button';
import MainTitle from '../../MainTitle/MainTitle';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const contactSchema = Yup.object().shape({
  starRating: Yup.number().required('Required').positive('Required').integer(),
  description: Yup.string().required('Required'),
  name: Yup.string()
    .min(5, 'The name must be more than 5 and less than 50 characters!')
    .max(50, 'The name must be more than 5 and less than 50 characters!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

export default function ContactSection() {
  const { title, slogan, imgSrc, imgAlt } = contactSectionData;
  return (
    <div className={`${styles.contactSection} section`}>
      <div className='container'>
        <div className={styles.contactSectionInner}>
          <figure className={styles.contactImage}>
            <Image src={imgSrc} alt={imgAlt} layout='responsive' />
          </figure>
          <div className={styles.contactFormWrap}>
            <MainTitle slogan={slogan} title={title} style='style2' />
            <Formik
              initialValues={{
                description: '',
                name: '',
                email: '',
                phone: '',
              }}
              validationSchema={contactSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              <Form className={styles.contactForm}>
                <div className={styles.inputWrap}>
                  <Field
                    name='name'
                    className={styles.input}
                    placeholder='Name'
                  />
                  <ErrorMessage
                    name='name'
                    render={(msg) => (
                      <span className={styles.errorMessage}>
                        <i className='fa-solid fa-triangle-exclamation'></i>
                        {msg}
                      </span>
                    )}
                  />
                </div>
                <div className={styles.inputWrap}>
                  <Field
                    name='email'
                    className={styles.input}
                    placeholder='Email'
                  />
                  <ErrorMessage
                    name='email'
                    render={(msg) => (
                      <span className={styles.errorMessage}>
                        <i className='fa-solid fa-triangle-exclamation'></i>
                        {msg}
                      </span>
                    )}
                  />
                </div>
                <div className={styles.inputWrap}>
                  <Field
                    name='phone'
                    className={styles.input}
                    placeholder='Phone'
                  />
                  <ErrorMessage
                    name='phone'
                    render={(msg) => (
                      <span className={styles.errorMessage}>
                        <i className='fa-solid fa-triangle-exclamation'></i>
                        {msg}
                      </span>
                    )}
                  />
                </div>
                <div />
                <div className={`${styles.inputWrap} ${styles.fullWidth}`}>
                  <Field
                    name='description'
                    className={styles.textArea}
                    as='textarea'
                    cols='40'
                    rows='10'
                    placeholder='Your Need & Description'
                  />
                  <ErrorMessage
                    name='description'
                    render={(msg) => (
                      <span className={styles.errorMessage}>
                        <i className='fa-solid fa-triangle-exclamation'></i>
                        {msg}
                      </span>
                    )}
                  />
                </div>
                <div className={`${styles.inputWrap} ${styles.fullWidth}`}>
                  <Button className={styles.button} type='submit'>
                    Send Message
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
