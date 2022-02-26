import styles from './ScrollUpButton.module.scss';
import { useEffect, useState } from 'react';

export default function ScrollUpButton() {
  const [top, setTop] = useState(true);

  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setTop(true);
      } else setTop(false);
    };
  }, [top]);

  return (
    !top && (
      <button
        type='button'
        className={styles.scrollUpButton}
        onClick={handleScrollUp}
        style={!top && { display: 'block' }}
      >
        <i className='fa fa-long-arrow-up'></i>
      </button>
    )
  );
}
