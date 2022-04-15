import styles from './ModalImage.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function ModalImage({ className, src, alt }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image
        className={className}
        src={src}
        alt={alt}
        layout='responsive'
        onClick={() => setVisible(true)}
      />
      {visible && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={() => setVisible(false)}>
            &times;
          </span>
          <figure className={styles.image}>
            <Image src={src} alt={alt} layout='responsive' />
          </figure>
        </div>
      )}
    </>
  );
}
