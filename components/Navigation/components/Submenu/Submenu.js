import styles from './Submenu.module.scss';
import { fadeInUp } from 'react-animations';

import { StyleSheet, css } from 'aphrodite';

const classes = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: '0.5s',
  },
});

export default function Submenu(props) {
  const submenu = props.submenu;
  const classImplement = props.classImplement;

  return (
    <div
      className={`${styles.submenu} ${classImplement} ${css(classes.fadeInUp)}`}
    >
      {submenu.map((data, index) => (
        <div className={styles.subItemWrap} key={index}>
          {data.url ? (
            <a className={styles.subItem} href={data.url}>
              {data.title}
            </a>
          ) : (
            <>
              <input
                className={styles.checkbox}
                type='checkbox'
                id={data.title}
                name={data.title}
              ></input>
              <label className={styles.subItem} htmlFor={data.title}>
                {data.title}
                <span className={styles.icon}>
                  <i className='fa-solid fa-angle-right'></i>
                </span>
              </label>
              <Submenu submenu={data.submenu} classImplement={styles.submenu} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
