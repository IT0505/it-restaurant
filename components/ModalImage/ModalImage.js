import styles from './ModalImage.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function ModalImage({
  className,
  // children,
  src,
  alt,
  // setVisibility,
}) {
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
            <Image
              src={src}
              alt={alt}
              // className={styles.modalContent}
              layout='responsive'
            />
          </figure>
        </div>
      )}
    </>
  );
}
