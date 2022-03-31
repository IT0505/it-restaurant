import styles from './ModalImage.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function ModalImage({ src, alt, setVisibility }) {
  // const [visible, setVisible] = useState();
  return (
    <div className={styles.modal}>
      <span className={styles.close} onClick={() => setVisibility(false)}>
        &times;
      </span>
      <figure className={styles.image}>
        <Image
          src={src}
          alt={alt}
          className={styles.modalContent}
          layout='responsive'
        />
      </figure>
    </div>
  );
}
