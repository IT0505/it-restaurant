import { useState } from 'react';
import styles from './ReadMore.module.scss';

export default function ReadMore({ children, length }) {
  const text = children;
  const textLength = length ? length : 150;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <span className={styles.readMore}>
      {textLength >= children.length ? (
        text
      ) : (
        <>
          {isReadMore ? text.slice(0, textLength) : text}
          <span onClick={toggleReadMore} className={styles.showHideButton}>
            {isReadMore ? '...read more' : ' show less'}
          </span>
        </>
      )}
    </span>
  );
}
